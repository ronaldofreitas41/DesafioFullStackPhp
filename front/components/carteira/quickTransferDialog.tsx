"use client"

import { useState, type ReactNode } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import type { Contact } from "@/app/types/carteira"

type QuickTransferDialogProps = {
  children: ReactNode
  contact: Contact
  balance: number
  onTransfer: (contactId: string, amount: number, description: string) => void
}

export function QuickTransferDialog({ children, contact, balance, onTransfer }: QuickTransferDialogProps) {
  const [transferAmount, setTransferAmount] = useState("")
  const [transferDescription, setTransferDescription] = useState("")
  const [open, setOpen] = useState(false)

  const handleTransfer = () => {
    const amount = Number.parseFloat(transferAmount)
    if (isNaN(amount) || amount <= 0 || amount > balance) return

    onTransfer(contact.id, amount, transferDescription)
    setTransferAmount("")
    setTransferDescription("")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Transferir para {contact.name}</DialogTitle>
          <DialogDescription>Conta: {contact.accountNumber}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor={`quick-amount-${contact.id}`}>Valor</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
              <Input
                id={`quick-amount-${contact.id}`}
                type="number"
                placeholder="0,00"
                className="pl-10"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
              />
            </div>
            {Number.parseFloat(transferAmount) > balance && (
              <p className="text-sm text-destructive">Saldo insuficiente</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`quick-description-${contact.id}`}>Descrição (opcional)</Label>
            <Input
              id={`quick-description-${contact.id}`}
              placeholder="Ex: Pagamento"
              value={transferDescription}
              onChange={(e) => setTransferDescription(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleTransfer} disabled={Number.parseFloat(transferAmount) > balance || !transferAmount}>
            Confirmar Transferência
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


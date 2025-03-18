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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Contact } from "@/app/types/carteira"

type TransferDialogProps = {
  children: ReactNode
  contacts: Contact[]
  balance: number
  onTransfer: (contactId: string, amount: number, description: string) => void
}

export function TransferDialog({ children, contacts, balance, onTransfer }: TransferDialogProps) {
  const [transferAmount, setTransferAmount] = useState("")
  const [transferDescription, setTransferDescription] = useState("")
  const [transferTo, setTransferTo] = useState("")
  const [open, setOpen] = useState(false)

  const handleTransfer = () => {
    const amount = Number.parseFloat(transferAmount)
    if (isNaN(amount) || amount <= 0 || amount > balance || !transferTo) return

    onTransfer(transferTo, amount, transferDescription)
    setTransferAmount("")
    setTransferDescription("")
    setTransferTo("")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Realizar Transferência</DialogTitle>
          <DialogDescription>Transfira dinheiro para outra conta.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="transfer-to">Destinatário</Label>
            <Select value={transferTo} onValueChange={setTransferTo}>
              <SelectTrigger id="transfer-to">
                <SelectValue placeholder="Selecione um contato" />
              </SelectTrigger>
              <SelectContent>
                {contacts.map((contact) => (
                  <SelectItem key={contact.id} value={contact.id}>
                    <div className="flex items-center">
                      {contact.name} ({contact.account_number})
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="transfer-amount">Valor</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
              <Input
                id="transfer-amount"
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
            <Label htmlFor="transfer-description">Descrição (opcional)</Label>
            <Input
              id="transfer-description"
              placeholder="Ex: Pagamento de conta"
              value={transferDescription}
              onChange={(e) => setTransferDescription(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleTransfer}
            disabled={Number.parseFloat(transferAmount) > balance || !transferTo || !transferAmount}
          >
            Confirmar Transferência
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


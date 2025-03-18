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

type DepositDialogProps = {
  children: ReactNode
  onDeposit: (amount: number, description: string) => void
}

export function DepositDialog({ children, onDeposit }: DepositDialogProps) {
  const [depositAmount, setDepositAmount] = useState("")
  const [depositDescription, setDepositDescription] = useState("")
  const [open, setOpen] = useState(false)

  const handleDeposit = () => {
    const amount = Number.parseFloat(depositAmount)
    if (isNaN(amount) || amount <= 0) return

    onDeposit(amount, depositDescription)
    setDepositAmount("")
    setDepositDescription("")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Realizar Depósito</DialogTitle>
          <DialogDescription>Adicione dinheiro à sua carteira financeira.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="deposit-amount">Valor</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
              <Input
                id="deposit-amount"
                type="number"
                placeholder="0,00"
                className="pl-10"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="deposit-description">Descrição (opcional)</Label>
            <Input
              id="deposit-description"
              placeholder="Ex: Depósito em dinheiro"
              value={depositDescription}
              onChange={(e) => setDepositDescription(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleDeposit}>Confirmar Depósito</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


"use client"

import { useState } from "react"
import { ArrowDownIcon, ArrowUpIcon, BanknoteIcon, Clock8Icon, RefreshCcwIcon, UserIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import type { Transaction } from "@/app/types/carteira"
import { formatCurrency, formatDate, canUndoTransaction } from "@/utils/format"

type TransactionItemProps = {
  transaction: Transaction
  index: number
  onUndoTransaction: (transaction: Transaction) => void
}

export function TransactionItem({ transaction, index, onUndoTransaction }: TransactionItemProps) {
  const [open, setOpen] = useState(false)
  const canUndo = canUndoTransaction(transaction.date, index)

  const handleUndo = () => {
    onUndoTransaction(transaction)
    setOpen(false)
  }

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <div
          className={`rounded-full p-2 ${
            transaction.type === "deposit"
              ? "bg-green-100"
              : transaction.type === "transfer_in"
                ? "bg-blue-100"
                : "bg-orange-100"
          }`}
        >
          {transaction.type === "deposit" && <BanknoteIcon className="h-5 w-5 text-green-600" />}
          {transaction.type === "transfer_in" && <ArrowDownIcon className="h-5 w-5 text-blue-600" />}
          {transaction.type === "transfer_out" && <ArrowUpIcon className="h-5 w-5 text-orange-600" />}
        </div>
        <div>
          <p className="font-medium">{transaction.description}</p>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock8Icon className="mr-1 h-3 w-3" />
            {formatDate(transaction.date)}
          </div>
          {transaction.from && (
            <div className="flex items-center text-sm text-muted-foreground">
              <UserIcon className="mr-1 h-3 w-3" />
              De: {transaction.from}
            </div>
          )}
          {transaction.to && (
            <div className="flex items-center text-sm text-muted-foreground">
              <UserIcon className="mr-1 h-3 w-3" />
              Para: {transaction.to}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className={`text-right ${transaction.type === "transfer_out" ? "text-red-600" : "text-green-600"}`}>
          <p className="text-lg font-bold">
            {transaction.type === "transfer_out" ? "-" : "+"}
            {formatCurrency(transaction.amount)}
          </p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              disabled={!canUndo}
              title={canUndo ? "Desfazer transação" : "Não é possível desfazer transações antigas"}
              className={!canUndo ? "opacity-30 cursor-not-allowed" : ""}
            >
              <RefreshCcwIcon className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Desfazer Transação</DialogTitle>
              <DialogDescription>
                Tem certeza que deseja desfazer esta transação? Esta ação não pode ser revertida.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{transaction.description}</p>
                  <p className={`font-bold ${transaction.type === "transfer_out" ? "text-red-600" : "text-green-600"}`}>
                    {transaction.type === "transfer_out" ? "-" : "+"}
                    {formatCurrency(transaction.amount)}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{formatDate(transaction.date)}</p>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button variant="destructive" onClick={handleUndo}>
                Desfazer Transação
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}


import type { Transaction } from "@/app/types/carteira"
import { TransactionItem } from "./transaction-item"

type TransactionListProps = {
  transactions: Transaction[]
  onUndoTransaction: (transaction: Transaction) => void
}

export function TransactionList({ transactions, onUndoTransaction }: TransactionListProps) {
  return (
    <div className="rounded-md border">
      {transactions.length > 0 ? (
        <div className="divide-y">
          {transactions.map((transaction, index) => (
            <TransactionItem
              key={index}
              transaction={transaction}
              index={index}
              onUndoTransaction={onUndoTransaction}
            />
          ))}
        </div>
      ) : (
        <div className="p-4 text-center text-muted-foreground">Nenhuma transação encontrada</div>
      )}
    </div>
  )
}


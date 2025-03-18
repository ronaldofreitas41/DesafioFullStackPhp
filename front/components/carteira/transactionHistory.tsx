import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import type { Transaction } from "@/app/types/carteira"
import { TransactionList } from "./transactionList"

type TransactionHistoryProps = {
  transactions: Transaction[]
  onUndoTransaction: (transaction: Transaction) => void
}

export function TransactionHistory({ transactions, onUndoTransaction }: TransactionHistoryProps) {
  return (
    <Tabs defaultValue="all" className="space-y-4">
      <div className="flex items-center justify-between">
        <TabsList>
          <TabsTrigger value="all">Todas</TabsTrigger>
          <TabsTrigger value="in">Entradas</TabsTrigger>
          <TabsTrigger value="out">Saídas</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="all" className="space-y-4">
        <h2 className="text-xl font-semibold">Histórico de Transações</h2>
        <TransactionList transactions={transactions} onUndoTransaction={onUndoTransaction} />
      </TabsContent>

      <TabsContent value="in" className="space-y-4">
        <h2 className="text-xl font-semibold">Entradas</h2>
        <TransactionList
          transactions={transactions.filter((t) => t.type === "deposit" || t.type === "transfer_in")}
          onUndoTransaction={onUndoTransaction}
        />
      </TabsContent>

      <TabsContent value="out" className="space-y-4">
        <h2 className="text-xl font-semibold">Saídas</h2>
        <TransactionList
          transactions={transactions.filter((t) => t.type === "transfer_out")}
          onUndoTransaction={onUndoTransaction}
        />
      </TabsContent>
    </Tabs>
  )
}


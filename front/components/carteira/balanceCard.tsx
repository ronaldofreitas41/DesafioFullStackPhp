import { DollarSignIcon, ArrowDownIcon, ArrowRightIcon } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "../../utils/format"
import { DepositDialog } from "./depositDialog"
import { TransferDialog } from "./transferDialog"
import { Contact } from "@/app/types/carteira"

type BalanceCardProps = {
  balance: number 
  contacts: Contact[]
  onDeposit: (amount: number, description: string) => void
  onTransfer: (contactId: string, amount: number, description: string) => void
}

export function BalanceCard({ balance, contacts, onDeposit, onTransfer }: BalanceCardProps) {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">Saldo Disponível</CardTitle>
        <DollarSignIcon className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{formatCurrency(balance)}</div>
        <p className="text-xs text-muted-foreground mt-1">Atualizado em {new Date().toLocaleDateString("pt-BR")}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <DepositDialog onDeposit={onDeposit}>
          <Button variant="outline">
            <ArrowDownIcon className="mr-2 h-4 w-4" />
            Depositar
          </Button>
        </DepositDialog>

        <TransferDialog contacts={contacts} balance={balance} onTransfer={onTransfer}>
          <Button>
            <ArrowRightIcon className="mr-2 h-4 w-4" />
            Transferir
          </Button>
        </TransferDialog>
      </CardFooter>
    </Card>
  )
}


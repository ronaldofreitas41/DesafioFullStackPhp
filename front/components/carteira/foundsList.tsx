import type { Fund } from "@/app/types/carteira"
import { FundCard } from "./foundCard"


type FundsListProps = {
  funds: Fund[]
  balance: number
  onInvest: (fund: Fund, amount: number) => void
}

export function FundsList({ funds, balance, onInvest }: FundsListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {funds.map((fund) => (
        <FundCard key={fund.id} fund={fund} balance={balance} onInvest={onInvest} />
      ))}
    </div>
  )
}


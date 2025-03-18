import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Fund, Investment } from "@/app/types/carteira"
import { formatCurrency } from "@/utils/format"
import { FundsList } from "./foundsList"
import { InvestmentsList } from "./investimentsList"


type InvestmentSectionProps = {
  funds: Fund[]
  investments: Investment[]
  balance: number
  onInvest: (fund: Fund, amount: number) => void
}

export function InvestmentSection({ funds, investments, balance, onInvest }: InvestmentSectionProps) {
  const getTotalInvestments = () => {
    return investments.reduce((total, investment) => Number(total) + Number(investment.currentValue), 0)
  }

  return (
    <Tabs defaultValue="funds" className="space-y-4">
      <div className="flex items-center justify-between">
        <TabsList>
          <TabsTrigger value="funds">Fundos Disponíveis</TabsTrigger>
          <TabsTrigger value="my-investments">Meus Investimentos</TabsTrigger>
        </TabsList>
        <div className="flex items-center">
          <p className="mr-4 text-sm font-medium">
            Total Investido: <span className="font-bold">{formatCurrency(getTotalInvestments())}</span>
          </p>
        </div>
      </div>

      <TabsContent value="funds" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Fundos de Investimento</h2>
          <p className="text-sm text-muted-foreground">Selecione um fundo para investir</p>
        </div>
        <FundsList funds={funds} balance={balance} onInvest={onInvest} />
      </TabsContent>

      <TabsContent value="my-investments" className="space-y-4">
        <h2 className="text-xl font-semibold">Meus Investimentos</h2>
        <InvestmentsList investments={investments} funds={funds} />
      </TabsContent>
    </Tabs>
  )
}


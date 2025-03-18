import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import type { Fund, Investment } from "@/app/types/carteira"
import { formatCurrency, getRiskColor, getReturnPercentage } from "@/utils/format"

type InvestmentsListProps = {
  investments: Investment[]
  funds: Fund[]
}

export function InvestmentsList({ investments, funds }: InvestmentsListProps) {
  if (investments.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6 text-center">
          <p className="text-muted-foreground">Você ainda não possui investimentos em fundos.</p>
          <Button className="mt-4" variant="outline">
            Começar a investir
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {investments.map((investment) => {
        const fund = funds.find((f) => f.id === investment.fundId)
        if (!fund) return null

        const returnPercentage = getReturnPercentage(investment.amount, investment.currentValue)
        const isPositive = returnPercentage >= 0

        return (
          <Card key={investment.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{fund.name}</CardTitle>
                <div className={`text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>
                  {isPositive ? "+" : ""}
                  {returnPercentage.toFixed(2)}%
                </div>
              </div>
              <CardDescription>Investido em {investment.date.toLocaleDateString("pt-BR")}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                  <p className="text-sm text-muted-foreground">Valor investido</p>
                  <p className="font-medium">{formatCurrency(investment.amount)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Valor atual</p>
                  <p className="font-medium">{formatCurrency(investment.currentValue)}</p>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>Rendimento</span>
                  <span className={isPositive ? "text-green-600" : "text-red-600"}>
                    {formatCurrency(investment.currentValue - investment.amount)}
                  </span>
                </div>
                <Progress
                  value={returnPercentage > 0 ? returnPercentage : 0}
                  max={10}
                  className={`h-2 ${isPositive ? "bg-green-100" : "bg-red-100"}`}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                <span className={getRiskColor(fund.risk)}>
                  {fund.risk === "baixo" && "Risco Baixo"}
                  {fund.risk === "medio" && "Risco Médio"}
                  {fund.risk === "alto" && "Risco Alto"}
                </span>
              </div>
              <Button variant="outline" size="sm">
                Resgatar
              </Button>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}


"use client"

import { useState } from "react"
import { BarChart3Icon, TrendingUpIcon, PieChartIcon, DollarSignIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Fund } from "@/app/types/carteira"
import { formatCurrency, getRiskColor } from "../../utils/format"

type FundCardProps = {
  fund: Fund
  balance: number
  onInvest: (fund: Fund, amount: number) => void
}

export function FundCard({ fund, balance, onInvest }: FundCardProps) {
  const [investmentAmount, setInvestmentAmount] = useState("")
  const [open, setOpen] = useState(false)

  const handleInvest = () => {
    const amount = Number.parseFloat(investmentAmount)
    if (isNaN(amount) || amount <= 0 || amount > balance || amount < fund.minimumInvestment) return

    onInvest(fund, amount)
    setInvestmentAmount("")
    setOpen(false)
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>{fund.name}</CardTitle>
          {fund.type === "renda-fixa" && <BarChart3Icon className="h-5 w-5 text-blue-500" />}
          {fund.type === "acoes" && <TrendingUpIcon className="h-5 w-5 text-purple-500" />}
          {fund.type === "multimercado" && <PieChartIcon className="h-5 w-5 text-amber-500" />}
          {fund.type === "cambial" && <DollarSignIcon className="h-5 w-5 text-green-500" />}
        </div>
        <CardDescription>{fund.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-muted-foreground">Rentabilidade anual</p>
            <p className="font-medium text-green-600">{fund.annualReturn}%</p>
          </div>
          <div>
            <p className="text-muted-foreground">Aplicação mínima</p>
            <p className="font-medium">{formatCurrency(fund.minimumInvestment)}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Risco</p>
            <p className={`font-medium ${getRiskColor(fund.risk)}`}>
              {fund.risk === "baixo" && "Baixo"}
              {fund.risk === "medio" && "Médio"}
              {fund.risk === "alto" && "Alto"}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Gestor</p>
            <p className="font-medium">{fund.manager}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="w-full">Investir</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Investir em {fund.name}</DialogTitle>
              <DialogDescription>Aplicação mínima: {formatCurrency(fund.minimumInvestment)}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="investment-amount">Valor do investimento</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                  <Input
                    id="investment-amount"
                    type="number"
                    placeholder="0,00"
                    className="pl-10"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                  />
                </div>
                {Number.parseFloat(investmentAmount) > balance && (
                  <p className="text-sm text-destructive">Saldo insuficiente</p>
                )}
                {Number.parseFloat(investmentAmount) < fund.minimumInvestment &&
                  Number.parseFloat(investmentAmount) > 0 && (
                    <p className="text-sm text-destructive">Valor abaixo da aplicação mínima</p>
                  )}
              </div>
              <div className="rounded-md bg-muted p-3">
                <div className="text-sm">
                  <p className="font-medium">Informações do investimento:</p>
                  <p>
                    Tipo:{" "}
                    {fund.type === "renda-fixa"
                      ? "Renda Fixa"
                      : fund.type === "acoes"
                        ? "Ações"
                        : fund.type === "multimercado"
                          ? "Multimercado"
                          : "Cambial"}
                  </p>
                  <p>Rentabilidade anual estimada: {fund.annualReturn}%</p>
                  <p>Gestor: {fund.manager}</p>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={handleInvest}
                disabled={
                  Number.parseFloat(investmentAmount) > balance ||
                  Number.parseFloat(investmentAmount) < fund.minimumInvestment ||
                  !investmentAmount
                }
              >
                Confirmar Investimento
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}


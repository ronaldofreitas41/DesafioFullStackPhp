export type Transaction = {
    id: string
    type: "deposit" | "transfer_in" | "transfer_out"
    amount: number
    date: Date
    description: string
    from?: string
    to?: string
  }
  
  export type Contact = {
    id: string
    name: string
    account_number: string
    avatar?: string
  }
  
  export type Fund = {
    id: number
    name: string
    type: "renda-fixa" | "acoes" | "multimercado" | "cambial"
    minimumInvestment: number
    annualReturn: number
    risk: "baixo" | "medio" | "alto"
    manager: string
    description: string
  }
  
  export type Investment = {
    id: string
    fundId: number
    amount: number
    date: Date
    currentValue: number
  }
  
  
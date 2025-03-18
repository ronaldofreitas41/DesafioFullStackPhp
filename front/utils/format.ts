export const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  }
  
  export const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }
  
  export const getRiskColor = (risk: "baixo" | "medio" | "alto") => {
    switch (risk) {
      case "baixo":
        return "text-green-600"
      case "medio":
        return "text-amber-600"
      case "alto":
        return "text-red-600"
      default:
        return ""
    }
  }
  
  export const getReturnPercentage = (originalAmount: number, currentValue: number) => {
    return ((currentValue - originalAmount) / originalAmount) * 100
  }
  
  export const canUndoTransaction = (transaction: Date, index: number) => {
    return index === 0 || new Date().getTime() - transaction.getTime() < 24 * 60 * 60 * 1000
  }
  
  
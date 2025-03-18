"use client"

import { useEffect, useState } from "react"
import type { Transaction, Contact, Fund, Investment } from "@/app/types/carteira"

import { getFunds } from "@/server/founds"
import { createInvestment, getInvestmentById } from "@/server/investiments"
import { getContactById } from "@/server/contacts"
import { createDeposit, deleteDeposit, getDepositById } from "@/server/deposits"
import { BalanceCard } from "@/components/carteira/balanceCard"
import { ContactsList } from "@/components/carteira/contactsList"
import { TransactionHistory } from "@/components/carteira/transactionHistory"
import { InvestmentSection } from "@/components/carteira/investimentSection"
import { getUserById } from "@/server/user"
import { createTransference, deleteTransference, getReceiveById, getTransferenceById } from "@/server/transferences"

export default function Carteira() {
  const [balance, setBalance] = useState(0)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [contacts, setContacts] = useState<Contact[]>([])
  const [funds, setFunds] = useState<Fund[]>([])
  const [investments, setInvestments] = useState<Investment[]>([])
  const [user, setUser] = useState({})

  useEffect(() => {
    const token = typeof window !== "undefined" ? (window.sessionStorage.getItem('token') || '{}') : '{}';
    const user_id = typeof window !== "undefined" ? (window.sessionStorage.getItem('user_id') || '{}') : '{}';
    const fetchData = async () => {
      if (user_id && token) {
        const data = await getUserById(parseInt(user_id));
        setUser(data);
        const contactData = await getContactById(parseInt(user_id), token);
        setContacts(contactData);

        const depositData = await getDepositById(parseInt(user_id), token);
        let history: Transaction[] = getAlldeposits(depositData);


        const fundData = await getFunds(token);
        const fundss: Fund[] = getallFunds(fundData);
        setFunds([...fundss, ...funds]);


        const investimentsData = await getInvestmentById(parseInt(user_id), token);
        const investmentss: Investment[] = getallInvestments(investimentsData);
        setInvestments([...investmentss, ...investments]);

        const transferencesData = await getTransferenceById(parseInt(user_id), token);
        const moreReceives = await getReceiveById(parseInt(user_id), token);
        let history2 = getAllTransferences(transferencesData, moreReceives);
        setTransactions([...history2, ...history, ...transactions]);
      }
    }

    //Função para pegar todas as transferencias e adiciona-las ao historico
    function getAllTransferences(transferencesData: any, moreReceives: any) {
      let history: Transaction[] = [];
      transferencesData.forEach((e: {
        id: number,
        amount: string,
        created_at: string,
        description: string,
      }) => {
        const transference: Transaction = {
          id: e.id.toString(),
          type: "transfer_out",
          amount: parseFloat(e.amount),
          date: new Date(e.created_at),
          description: e.description,
        }
        setBalance((prev) => prev - parseFloat(e.amount));
        history.push(transference);
      });

      moreReceives.forEach((e: {
        id: number,
        amount: string,
        created_at: string,
        description: string,
      }) => {
        const receive: Transaction = {
          id: e.id.toString(),
          type: "transfer_in",
          amount: parseFloat(e.amount),
          date: new Date(e.created_at),
          description: e.description,
        }
        setBalance((prev) => prev + parseFloat(e.amount));
        history.push(receive);
      });

      return history;
    }
    //Função para pegar todos os fundos e adiciona-los ao array de fundos
    function getallFunds(fundData: any) {
      let fundss: Fund[] = [];

      fundData.forEach((e: {
        name: string,
        id: number,
        type: string,
        minimum_investment: number,
        annualReturn: number,
        risk: string,
        manager: string,
        description: string
      }) => {
        const fund: Fund = {
          id: e.id,
          name: e.name,
          type: e.type as "renda-fixa" | "acoes" | "multimercado" | "cambial",
          minimumInvestment: e.minimum_investment,
          annualReturn: e.annualReturn,
          risk: e.risk as "baixo" | "medio" | "alto",
          manager: e.manager,
          description: e.description,
        }
        fundss.push(fund);
      });

      return fundss;
    }

    //Função para pegar todos os investimentos e adiciona-los ao array de investimentos
    function getallInvestments(investimentsData: any) {
      let investmentss: Investment[] = [];
      investimentsData.forEach((e: {
        amount: number,
        id: number,
        fund_id: number,
        created_at: any,
        current_value: number
      }) => {
        const investment: Investment = {
          id: e.id.toString(),
          fundId: e.fund_id,
          amount: e.amount,
          date: new Date(e.created_at),
          currentValue: e.current_value,
        }
        investmentss.push(investment);
      });
      return investmentss;
    }

    //Função para pegar todos os depositos e adiciona-los ao historico
    function getAlldeposits(depositData: any) {
      let history: Transaction[] = [];
      depositData.forEach((e: { amount: string, id: Number, created_at: any, description: string }) => {
        setBalance((prev) => prev + parseInt(e.amount));
        const deposit: Transaction = {
          id: e.id.toString(),
          type: "deposit",
          amount: parseInt(e.amount),
          date: new Date(e.created_at),
          description: e.description || 'Depósito',
        }
        history.push(deposit);
      });
      return history;
    }
    fetchData()
  }, [])

  //Função para adicionar um deposito
  const handleDeposit = async (amount: number, description: string) => {
    const newTransaction: Transaction = {
      id: Date.now().toString(),
      type: "deposit",
      amount,
      date: new Date(),
      description: description || "Depósito",
    }
    const user_id = typeof window !== "undefined" ? (window.sessionStorage.getItem('user_id') || '{}') : '{}';
    const token = typeof window !== "undefined" ? (window.sessionStorage.getItem('token') || '{}') : '{}';
    if (user_id && token) {
      const id: number = parseInt(user_id);
      const res = await createDeposit({ 
        user_id: id,
        amount,
        description
       }, token);
      console.log("res: ", res);
    }

    setTransactions([newTransaction, ...transactions])
    setBalance((prev) => prev + amount)
  }

  //Função para transferir dinheiro
  const handleTransfer = (contactId: string, amount: number, description: string) => {
    const recipient = contacts.find((c) => c.id === contactId)
    if (!recipient) return

    const newTransaction: Transaction = {
      id: Date.now().toString(),
      type: "transfer_out",
      amount,
      date: new Date(),
      description: description || "Transferência",
      to: recipient.name,
    }

    setTransactions([newTransaction, ...transactions])
    setBalance((prev) => prev - amount)
  }

  //Função para investir
  const handleInvest = (fund: Fund, amount: number) => {
    const newInvestment: Investment = {
      id: Date.now().toString(),
      fundId: Number(fund.id),
      amount: amount,
      date: new Date(),
      currentValue: amount, // Inicialmente o valor atual é igual ao investido
    }
    const user_id = typeof window !== "undefined" ? (window.sessionStorage.getItem('user_id') || '{}') : '{}';
    const token = typeof window !== "undefined" ? (window.sessionStorage.getItem('token') || '{}') : '{}';
    if (token && user_id) {
      const id: number = parseInt(user_id);

      const res = createInvestment({
        user_id: id,
        fund_id: Number(fund.id),
        amount,
        current_value: amount,
        // date: new Date(),
      }, token);

      console.log("res: ", res);
    }

    const newTransaction: Transaction = {
      id: Date.now().toString() + "-tx",
      type: "transfer_out",
      amount,
      date: new Date(),
      description: `Investimento em ${fund.name}`,
      to: fund.manager,
    }

    setInvestments([...investments, newInvestment])
    setTransactions([newTransaction, ...transactions])
    setBalance((prev) => prev - amount)
  }

  //Função para desfazer uma transação
  const handleUndoTransaction = (transaction: Transaction) => {
    // Atualizar o saldo com base no tipo de transação
    if (transaction.type === "deposit" ) {
      deleteDeposit(parseInt(transaction.id), typeof window !== "undefined" ? (window.sessionStorage.getItem('token') || '{}') : '{}');
      setBalance((prev) => prev - transaction.amount);

    } else if (transaction.type === "transfer_in") {
      deleteTransference(parseInt(transaction.id), typeof window !== "undefined" ? (window.sessionStorage.getItem('token') || '{}') : '{}');
      setBalance((prev) => prev - transaction.amount);
      
    } else if (transaction.type === "transfer_out") {
      // Se foi uma saída, adicionar ao saldo
      deleteTransference(parseInt(transaction.id), typeof window !== "undefined" ? (window.sessionStorage.getItem('token') || '{}') : '{}');
      setBalance((prev) => prev + transaction.amount)

      // Se foi um investimento, remover o investimento correspondente
      if (transaction.description.includes("Investimento em")) {
        const investmentToRemove = investments.find(
          (inv) => new Date(inv.date).getTime() === transaction.date.getTime() && inv.amount === transaction.amount,
        )

        if (investmentToRemove) {
          setInvestments(investments.filter((inv) => inv.id !== investmentToRemove.id))
        }
      }
    }

    // Remover a transação do histórico
    setTransactions(transactions.filter((t) => t.id !== transaction.id))
  }
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <BalanceCard balance={balance} contacts={contacts} onDeposit={handleDeposit} onTransfer={handleTransfer} />
        <ContactsList contacts={contacts} balance={balance} onTransfer={handleTransfer} />
      </div>

      <TransactionHistory transactions={transactions} onUndoTransaction={handleUndoTransaction} />

      <InvestmentSection funds={funds} investments={investments} balance={balance} onInvest={handleInvest} />
    </div>
  )
}
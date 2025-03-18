import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"
import type { Contact } from "@/app/types/carteira"
import { QuickTransferDialog } from "./quickTransferDialog"
import { Input } from "@/components/ui/input"

type ContactsListProps = {
  contacts: Contact[]
  balance: number
  onTransfer: (contactId: string, amount: number, description: string) => void
}

export function ContactsList({ contacts, balance, onTransfer }: ContactsListProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.account_number.includes(searchTerm)
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contatos Frequentes</CardTitle>
        <CardDescription>Transfira rapidamente para seus contatos</CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          type="text"
          placeholder="Buscar contatos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />
        <div className="space-y-4">
          {filteredContacts.slice(0, 5).map((contact) => (
            <div key={contact.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={contact.avatar} />
                  <AvatarFallback>{contact.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{contact.name}</p>
                  <p className="text-xs text-muted-foreground">Conta: {contact.account_number}</p>
                </div>
              </div>
              <QuickTransferDialog contact={contact} balance={balance} onTransfer={onTransfer}>
                <Button variant="ghost" size="icon">
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </QuickTransferDialog>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
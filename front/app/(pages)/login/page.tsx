'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { login } from "@/server/login"
import { createUser } from "@/server/user"
import { redirect } from "next/navigation"
import { useState } from "react"
import InputMask from 'react-input-mask'

export default function Login() {

    const [emailL, setEmailL] = useState('');
    const [passwordL, setPasswordL] = useState('');
    const [name, setName] = useState('');
    const [emailR, setEmailR] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [passwordR, setPasswordR] = useState('');

    const dataR = {
        email: emailR,
        password: passwordR,
        name: name,
        cpf: cpf,
        telefone: telefone
    }

    const dataL = {
        email: emailL,
        password: passwordL
    }

    const handleLogin = async (event: any) => {
        event.preventDefault();
        console.log(dataL);
        const res = await login(dataL.email, dataL.password);
        if (res.data) {
            sessionStorage.setItem('token', res.data.token);
            sessionStorage.setItem('user_id', res.data.userId);
            window.location.href = '/';
        } else if (res.message) {
            alert(res.message);
        }
    }

    async function saveUser() {
        const res = await createUser(dataR);
        console.log(res);
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Login</TabsTrigger>
                    <TabsTrigger value="password">Register</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>Realize suas movimentações com praticidade e segurança.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="emailL">Email</Label>
                                <Input required name="Email" id="Email" placeholder="ronaldo@gmail.com" onChange={(e) => setEmailL(e.target.value)} type="email" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="passwordL">Password</Label>
                                <Input required name="Password" id="Password" placeholder="******" onChange={(e) => setPasswordL(e.target.value)} type="password" />
                            </div>
                        </CardContent>
                        <CardFooter className="flex space-x-5">
                            <Button onClick={handleLogin}>Login</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="password">
                    <Card>
                        <CardHeader>
                            <CardTitle>Registro</CardTitle>
                            <CardDescription>Crie sua conta por aqui.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="Nome"> Nome </Label>
                                <Input placeholder="Jose de Freitas" onChange={(e) => setName(e.target.value)} id="Nome" value={name} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="cpf"> CPF </Label>
                                <Input id="cpf" placeholder="123.456.789-10" onChange={(e) => setCpf(e.target.value)} type="text"  />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="telefone"> Telefone </Label>
                                <Input id="telefone" placeholder="(DDD) 12345-6789" onChange={(e) => setTelefone(e.target.value)} type="text"  />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="emailR"> E-mail </Label>
                                <Input id="emailR" placeholder="jose.freitas@gmail.com" onChange={(e) => setEmailR(e.target.value)} type="text" value={emailR} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="passwordR"> Password </Label>
                                <Input id="passwordR" placeholder="*********" onChange={(e) => setPasswordR(e.target.value)} type="password" value={passwordR} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={saveUser}>Save</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
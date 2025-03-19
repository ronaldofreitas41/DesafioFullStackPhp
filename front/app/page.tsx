'use client';
import Carteira from "@/components/home/carteira";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUserById } from "@/server/user";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nome, setNome] = useState('');
  const router = useRouter();
  const token = typeof window !== "undefined" ? (window.sessionStorage.getItem('token') || null) : '{}';
  const user_id = typeof window !== "undefined" ? (window.sessionStorage.getItem('user_id') || null) : '{}';

  useEffect(() => {
    if (token && user_id) {
      setIsLoggedIn(true);

      const user = getUserById(parseInt(user_id)).then((data) => {
        const name = data.name;
        setNome(name.split(" ")[0]);
      });;
      setNome
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLoginRedirect = () => {
    router.push('/login');
  };


  const handleLogOutRedirect = () => {
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('user_id');
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <main className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-8">Carteira Financeira</h1>
        <div className="flex space-x-2">
          {!isLoggedIn && (
            <Button className="hover-white" onClick={handleLoginRedirect}>Login</Button>
          )}
          {isLoggedIn && (
            <>
              <p className="text-lg font-semibold">Olá, {nome}</p>
              <Button className="hover-white" onClick={handleLogOutRedirect}>Log Out</Button>
            </>
          )}
        </div>
      </div>
      <Carteira />
    </main>
  );
}
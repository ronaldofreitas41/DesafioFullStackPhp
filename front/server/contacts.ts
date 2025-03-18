'use server';

export const getContacts = async (token:string) => {
    const response = await fetch(`http://127.0.0.1:8000/api/contacts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
        }
    });
    
    const data = await response.json();
    return data;
};

export const getContactById = async (id: number, token:string) => {

    const response = await fetch(`http://127.0.0.1:8000/api/contacts/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // 'X-CSRF-TOKEN': '',
            'Authorization': `Bearer ${token}` // Adicione o token de autenticação aqui
        }
    });
    const data = await response.json();
    return data;
};

export const createContact= async (user: { name: string; email: string; cpf: string; telefone: string; password: string }, token:string) => {
    const response = await fetch(`http://127.0.0.1:8000/api/contacts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.AUTH_TOKEN}` // Adicione o token de autenticação aqui
        },
        body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
};

export const updateContact = async (id: number, user: { name?: string; acountNumber?: string; },token:string) => {
    const response = await fetch(`http://127.0.0.1:8000/api/contacts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.AUTH_TOKEN}` // Adicione o token de autenticação aqui
        },
        body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
};

export const deleteContact = async (id: number, string:string) => {
    const response = await fetch(`http://127.0.0.1:8000/api/contacts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.AUTH_TOKEN}` // Adicione o token de autenticação aqui
        }
    });
    return response.ok;
};
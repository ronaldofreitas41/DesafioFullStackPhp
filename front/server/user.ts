'use server';

const apiUrl = 'http://127.0.0.1:8000/api';

export const getUsers = async () => {
    const response = await fetch(`${apiUrl}/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
};

export const getUserById = async (id: number) => {

    
    const response = await fetch(`http://127.0.0.1:8000/api/users/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': '',
            // 'Authorization': `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
    
};

export const createUser = async (user: { name: string; email: string; cpf: string; telefone: string; password: string }) => {
    console.log("Body: ",JSON.stringify(user));
    const response = await fetch(`${apiUrl}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
};

export const updateUser = async (id: number, user: { name?: string; email?: string; cpf?: string; telefone?: string; password?: string }) => {
    const response = await fetch(`${apiUrl}/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
};

export const deleteUser = async (id: number) => {
    const response = await fetch(`${apiUrl}/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`,
        },
    });
    return response.ok;
};
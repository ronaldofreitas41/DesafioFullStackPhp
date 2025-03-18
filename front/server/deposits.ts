'use server';

export const getDeposits = async (token:string) => {
    // const token = getAuthToken();
    const response = await fetch(`http://127.0.0.1:8000/api/deposits`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
};

export const getDepositById = async (id: number, token:string) => {
    // const token = getAuthToken();
    const response = await fetch(`http://127.0.0.1:8000/api/deposits/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
};

export const createDeposit = async (deposit: { user_id: number; amount: number; description: string },token:string) => {
    
    const response = await fetch(`http://127.0.0.1:8000/api/deposits`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(deposit),
    });
    const data = await response.json();
    return data;
};

export const updateDeposit = async (id: number, deposit: { user_id?: number; amount?: number; description?: string },token:string) => {
    // const token = getAuthToken();
    const response = await fetch(`http://127.0.0.1:8000/api/deposits/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(deposit),
    });
    const data = await response.json();
    return data;
};

export const deleteDeposit = async (id: number,token:string) => {
    // const token = getAuthToken();
    const response = await fetch(`http://127.0.0.1:8000/api/deposits/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    return response.ok;
};
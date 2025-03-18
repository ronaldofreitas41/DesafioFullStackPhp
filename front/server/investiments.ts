'use server';


export const getInvestments = async (token: string) => {
   
    const response = await fetch(`http://127.0.0.1:8000/api/investments`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
};

export const getInvestmentById = async (id: number, token: string) => {
    
    const response = await fetch(`http://127.0.0.1:8000/api/investments/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
};

export const createInvestment = async (investment: { user_id: number; fund_id: number; amount: number; current_value: number; date?: string }, token: string) => {
    const body = JSON.stringify(investment);
    console.log(body);
    
    const response = await fetch(`http://127.0.0.1:8000/api/investments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: body,
    });

    const data = await response.json();
    return data;
};

export const updateInvestment = async (id: number, investment: { user_id?: number; fund_id?: number; amount?: number; current_value?: number; date?: string }, token: string) => {
   
    const response = await fetch(`http://127.0.0.1:8000/api/investments/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(investment),
    });
    const data = await response.json();
    return data;
};

export const deleteInvestment = async (id: number, token: string) => {

    const response = await fetch(`http://127.0.0.1:8000/api/investments/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    return response.ok;
};
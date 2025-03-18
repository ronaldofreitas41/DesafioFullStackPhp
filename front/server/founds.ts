'use server';

export const getFunds = async (token: string) => {
    // const token = getAuthToken();
    const response = await fetch(`http://127.0.0.1:8000/api/funds`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
};

export const getFundById = async (id: number, token: string) => {
    // const token = getAuthToken();
    const response = await fetch(`http://127.0.0.1:8000/api/funds/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
};

export const createFund = async (fund: { user_id: number; name: string; type: string; minimum_investment: number; annual_return: number; risk: string; manager: string; description: string }, token: string) => {
    // const token = getAuthToken();
    const response = await fetch(`http://127.0.0.1:8000/api/funds`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(fund),
    });
    const data = await response.json();
    return data;
};

export const updateFund = async (id: number, fund: { user_id?: number; name?: string; type?: string; minimum_investment?: number; annual_return?: number; risk?: string; manager?: string; description?: string }, token: string) => {
    // const token = getAuthToken();
    const response = await fetch(`http://127.0.0.1:8000/api/funds/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(fund),
    });
    const data = await response.json();
    return data;
};

export const deleteFund = async (id: number, token: string) => {
    // const token = getAuthToken();
    const response = await fetch(`http://127.0.0.1:8000/api/funds/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    return response.ok;
};
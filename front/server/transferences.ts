'use server';

const apiUrl = 'http://127.0.0.1:8000/api';

export const getTransferences = async (token: string) => {
    const response = await fetch(`${apiUrl}/transferences`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch transferences');
    }

    const data = await response.json();
    return data;
};

export const getTransferenceById = async (id: number, token: string) => {
    const response = await fetch(`${apiUrl}/transference/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch transference');
    }

    const data = await response.json();
    return data;
};

export const getReceiveById = async (id: number, token: string) => {
    const response = await fetch(`${apiUrl}/transferences/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch transference');
    }

    const data = await response.json();
    return data;
};


export const createTransference = async (transference: { sender_id: number; receiver_id: number; amount: number; description?: string }, token: string) => {
    const response = await fetch(`${apiUrl}/transferences`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(transference),
    });

    if (!response.ok) {
        throw new Error('Failed to create transference');
    }

    const data = await response.json();
    return data;
};

export const updateTransference = async (id: number, transference: { sender_id: number; receiver_id: number; amount: number; description?: string }, token: string) => {
    const response = await fetch(`${apiUrl}/transferences/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(transference),
    });

    if (!response.ok) {
        throw new Error('Failed to update transference');
    }

    const data = await response.json();
    return data;
};

export const deleteTransference = async (id: number, token: string) => {
    const response = await fetch(`${apiUrl}/transferences/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to delete transference');
    }

    return response.ok;
};
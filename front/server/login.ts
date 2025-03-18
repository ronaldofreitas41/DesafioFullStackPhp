'use server';

export const login = async (email: string, password: string) => {
    
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': '',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // Formatar o objeto antes de retornar
            const formattedData = {
                token: data.access_token,
                userId: data.user_id,
                type: data.token_type,
            };
            return { success: true, data: formattedData };
        } else {
            return { success: false, message:"Usuario ou senha Invalidos" };
        }
    } catch (error) {
        return { success: false, message: "Erro ao fazer login" };
    }
};

import Card from "../models/card.model";

export async function responseObj(data: any) {
    const e = JSON.parse(data)
    const obj = new Card(e.email, e.card_number, e.expiration_year, e.expiration_month, e.cvv).hiddenInformation();
    return obj;
}

export function generateRandomCode(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
    }

    return code;
}


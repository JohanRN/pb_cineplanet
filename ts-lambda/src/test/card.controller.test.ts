import request from 'supertest';
import { handler } from '../handler/card-handler';

describe('Card Handler Lambda', () => {
    it('register success', async () => {
        const bodyOptions = {
            httpMethod: "POST",
            headers: {
                Authorization: "Bearer pk_test_LsRb12fdsvdew21"
            },
            path: "/tokens",
            body: JSON.stringify({
                "email": "jose.corzo@gmail.com",
                "card_number": "4214556170098862",
                "cvv": "123",
                "expiration_year": "2024",
                "expiration_month": "07",
            })

        }
        const response = await request(await handler(bodyOptions));
        console.log(response)

    });

    it('register error token header', async () => {
        const bodyOptions = {
            httpMethod: "POST",
            headers: {
                Authorization: "Bearer pk_test_LsRb12fdsvdew211"
            },
            path: "/tokens",
            body: JSON.stringify({
                "email": "jose.corzo@gmail.com",
                "card_number": "",
                "cvv": "123",
                "expiration_year": "2024",
                "expiration_month": "07",
            })

        }
        const response = await request(await handler(bodyOptions));
    });

    it('register error body', async () => {
        const bodyOptions = {
            httpMethod: "POST",
            headers: {
                Authorization: "Bearer pk_test_LsRb12fdsvdew21"
            },
            path: "/tokens",
            body: JSON.stringify({
                "email": "jose.corzo@gmail.com",
                "card_number": "",
                "cvv": "123",
                "expiration_year": "2024",
                "expiration_month": "07",
            })

        }
        const response = await request(await handler(bodyOptions));
    });

    it('get card info success', async () => {
        const bodyOptions = {
            httpMethod: "POST",
            headers: {
                Authorization: "Bearer pk_test_LsRb12fdsvdew21"
            },
            path: "/gettokens",
            body: JSON.stringify({
                "token": "Qs7f0RK0fvyF1PNB",
            })

        }
        const response = await request(handler(bodyOptions));
        console.log(response)

    });
    it('get card info error token', async () => {
        const bodyOptions = {
            httpMethod: "POST",
            headers: {
                Authorization: "Bearer pk_test_LsRb12fdsvdew211"
            },
            path: "/gettokens",
            body: JSON.stringify({
                "token": "Qs7f0RK0fvyF1PNB",
            })

        }
        const response = await request(handler(bodyOptions));
        console.log(response)

    });
});
import { getCard, registerCard } from '../services/card.services';
import Message from '../models/message.model';
import { schemaCard } from '../shema/card.shema';
import Card from '../models/card.model';
import { validateToken } from '../helpers/validators.helper';

export const cardRegistrationController = async (event: any): Promise<any> => {
    try {
        const header = event.headers.Authorization;
        const validationToken = validateToken(header);

        if (!validationToken) {
            return new Message(401, 'Invalid or missing header token', {}).response();
        }

        const bodyCard = JSON.parse(event.body);
        const { error } = schemaCard.validate(bodyCard);

        if (error) {
            return new Message(400, error.message, {}).response();
        }

        const { email, card_number, expiration_year, expiration_month, cvv } = bodyCard;
        const creditCard = new Card(email, card_number, expiration_year, expiration_month, cvv);
        const token = await registerCard(creditCard);

        return new Message(201, 'Card registered', { token }).responseToken();
    } catch (error) {
        return new Message(500, 'An internal error occurred', {}).response();
    }
};

export const cardGetController = async (event: any): Promise<any> => {
    try {
        const header = event.headers.Authorization;
        const validationToken = validateToken(header);

        if (!validationToken) {
            return new Message(401, 'Invalid or missing header token', {}).response();
        }

        const bodyCard = JSON.parse(event.body);
        const { statusCode, message, data } = await getCard(bodyCard);

        return new Message(statusCode, message, data).response();
    } catch (error) {
        return new Message(500, 'An internal error occurred', {}).response();
    }
};
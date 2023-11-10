import { responseObj, generateRandomCode } from "../utils/general.utils";
import redisClient from "../database/redis.database";

export async function registerCard(creditCard: any) {
    try {
        if (redisClient.status === 'end') await redisClient.connect();
        const uniqueRandomCode = generateRandomCode(16);
        await redisClient.setex(uniqueRandomCode, 900, JSON.stringify(creditCard));
        return uniqueRandomCode
    } catch (error: any) {
        throw new Error('An internal error occurred.');
    } finally {
        await redisClient.quit()
    }
}
export async function getCard(creditCard: any) {
    try {
        if (redisClient.status === 'end') await redisClient.connect();
        const resultGetCard = await redisClient.get(creditCard.token);
        const statusCode = resultGetCard ? 200 : 404;
        const message = resultGetCard ? 'Token found' : 'Token not found or expired';
        if (resultGetCard) {
            const result = await responseObj(resultGetCard);
            return { statusCode: statusCode, message: message, data: result }
        } else {
            return { statusCode: statusCode, message: message, data: {} }
        }
    } catch (error: any) {
        throw new Error('An internal error occurred.');
    } finally {
        await redisClient.quit();
    }
}


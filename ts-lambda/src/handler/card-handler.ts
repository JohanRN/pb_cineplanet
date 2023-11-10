import { routeRequest } from "../routers/card.router";
export const handler = async (event: any): Promise<any> => await routeRequest(event);
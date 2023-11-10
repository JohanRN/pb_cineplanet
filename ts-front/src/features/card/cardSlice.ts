import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../../axiosConfig';

export interface PaymentData {
    email: string;
    card_number: string;
    cvv: string;
    expiration_year: string;
    expiration_month: string;
    token?: string
}

const initialState: PaymentData = {
    email: "",
    card_number: "",
    cvv: "",
    expiration_year: "",
    expiration_month: "",
    token: ""
}



export const appSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        registerPayment: (state, action: PayloadAction<any>) => {

            const {
                email,
                card_number,
                cvv,
                expiration_year,
                expiration_month,
            } = action.payload;
            try {
                axiosInstance.post<{ token: string }>(
                    '/dev/token',
                    {
                        email,
                        card_number,
                        cvv,
                        expiration_year,
                        expiration_month,
                    }
                ).then((response: any) => {
                    console.log(response)
                });
            } catch (error) {
                console.error('Error al obtener el token:', error);
            }

        },
    },
});

// Action creators are generated for each case reducer function
export const { registerPayment } = appSlice.actions

export default appSlice.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../axiosConfig';

export interface PaymentData {
    email: string;
    card_number: string;
    cvv: string;
    expiration_year: string;
    expiration_month: string;
    token?: string;
    error?: string;
}

const initialState: PaymentData = {
    email: '',
    card_number: '',
    cvv: '',
    expiration_year: '',
    expiration_month: '',
    token: '',
    error: '',
};

export const registerPayment = createAsyncThunk(
    'card/registerPayment',
    async (paymentData: any, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/dev/token', paymentData);
            return response.data.data.token;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const getPayment = createAsyncThunk(
    'card/getPayment',
    async (paymentData: any, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/dev/charger', paymentData);
            return response.data.data
        } catch (error: any) {
            return rejectWithValue(error.response.data.message);
        }
    }
);


export const appSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerPayment.fulfilled, (state, action) => {
            state.error = '';
            state.token = action.payload || '';
        });

        builder.addCase(registerPayment.rejected, (state, action) => {
            state.error = action.payload as string;
            state.token = '';
        });
        builder.addCase(getPayment.fulfilled, (state, action) => {
            state.error = '';
            state.email = action.payload.email;
            state.card_number = action.payload.card_number;
            state.expiration_year = action.payload.expiration_year;
            state.expiration_month = action.payload.expiration_month;
        });
        builder.addCase(getPayment.rejected, (state, action) => {
            state.error = action.payload as string;
            state.email = '';
            state.card_number = '';
            state.expiration_year = '';
            state.expiration_month = '';
        });
    },
});

export default appSlice.reducer;

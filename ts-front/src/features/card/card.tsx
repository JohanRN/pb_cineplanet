import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../redux/store';
import { getPayment, registerPayment } from './cardSlice';

export function Card() {
    const token = useSelector((state: RootState) => state.card.token);
    const error = useSelector((state: RootState) => state.card.error);
    const email = useSelector((state: RootState) => state.card.email);
    const card_number = useSelector((state: RootState) => state.card.card_number);
    const expiration_year = useSelector((state: RootState) => state.card.expiration_year);
    const expiration_month = useSelector((state: RootState) => state.card.expiration_month);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: 'jose.corzo@gmail.com',
        card_number: '4214556170098862',
        cvv: '123',
        expiration_year: '2024',
        expiration_month: '07',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleButtonClick = () => {
        dispatch(registerPayment(formData) as any);
        setFormData({
            email: '',
            card_number: '',
            cvv: '',
            expiration_year: '',
            expiration_month: '',
        });
    };
    const handleTokenClick = (token: any) => {
        dispatch(getPayment({ token: token }) as any);
    };

    return (
        <>
            <div className="container mt-2">
                <div className="text-center p-4">
                    <h1>Credit Card Registration. </h1>
                </div>
                <div className="row justify-content-center">
                    <div className="card p-4 col-6">
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Card Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="card_number"
                                value={formData.card_number}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">CVV</label>
                            <input
                                type="text"
                                className="form-control"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Expiration year</label>
                            <input
                                type="text"
                                className="form-control"
                                name="expiration_year"
                                value={formData.expiration_year}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Expiration month</label>
                            <input
                                type="text"
                                className="form-control"
                                name="expiration_month"
                                value={formData.expiration_month}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleButtonClick}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <div hidden={token ? false : true} className="mt-3 alert alert-success" role="alert">
                Card Register success! Token: {token} <a style={{ cursor: "pointer" }} onClick={() => handleTokenClick(token)}>Click to search</a>
            </div>
            <div hidden={error ? false : true} className="mt-3 alert alert-danger" role="alert">
                Card Register failed. {error}
            </div>
            <div className="text-center p-4">
                <h1>Token:{token} </h1>
            </div>
            <div className="row justify-content-center">
                <div className="card p-4 col-6">
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        {email}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Card Number</label>
                        {card_number}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Expiration year</label>
                        {expiration_year}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Expiration month</label>
                        {expiration_month}
                    </div>
                </div>
            </div>
        </>
    );
}

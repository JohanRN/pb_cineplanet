import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../redux/store';
import { registerPayment } from './cardSlice';

export function Card() {
    const token = useSelector((state: RootState) => state.card.token);
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
        dispatch(registerPayment(formData));
    };

    return (
        <div className="container mt-2">
            <div className="text-center p-4">
                <h1>Credit Card Registration. {token}</h1>
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
                            name="cardnumber"
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
                            name="expirationyear"
                            value={formData.expiration_year}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Expiration month</label>
                        <input
                            type="text"
                            className="form-control"
                            name="expirationmonth"
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
    );
}

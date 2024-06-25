import React, { useState, useEffect } from 'react';
import { createEmail, updateEmail } from '../api/emailApi';
import './EmailForm.css';

const EmailForm = ({ selectedEmail, setSelectedEmail, refreshEmails }) => {
    const [email, setEmail] = useState({
        Addressee: '',
        Addresser: '',
        Amount: '',
        Currency: '',
        DateTime: '',
        ID: '',
        DigitalWallet: ''
    });

    useEffect(() => {
        if (selectedEmail) {
            setEmail(selectedEmail);
        }
    }, [selectedEmail]);

    const handleChange = (e) => {
        setEmail({ ...email, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedEmail) {
            await updateEmail(selectedEmail._id, email);
            setSelectedEmail(null);
        } else {
            await createEmail(email);
        }
        setEmail({
            Addressee: '',
            Addresser: '',
            Amount: '',
            Currency: '',
            DateTime: '',
            ID: '',
            DigitalWallet: ''
        });
        refreshEmails();
    };

    return (
        <form className="email-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <input type="text" name="Addressee" value={email.Addressee} onChange={handleChange} placeholder="Addressee" required />
                <input type="text" name="Addresser" value={email.Addresser} onChange={handleChange} placeholder="Addresser" required />
                <input type="text" name="Amount" value={email.Amount} onChange={handleChange} placeholder="Amount" required />
                <input type="text" name="Currency" value={email.Currency} onChange={handleChange} placeholder="Currency" required />
                <input type="text" name="DateTime" value={email.DateTime} onChange={handleChange} placeholder="DateTime" required />
                <input type="text" name="ID" value={email.ID} onChange={handleChange} placeholder="ID" required />
                <input type="text" name="DigitalWallet" value={email.DigitalWallet} onChange={handleChange} placeholder="Digital Wallet" required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default EmailForm;

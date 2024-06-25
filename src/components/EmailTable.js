import React from 'react';
import { deleteEmail } from '../api/emailApi';
import './EmailTable.css';

const EmailTable = ({ emails, setSelectedEmail, refreshEmails }) => {
    const handleDelete = async (id) => {
        await deleteEmail(id);
        refreshEmails();
    };

    return (
        <table className="email-table">
            <thead>
                <tr>
                    <th>Addressee</th>
                    <th>Addresser</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    <th>DateTime</th>
                    <th>ID</th>
                    <th>Digital Wallet</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {emails.map((email) => (
                    <tr key={email._id}>
                        <td>{email.Addressee}</td>
                        <td>{email.Addresser}</td>
                        <td>{email.Amount}</td>
                        <td>{email.Currency}</td>
                        <td>{email.DateTime}</td>
                        <td>{email.ID}</td>
                        <td>{email.DigitalWallet}</td>
                        <td>
                            <button onClick={() => setSelectedEmail(email)}>Edit</button>
                            <button onClick={() => handleDelete(email._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmailTable;

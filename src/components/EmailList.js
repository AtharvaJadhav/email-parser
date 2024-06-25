import React, { useState, useEffect } from 'react';
import { getEmails } from '../api/emailApi';
import EmailForm from './EmailForm';
import EmailTable from './EmailTable';
import './EmailList.css';

const EmailList = () => {
    const [emails, setEmails] = useState([]);
    const [selectedEmail, setSelectedEmail] = useState(null);

    const refreshEmails = async () => {
        const response = await getEmails();
        setEmails(response.data);
    };

    useEffect(() => {
        refreshEmails();
    }, []);

    return (
        <div className="email-list-container">
            <EmailForm selectedEmail={selectedEmail} setSelectedEmail={setSelectedEmail} refreshEmails={refreshEmails} />
            <EmailTable emails={emails} setSelectedEmail={setSelectedEmail} refreshEmails={refreshEmails} />
        </div>
    );
};

export default EmailList;

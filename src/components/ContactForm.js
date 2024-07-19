import React, { useState, useEffect } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');

    useEffect(() => {
        document.title = 'Contact Us - Interactive Landing Page';
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = {};
        if (!name) formErrors.name = 'Name is required';
        if (!email) formErrors.email = 'Email is required';
        if (!message) formErrors.message = 'Message is required';
        if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = 'Email is invalid';

        if (Object.keys(formErrors).length === 0) {
            setSuccess('Form submitted successfully!');
            setName('');
            setEmail('');
            setMessage('');
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                {errors.message && <p>{errors.message}</p>}
            </div>
            <button type="submit">Submit</button>
            {success && <p>{success}</p>}
        </form>
    );
};

export default ContactForm;

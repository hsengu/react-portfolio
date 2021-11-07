import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value });

        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if(!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }

            console.log(isValid);
            console.log('errorMessage', errorMessage);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section>
            <div className="container-sm">
                <h1>Contact me</h1>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" name="name" defaultValue={name} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" name="email" defaultValue={email} onBlur={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" className="form-control" rows="5" defaultValue={message} onChange={handleChange}></textarea>
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button data-testid="button" className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
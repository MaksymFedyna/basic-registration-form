import React, {useState} from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const [errorMessages, setErrorMessages] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;

        setFormData((prevData)  => ({
            ...prevData,
            [name]: value,
        }));
    }

    const  handleSubmit = (event) => {
        event.preventDefault();

        let isValid = true;
        const newErrorMessages = { firstName: '', lastName: '', email: '' };

        if (formData.firstName.trim() === '') {
            newErrorMessages.firstName = 'First name is required.';
        }

        if (formData.lastName.trim() === '') {
            newErrorMessages.lastName = 'Last name is required.';
        }

        if (formData.email.trim() === '') {
            newErrorMessages.email = 'Email is required.'
        } else if (!isValidEmail(formData.email)) {
            newErrorMessages.lastName = 'Invalid email addess.';
        }

        setErrorMessages(newErrorMessages);

        if (isValid) {
            alert('Registration Successful!')
        }
    }

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    return (
        <div className="form">
            <div className="form-body">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="firstname">
                    <label className="form__label" htmlFor="firstName">First Name</label>
                    <input
                        className="form_input"
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {errorMessages.firstName && <p>{errorMessages.firstName}</p>}
                </div>
                <div>
                    <label className="form__label" htmlFor="lastName">Last Name</label>
                    <input
                        className="form_input"
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {errorMessages.lastName && <p>{errorMessages.lastName}</p>}
                </div>
                <div>
                    <label className="form__label" htmlFor="email">Email</label>
                    <input
                        className="form_input"
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errorMessages.email && <p>{errorMessages.email}</p>}
                </div>
                <button className="footer" type="submit">Register</button>
            </form>
            </div>
        </div>
    )
}

export default RegistrationForm;
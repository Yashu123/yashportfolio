import React, { Component } from 'react'
import '../Contact.css';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            firstNameValid: false,
            lastName: null,
            lastNameValid: false,
            email: null,
            emailValid: false,
            formValid: false,
            errors: {}
        }
        this.alerta = this.alerta.bind(this);


    }


    handleChangeFirstName = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let firstName;
        console.log("Second", name);
        if (name == 'firstName') {
            firstName = value;
            console.log(value);
            this.setState({ value }, this.validateFirstName)
        }

    }
    handleChangeLastName = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let lastName;
        console.log("Second", name);
        if (name == 'lastName') {
            lastName = value;
            console.log(value);
            this.setState({ value }, this.validateLastName)
        }

    }

    handleChangeEmail = (event) => {
        const { name, value } = event.target;
        let email;
        if (name == 'email') {
            email = value;
            this.setState({ value }, this.validateEmail);
        }
    }

    validateFirstName = () => {
        let firstName = this.state.value;
        let firstNameValid = true;
        let errors = { ...this.state.errors }
        console.log("Third", firstName);
        if (firstName.length < 3) {
            console.log('Inside error loop');
            firstNameValid = false
            errors.firstName = '***Must be atleast 3 characters long***';
        }
        this.setState({ firstNameValid, errors }, this.validateForm);

    }
    validateLastName = () => {
        let lastName = this.state.value;
        let lastNameValid = true;
        let errors = { ...this.state.errors }

        if (lastName.length < 3) {
            console.log('Inside error loop');
            lastNameValid = false
            errors.lastName = '***Must be atleast 3 characters long***';
        }

        this.setState({ lastNameValid, errors }, this.validateForm);

    }

    validateEmail = () => {
        let emailFormat = this.state.value;
        let emailValid = true;
        let errors = { ...this.state.errors }
        if (!validateEmail(emailFormat)) {
            console.log("Inside email error loop");
            emailValid = false;
            errors.email = "***Please provide valid email Id***"
        }
        this.setState({ emailValid, errors }, this.validateForm)

    }

    validateForm = () => {
        const { firstNameValid, lastNameValid, emailValid } = this.state;
        this.setState({
            formValid: firstNameValid && lastNameValid && emailValid
        })
    }
    alerta = () => {
        console.log("Inside alerts");
        alert('This Feature is yet to be implemented. By signing up, you receive email alerts on latest changes made to this site, also i would announce timings on teaching how to create portfolio using React')
    }

    render() {
        return (
            <div class="contactForm">
                <h1 className="contact-label">Contact Form</h1>
                <span className="horizontal-line"></span>
                <form action='#'>
                    <label for="firstName">FirstName</label>
                    <ValidationMessage valid={this.state.firstNameValid} message={this.state.errors.firstName} />
                    <input type="text" name="firstName" id="fname" placeholder="  your name..." value={this.state.firstName} onChange={this.handleChangeFirstName} />

                    <label for="lastName">LastName</label>
                    <ValidationMessage valid={this.state.lastNameValid} message={this.state.errors.lastName} />
                    <input type="text" name="lastName" id="lname" placeholder="  your last name..." value={this.state.lastName} onChange={this.handleChangeLastName} />

                    <label for="emailId">Email Id</label>
                    <ValidationMessage valid={this.state.emailValid} message={this.state.errors.email} />
                    <input type="text" name="email" id="eId" placeholder="  your email id..." value={this.state.email} onChange={this.handleChangeEmail} />

                    <label name="country">Country</label>
                    <select name="country" id="country">
                        <option value="usa">USA</option>
                        <option value="india" selected>India</option>
                        <option value="germany">Germany</option>
                        <option value="canada">Canada</option>
                    </select>
                    <button className="submitButton" type='submit' disabled={!this.state.formValid} onClick={this.alerta}><span>Submit</span></button>
                </form>
            </div>

        )
    }

}

function ValidationMessage(props) {
    if (!props.valid) {
        return <div className='error-msg'>{props.message}</div>;
    }
    return <div></div>;
}
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default Contact
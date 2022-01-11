function AccountValid(values) {
    let errors = {};
    //Condition for input field
    if (!values.name) {
        errors.name = "please enter You name"
    }
    if (!values.email) {
        errors.email = "enter your email"
    }
    else if (values.email.length < 3) {
        errors.email = "enter correct email"
    }

    if (!values.password) {
        errors.password = "enter your password"
    }
    else if (values.password.length < 5) {
        errors.password = "password should be at least 6 character"
    }
    if (!values.mobile) {
        errors.mobile = "enter your mobile number"
    }
    else if (values.mobile.length < 8) {
        errors.mobile = "mobile number must be 10 digits"
    }
    return errors;
}
export default AccountValid

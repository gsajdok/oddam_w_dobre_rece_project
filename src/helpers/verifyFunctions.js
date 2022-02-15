import {validateEmail} from "./validateEmail";

export const verifyRegister = (setErrors, email, password, password2) => {
    let error = false;
    setErrors(prevState => ({
        ...prevState,
        email: false,
        password: false,
        password2: false
    }))

    if(validateEmail(email) === false) {
        setErrors(prevState => ({
            ...prevState,
            email: true
        }))
        error = true;
    }
    if(password.length < 6) {
        setErrors(prevState => ({
            ...prevState,
            password: true
        }))
        error = true;
    }
    if(password2.length !== password.length) {
        setErrors(prevState => ({
            ...prevState,
            password2: true
        }))
        error = true;
    }
    return !error;
}

export const verifyLogin = (setErrors, email, password) => {
    let error = false;
    setErrors(prevState => ({
        ...prevState,
        email: false,
        password: false
    }))

    if(validateEmail(email) === false) {
        setErrors(prevState => ({
            ...prevState,
            email: true
        }))
        error = true;
    }
    if(password.length < 6) {
        setErrors(prevState => ({
            ...prevState,
            password: true
        }))
        error = true;
    }
    return !error;
}
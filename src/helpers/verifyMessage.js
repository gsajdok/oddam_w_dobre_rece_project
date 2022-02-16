import {validateEmail} from "./validateEmail";

export const verifyMessage = (setErrors, name, email, message) => {
    let error = false;
    setErrors(prevState => ({
        ...prevState,
        name: false,
        message: false,
        email: false
    }))
    if(name.length === 0 || name.indexOf(' ') !== -1) {
        // console.log("name has a space or theres no name");
        setErrors(prevState => ({
            ...prevState,
            name: true
        }))
        error = true;
    }
    if(validateEmail(email) === false) {
        // console.log("incorrect email");
        setErrors(prevState => ({
            ...prevState,
            email: true
        }))
        error = true;
    }
    if(message.length < 120) {
        // console.log("message too short");
        setErrors(prevState => ({
            ...prevState,
            message: true
        }))
        error = true;
    }
    return !error;
}
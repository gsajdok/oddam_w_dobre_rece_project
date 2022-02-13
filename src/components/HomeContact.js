import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";
import {Decoration} from "./Decoration";
import {useState} from "react";
import {validateEmail} from "../helpers/validateEmail";
import {sendMessage} from "../helpers/api";

export const HomeContact = ({id}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(-1);
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false
    })

    const verify = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if(verify()) {
            sendMessage(setSuccess, {name: name, email: email, message: message})
        }
    }


    return (
        <section className="homeContact" id={id}>
            <div className="wrapper">
                <div className="content">
                    <div className="form__wrapper">
                        <h2>Skontaktuj się z nami</h2>
                        <Decoration/>
                        {success===1 && <div className="successText">Wiadomość została wysłana!<br/> Wkrótce się skontaktujemy.</div>}
                        <form id="form" onSubmit={handleSubmit}>
                            <label className="halfWidth">
                                Wpisz swoje imię:
                                <input type="text" disabled={success === 1} placeholder="Krzysztof" className={`textInput ${errors.name && "errorBorder"}`} value={name} onChange={(e) => setName(e.target.value)}/>
                                {errors.name && <span className="errorText">Podane imię jest nieprawidłowe!</span>}
                            </label>
                            <label className="halfWidth">
                                Wpisz swój email:
                                <input type="text" disabled={success === 1} placeholder="abc@xyz.pl" className={`textInput ${errors.email && "errorBorder"}`} value={email} onChange={(e) => setEmail(e.target.value)}/>
                                {errors.email && <span className="errorText">Podany email jest nieprawidłowy!</span>}
                            </label>
                            <label>
                                Wpisz swoją wiadomość:
                                <textarea rows="5" disabled={success === 1} className={`${errors.message && "errorBorder"}`}value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                                {errors.message && <span className="errorText">Wiadomość musi mieć conajmniej 120 znaków!</span>}
                            </label>
                            <input type="submit" className="submitInput button button--active" value="Wyślij" id="form__submit"/>
                        </form>
                    </div>
                    <div className="copyright"><p>Copyright by Coders Lab</p></div>
                    <div className="icons">
                        <img src={Facebook} alt="Facebook"/>
                        <img src={Instagram} alt="Instagram"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
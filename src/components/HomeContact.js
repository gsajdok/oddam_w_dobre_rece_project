import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";
import {Decoration} from "./Decoration";
import {useState} from "react";
import {verifyMessage} from "../helpers/verifyMessage";
import {sendMessage} from "../helpers/api";
import {HomeContactForm} from "./HomeContactForm";
import {CSSTransition} from "react-transition-group";

export const HomeContact = ({id}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(0);
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if(verifyMessage(setErrors, name, email, message)) {
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
                        <CSSTransition in={!success} timeout={1000} classNames="contact__transition" unmountOnExit>
                            <HomeContactForm handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setMessage={setMessage} success={success} errors={errors}/>
                        </CSSTransition>
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
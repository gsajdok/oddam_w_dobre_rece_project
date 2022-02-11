import {Decoration} from "./Decoration";
import {Link} from "react-router-dom";
import {useState} from "react";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    })

    function validateEmail(email)
    {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const verify = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        verify();
    }


    return (
            <section className="account">
                <div className="wrapper">
                    <div className="content">
                        <div className="accountWindow__wrapper">
                            <h2>Zaloguj się</h2>
                            <Decoration/>
                            <div className="accountForm">
                                <form id="accountForm" onSubmit={handleSubmit}>
                                    <label className="">
                                        Email
                                        <input type="text" className={`textInput ${errors.email ? "errorBorder" : ""}`} value={email} onChange={(e) => setEmail(e.target.value)}/>
                                        {errors.email ? <span className="errorText">Podany email nie jest prawidłowy!</span> : ""}
                                    </label>
                                    <label className="">
                                        Hasło
                                        <input type="password" className={`textInput ${errors.password ? "errorBorder" : ""}`} value={password} onChange={(e) => setPassword(e.target.value)}/>
                                        {errors.password ? <span className="errorText">Podane hasło jest za krótkie!</span> : ""}
                                    </label>
                                </form>
                            </div>
                            <div className="button__wrapper">
                                <Link to="/rejestracja"><span className="button">Załóz konto</span></Link>
                                <input type="submit" form="accountForm" className="button button--active" value="Zaloguj się"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
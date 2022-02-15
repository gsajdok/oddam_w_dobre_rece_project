import {Decoration} from "./Decoration";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, registerWithEmailAndPassword} from "../helpers/firebase";
import {verifyRegister} from "../helpers/verifyFunctions";

export const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        password2: false
    })
    const [user, loading, authError] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            return;
            //TODO: add a loading screen
        }
        // if (user) navigate("/");
        //TODO: don't let logged in users reach this page
    }, [user, loading]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(verifyRegister(setErrors, email, password, password2)) {
            registerWithEmailAndPassword(email, password);
            navigate('/');
            //TODO: Check if the registration was successful before navigating to dashboard, show errors otherwise
        }
    }

    return (
        <section className="account">
            <div className="wrapper">
                <div className="content">
                    <div className="accountWindow__wrapper">
                        <h2>Zarejestruj się</h2>
                        <Decoration/>
                        <div className="accountForm">
                            <form id="accountForm" onSubmit={handleSubmit}>
                                <label className="">
                                    Email
                                    <input type="text" className={`textInput ${errors.email && "errorBorder"}`} value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    {errors.email && <span className="errorText">Podany email nie jest prawidłowy!</span>}
                                </label>
                                <label className="">
                                    Hasło
                                    <input type="password" className={`textInput ${errors.password && "errorBorder"}`} value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    {errors.password && <span className="errorText">Podane hasło jest za krótkie!</span>}
                                </label>
                                <label className="">
                                    Powtórz hasło
                                    <input type="password" className={`textInput ${errors.password2 && "errorBorder"}`} value={password2} onChange={(e) => setPassword2(e.target.value)}/>
                                    {errors.password2 && <span className="errorText">Podane hasło nie jest takie samo!</span>}
                                </label>
                            </form>
                        </div>
                        <div className="button__wrapper">
                            <Link to="/logowanie"><span className="button">Zaloguj się</span></Link>
                            <input type="submit" form="accountForm" className="button button--active" value="Załóż konto"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
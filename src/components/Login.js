import {Decoration} from "./Decoration";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {verifyLogin} from "../helpers/verifyFunctions";

import { useAuthState } from "react-firebase-hooks/auth";
import {auth, logInWithEmailAndPassword} from "../helpers/firebase";


export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: false,
        password: false,
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
        if(verifyLogin(setErrors, email, password)) {
            logInWithEmailAndPassword (email, password)
            navigate('/');
        }
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
                                        <input type="text" className={`textInput ${errors.email && "errorBorder"}`} value={email} onChange={(e) => setEmail(e.target.value)}/>
                                        {errors.email && <span className="errorText">Podany email nie jest prawidłowy!</span>}
                                    </label>
                                    <label className="">
                                        Hasło
                                        <input type="password" className={`textInput ${errors.password && "errorBorder"}`} value={password} onChange={(e) => setPassword(e.target.value)}/>
                                        {errors.password && <span className="errorText">Podane hasło jest za krótkie!</span>}
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
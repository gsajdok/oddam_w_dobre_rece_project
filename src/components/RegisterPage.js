import {Decoration} from "./Decoration";
import {Link} from "react-router-dom";

export const RegisterPage = () => {
    return (
        <section className="account">
            <div className="wrapper">
                <div className="content">
                    <div className="accountWindow__wrapper">
                        <h2>Zarejestruj się</h2>
                        <Decoration/>
                        <div className="accountForm">
                            <form id="accountForm">
                                <label className="">
                                    Email
                                    <input type="text" className="textInput"/>
                                </label>
                                <label className="">
                                    Hasło
                                    <input type="password" className="textInput"/>
                                </label>
                                <label className="">
                                    Powtórz hasło
                                    <input type="password" className="textInput"/>
                                </label>
                            </form>
                        </div>
                        <div className="button__wrapper">
                            <Link to="/logowanie"><span className="button">Zaloguj się</span></Link>
                            <a className="button button--active">Załóż konto</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
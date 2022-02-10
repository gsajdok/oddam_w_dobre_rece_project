import {Decoration} from "./Decoration";
import {Link} from "react-router-dom";

export const LoginPage = () => {
    return (
            <section className="account">
                <div className="wrapper">
                    <div className="content">
                        <div className="accountWindow__wrapper">
                            <h2>Zaloguj się</h2>
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
                                </form>
                            </div>
                            <div className="button__wrapper">
                                <Link to="/rejestracja"><span className="button">Załóz konto</span></Link>
                                <a className="button button--active">Zaloguj się</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
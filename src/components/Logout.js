import {Decoration} from "./Decoration";
import {Link} from "react-router-dom";

export const LogoutPage = () => {
    return (
        <section className="account">
            <div className="wrapper">
                <div className="content">
                    <div className="accountWindow__wrapper">
                        <h2>Wylogowanie nastąpiło pomyślnie!</h2>
                        <Decoration/>
                        <div className="button__wrapper">
                            <Link to="/"><span className="button button--active">Strona główna</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
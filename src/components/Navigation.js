import {Link, useNavigate, useLocation} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, logout} from "../helpers/firebase";

export const Navigation = ({scrollFunction, setScrollTarget}) => {
    let location = useLocation();
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);


    const scrollToID = (id) => {
        if(location.pathname === "/") {
            scrollFunction(id);
        } else {
            setScrollTarget(id);
            navigate("/")
        }
    }

    if (location.pathname === "/404") {
        return <div/>
    }

    const accountContextMenu = (user) => {
        if(loading) {
            return (
                <>
                    <span className="button button--small" style={{visibility: "hidden"}}>Empty</span>
                </>
            )
        } else {
            if(user===null) {
                return (
                    <>
                        <Link to="/logowanie"><span className="button button--small">Zaloguj</span></Link>
                        <Link to="/rejestracja"><span className="button button--small button--yellow">Załóż konto</span></Link>
                    </>
                )
            } else {
                return (
                    <>
                        <span className="welcome">Cześć {user.email}!</span>
                        <Link to="/oddaj-rzeczy"><span className="button button--small button--yellow">Oddaj rzeczy</span></Link>
                        <Link to="/wylogowano"><span className="button button--small" onClick={() => logout(auth)}>Wyloguj</span></Link>
                    </>
                )
            }
        }
    }

    return (
        <div className="nav__wrapper">
            <div className="nav__container">
                <nav className="account">
                    {accountContextMenu(user)}
                </nav>
                <nav className="home">
                    <button className={`button ${location.pathname==="/" && `button--active`}`} onClick={() => scrollToID("header")}>Start</button>
                    <button className="button" onClick={() => scrollToID("threeColumns")}>O co chodzi?</button>
                    <button className="button" onClick={() => scrollToID("aboutUs")}>O nas</button>
                    <button className="button" onClick={() => scrollToID("whoWeHelp")}>Fundacje i organizacje</button>
                    <button className="button" onClick={() => scrollToID("contact")}>Kontakt</button>
                </nav>
            </div>
        </div>
    )
}

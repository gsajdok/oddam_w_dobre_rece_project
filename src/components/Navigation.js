import {Link, useNavigate, useLocation} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserAuthContext} from "../contextAPI/userAuthContext";


export const Navigation = ({logoutFunction, scrollFunction, setScrollTarget}) => {
    let location = useLocation();
    const navigate = useNavigate();
    const [userData] = useContext(UserAuthContext);

    const onClickHandler = () => {
        logoutFunction();
    }

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

    return (
        <div className="nav__wrapper">
            <div className="nav__container">
                <nav className="account">
                    {userData!==null ? <>
                        <span className="welcome">Cześć {userData.email}!</span>
                        <Link to="/oddaj-rzeczy"><span className="button button--small button--yellow">Oddaj rzeczy</span></Link>
                        <Link to="/wylogowano"><span className="button button--small" onClick={onClickHandler}>Wyloguj</span></Link>
                        </>
                        :
                        <>
                        <Link to="/logowanie"><span className="button button--small">Zaloguj</span></Link>
                        <Link to="/rejestracja"><span className="button button--small button--yellow">Załóż konto</span></Link>
                        </>
                    }
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

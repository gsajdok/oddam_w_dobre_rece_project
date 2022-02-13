import {Link, useNavigate, useLocation} from "react-router-dom";
import {Link as ScrollLink, scroller} from "react-scroll";
import {useEffect, useState} from "react";

export const Navigation = ({isLoggedIn, logoutFunction, loggedUserInfo, scrollFunction, setScrollTarget}) => {
    let location = useLocation();
    const navigate = useNavigate();

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

    return (
        <div className="nav__wrapper">
            <div className="nav__container">
                <nav className="account">
                    {isLoggedIn ? <>
                        <span className="welcome">Cześć {loggedUserInfo}!</span>
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
                    <a className={`button ${location.pathname==="/" && `button--active`}`} onClick={() => scrollToID("header")}>Start</a>
                    <a className="button" onClick={() => scrollToID("threeColumns")}>O co chodzi?</a>
                    <a className="button" onClick={() => scrollToID("aboutUs")}>O nas</a>
                    <a className="button" onClick={() => scrollToID("whoWeHelp")}>Fundacje i organizacje</a>
                   <a className="button" onClick={() => scrollToID("contact")}>Kontakt</a>
                </nav>
            </div>
        </div>
    )
}

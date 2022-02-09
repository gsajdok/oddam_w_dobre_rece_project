import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";

export const Navigation = () => {
    return (
        <div className="nav__container">
            <nav className="account">
                <Link to="/logowanie"><span className="button button--small">Zaloguj</span></Link>
                <Link to="/rejestracja"><span className="button button--small button--yellow">Załóż konto</span></Link>
            </nav>
            <nav className="home">
                <ScrollLink to="header" smooth={true} duration={500}><span className="button button--active">Start</span></ScrollLink>
                <ScrollLink to="threeColumns" smooth={true} duration={500}><span className="button">O co chodzi?</span></ScrollLink>
                <ScrollLink to="aboutUs" smooth={true} duration={500}><span className="button">O nas</span></ScrollLink>
                <ScrollLink to="whoWeHelp" smooth={true} duration={500}><span className="button">Fundacje i organizacje</span></ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500} offset={60}><span className="button noRightPadding">Kontakt</span></ScrollLink>
            </nav>
        </div>
    )
}

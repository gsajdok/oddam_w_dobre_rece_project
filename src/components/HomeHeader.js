import HomeHeroImage from '../assets/Home-Hero-Image.jpg';
import Decoration from '../assets/Decoration.svg';
import {Link} from "react-router-dom";
import {Link as ScrollLink, animateScroll as scroll } from "react-scroll";


export const HomeHeader = ({id}) => {
    return (
        <header className="homeHeader" id={id}>
            <div className="wrapper">
                <div className="content">
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
                            <ScrollLink to="contact" smooth={true} duration={500}><span className="button noRightPadding">Kontakt</span></ScrollLink>
                        </nav>
                    </div>
                    <div className="image">
                        <img src={HomeHeroImage} alt="Home Image"/>
                    </div>
                    <div className="cta__wrapper">
                        <div className="cta">
                            <h2>Zacznij pomagać! <br/>
                            Oddaj niechciane rzeczy w zaufane ręce</h2>
                            <img src={Decoration} alt="Decoration" className="decoration"/>
                            <div className="button__container">
                                <Link style={{ textDecoration: 'none' }} to="/logowanie"><span className="button button--big button--uppercase button--active">Oddaj rzeczy</span></Link>
                                <Link style={{ textDecoration: 'none' }} to="/logowanie"><span className="button button--big button--uppercase button--active">Zorganizuj zbiórkę</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
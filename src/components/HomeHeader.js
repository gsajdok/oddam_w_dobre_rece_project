import HomeHeroImage from '../assets/Home-Hero-Image.jpg';
import {Link} from "react-router-dom";
import {Decoration} from "./Decoration";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../helpers/firebase";
import {PageContentContext} from "../contextAPI/contentContext";
import {useContext, useEffect} from "react";

export const HomeHeader = ({id}) => {
    const [user] = useAuthState(auth);
    const {context} = useContext(PageContentContext);

    return (
        <header className="homeHeader" id={id}>
            <div className="wrapper">
                <div className="content">
                    <div className="image">
                        <img src={HomeHeroImage} alt="Home"/>
                    </div>
                    <div className="cta__wrapper">
                        <div className="cta">
                            <h2>{context.strings.HomeHeader.ctaTitle}<br/>
                                {context.strings.HomeHeader.ctaSubtitle}</h2>
                            <Decoration/>
                            <div className="button__container">
                                <Link
                                    style={{ textDecoration: 'none' }}
                                    to={`${user===null ? "/logowanie" : "/oddaj-rzeczy"}`}>
                                    <span className="button button--big button--uppercase button--active">{context.strings.HomeHeader.buttons.shareItems}</span>
                                </Link>
                                <Link
                                    style={{ textDecoration: 'none' }}
                                    to={`${user===null ? "/logowanie" : "/zorganizuj-zbiorke"}`}>
                                    <span className="button button--big button--uppercase button--active">{context.strings.HomeHeader.buttons.organiseShare}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";
import {Link} from "react-router-dom";
import {Decoration} from "./Decoration";

import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../helpers/firebase";

export const HomeSimpleSteps = ({id}) => {
    const [user] = useAuthState(auth)

    return (
        <section className="homeSimpleSteps" id={id}>
            <div className="wrapper">
                <div className="content">
                    <div className="header">
                        <h2>Wystarczą 4 proste kroki</h2>
                        <Decoration/>
                    </div>
                    <div className="fourColumns">
                        <div className="wrapper">
                            <article className="column">
                                <div className="img__wrapper"><img src={Icon1} alt="T-shirt"/></div>
                                <span>Wybierz rzeczy</span>
                                <div className="spacer"/>
                                <p>ubrania, zabawki, sprzęt i inne</p>
                            </article>
                            <article className="column">
                                <div className="img__wrapper"><img src={Icon2} alt="T-shirt"/></div>
                                <span>Spakuj je</span>
                                <div className="spacer"/>
                                <p>skorzystaj z worków na śmieci</p>
                            </article>
                            <article className="column">
                                <div className="img__wrapper"><img src={Icon3} alt="T-shirt"/></div>
                                <span>Zdecyduj komu chcesz pomóc</span>
                                <div className="spacer"/>
                                <p>wybierz zaufane miejsce</p>
                            </article>
                            <article className="column">
                                <div className="img__wrapper"><img src={Icon4} alt="T-shirt"/></div>
                                <span>Zamów kuriera</span>
                                <div className="spacer"/>
                                <p>kurier przyjedzie w dogodnym terminie</p>
                            </article>
                        </div>
                    </div>
                    <div className="button__container">
                        <Link
                            style={{ textDecoration: 'none' }}
                            to={`${user===null ? "/logowanie" : "/oddaj-rzeczy"}`}>
                            <span className="button button--big button--uppercase button--active">Oddaj rzeczy</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
import HomeHeroImage from '../assets/Home-Hero-Image.jpg';
import {Link} from "react-router-dom";
import {Decoration} from "./Decoration";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../helpers/firebase";

export const HomeHeader = ({id}) => {
    const [user] = useAuthState(auth);

    return (
        <header className="homeHeader" id={id}>
            <div className="wrapper">
                <div className="content">
                    <div className="image">
                        <img src={HomeHeroImage} alt="Home"/>
                    </div>
                    <div className="cta__wrapper">
                        <div className="cta">
                            <h2>Zacznij pomagać! <br/>
                            Oddaj niechciane rzeczy w zaufane ręce</h2>
                            <Decoration/>
                            <div className="button__container">
                                <Link
                                    style={{ textDecoration: 'none' }}
                                    to={`${user===null ? "/logowanie" : "/oddaj-rzeczy"}`}>
                                    <span className="button button--big button--uppercase button--active">Oddaj rzeczy</span>
                                </Link>
                                <Link
                                    style={{ textDecoration: 'none' }}
                                    to={`${user===null ? "/logowanie" : "/zorganizuj-zbiorke"}`}>
                                    <span className="button button--big button--uppercase button--active">Zorganizuj zbiórkę</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
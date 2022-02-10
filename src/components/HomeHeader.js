import HomeHeroImage from '../assets/Home-Hero-Image.jpg';
import Decoration from '../assets/Decoration.svg';
import {Link} from "react-router-dom";


export const HomeHeader = ({id}) => {
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
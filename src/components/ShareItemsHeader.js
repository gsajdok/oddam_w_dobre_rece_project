import FormHeroImage from "../assets/Form-Hero-Image.jpg";
import {Decoration} from "./Decoration";
import {Link} from "react-router-dom";

export const ShareItemsHeader = () => {

    return (
        <header className="sharedItemsHeader">
            <div className="wrapper">
                <div className="content">
                    <div className="image">
                        <img src={FormHeroImage} alt="Form"/>
                    </div>
                    <div className="cta__wrapper">
                        <div className="cta">
                            <h2>Oddaj rzeczy, których już nie chcesz<br/>
                                POTRZEBUJĄCYM</h2>
                            <Decoration/>
                        <span>Wystarczą 4 proste kroki</span>
                            <div className="steps__container">
                                <div className="step">
                                    <span>1</span>
                                    <p>Wybierz rzeczy</p>
                                </div>
                                <div className="step">
                                    <span>2</span>
                                    <p>Spakuj je w worki</p>
                                </div>
                                <div className="step">
                                    <span>3</span>
                                    <p>Wybierz fundacje</p>
                                </div>
                                <div className="step">
                                    <span>4</span>
                                    <p>Zamów kuriera</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
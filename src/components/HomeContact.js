import Decoration from "../assets/Decoration.svg";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";

export const HomeContact = ({id}) => {
    return (
        <section className="homeContact" id={id}>
            <div className="wrapper">
                <div className="content">
                    <div className="form__wrapper">
                        <h2>Skontaktuj się z nami</h2>
                        <img src={Decoration} alt="Decoration" className="decoration"/>
                        <form id="form">
                            <label>
                                Wpisz swoje imię:
                                <input type="text" placeholder="Krzysztof"/>
                            </label>
                            <label>
                                Wpisz swój email:
                                <input type="text" placeholder="abc@xyz.pl"/>
                            </label>
                            <label>
                                Wpisz swoją wiadomość:
                                <textarea rows="5" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                            </label>
                            <input type="submit" className="button button--active" value="Wyślij" id="form__submit"/>
                        </form>
                    </div>
                    <div className="copyright"><p>Copyright by Coders Lab</p></div>
                    <div className="icons">
                        <img src={Facebook} alt="Facebook"/>
                        <img src={Instagram} alt="Instagram"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
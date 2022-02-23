import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../helpers/firebase";
import {useLocation} from "react-router-dom";
import {useState} from "react";

export const HamburgerMenu = ({accountContextMenu, scrollToID}) => {
    const [user] = useAuthState(auth);
    let location = useLocation();
    const [isHidden, setHidden] = useState(true);

    const onClickHandler = () => {
        setHidden(!isHidden);
    }

    return (
        <div className="navHamburger__wrapper">
            <div className="navHamburger__container" >
                <nav className="account">
                    {accountContextMenu(user)}
                    <button onClick={onClickHandler} className="button button__hamburger">≡</button>
                </nav>
                <div className="absoluteAnchor">
                    <div className={`heightContainer ${isHidden && "heightContainer--hidden"}`}>
                        <nav className="home">
                            <button className={`button ${location.pathname==="/" && `button--active`}`} onClick={() => scrollToID("header")}>Start</button>
                            <button className="button" onClick={() => scrollToID("threeColumns")}>O co chodzi?</button>
                            <button className="button" onClick={() => scrollToID("aboutUs")}>O nas</button>
                            <button className="button" onClick={() => scrollToID("whoWeHelp")}>Fundacje i organizacje</button>
                            <button className="button" onClick={() => scrollToID("contact")}>Kontakt</button>
                        </nav>
                    </div>
                </div>

            </div>
        </div>
    )
}
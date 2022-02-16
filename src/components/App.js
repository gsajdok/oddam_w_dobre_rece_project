import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./Home";
import {NotFound} from "./NotFound";
import {LoginPage} from "./Login";
import {RegisterPage} from "./RegisterPage";
import {Navigation} from "./Navigation";
import {useContext, useEffect, useState} from "react";
import {LogoutPage} from "./Logout";
import {ShareItems} from "./ShareItems";
import {scrollFunction} from "../helpers/scrollFunction";
import {fetchUserEmail} from "../helpers/fetchUserEmail";

import {auth, logout} from "../helpers/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {UserAuthContext} from "../contextAPI/userAuthContext";
import {ShareItemsProvider} from "../contextAPI/shareItemsContext";


function App() {
    const [scrollTarget, setScrollTarget] = useState(null);
    const [user, loading, error] = useAuthState(auth);
    const [email, setEmail] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [userData, setUserData] = useContext(UserAuthContext);

    useEffect(() => {
        fetchUserEmail(setEmail, user).then(r => setUserData(user));
        if(scrollTarget !== null) {
            scrollFunction(scrollTarget);
            setScrollTarget(null);
        }
        if(user===null) {
            setLoggedIn(false)
        } else {
            setLoggedIn(true);
        }
    }, [user, loading, scrollTarget])

  return (
        <BrowserRouter>
            <Navigation logoutFunction={logout} scrollFunction={(id) => scrollFunction(id)} setScrollTarget={(id) => setScrollTarget(id)}/>
            <Routes>
                <Route path="*" element={<Navigate replace to="/404"/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/logowanie" element={<LoginPage/>}/>
                <Route path="/rejestracja" element={<RegisterPage/>}/>
                <Route path="/wylogowano" element={<LogoutPage/>}/>
                <Route path="/oddaj-rzeczy" element={<>
                    <ShareItemsProvider><ShareItems/></ShareItemsProvider>
                </>}/>
                <Route path="/404" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Home";
import {NotFound} from "./NotFound";
import {LoginPage} from "./Login";
import {RegisterPage} from "./RegisterPage";
import {Navigation} from "./Navigation";
import {useEffect, useState} from "react";
import {LogoutPage} from "./Logout";
import {scrollFunction} from "../helpers/scrollFunction";

import {auth, db, logout} from "../helpers/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import {useAuthState} from "react-firebase-hooks/auth";

function App() {
    const [scrollTarget, setScrollTarget] = useState(null);
    const [user, loading, error] = useAuthState(auth);
    const [email, setEmail] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(false);

    const fetchUserEmail = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setEmail(data.email);
        } catch (err) {
            console.error(err);
            //alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        fetchUserEmail();
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
        <Navigation isLoggedIn={isLoggedIn} logoutFunction={logout} loggedUserInfo={email} scrollFunction={(id) => scrollFunction(id)} setScrollTarget={(id) => setScrollTarget(id)}/>
        <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/logowanie" element={<LoginPage/>}/>
            <Route path="/rejestracja" element={<RegisterPage/>}/>
            <Route path="/wylogowano" element={<LogoutPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

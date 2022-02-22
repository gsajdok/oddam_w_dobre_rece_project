import {Home} from "./Home";
import {NotFound} from "./NotFound";
import {LoginPage} from "./Login";
import {RegisterPage} from "./RegisterPage";
import {Navigation} from "./Navigation";
import {LogoutPage} from "./Logout";
import {ShareItems} from "./ShareItems";

import {ShareItemsProvider} from "../contextAPI/shareItemsContext";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import {scrollFunction} from "../helpers/scrollFunction";

function App() {
    const [scrollTarget, setScrollTarget] = useState(null);

    useEffect(() => {
        if(scrollTarget !== null) {
            scrollFunction(scrollTarget);
            setScrollTarget(null);
        }
    }, [scrollTarget])

  return (
        <BrowserRouter>
            <Navigation scrollFunction={(id) => scrollFunction(id)} setScrollTarget={(id) => setScrollTarget(id)}/>
            <Routes>
                <Route path="*" element={<Navigate replace to="/404"/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/logowanie" element={<LoginPage/>}/>
                <Route path="/rejestracja" element={<RegisterPage/>}/>
                <Route path="/wylogowano" element={<LogoutPage/>}/>
                <Route path="/oddaj-rzeczy" element={
                    <ShareItemsProvider>
                        <ShareItems/>
                    </ShareItemsProvider>
                }/>
                <Route path="/404" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Home";
import {NotFound} from "./NotFound";
import {LoginPage} from "./Login";
import {RegisterPage} from "./RegisterPage";
import {Navigation} from "./Navigation";
import {scroller} from "react-scroll";
import {useEffect, useState} from "react";
import {LogoutPage} from "./Logout";

function App() {
    const [scrollTarget, setScrollTarget] = useState(undefined);

    const scrollFunction = (id) => {
        scroller.scrollTo(id, {
            duration: 500,
            delay: 0,
            smooth: "easeInOutQuart"}
        )
    }

    useEffect(() => {
        if(scrollTarget !== undefined) {
            scroller.scrollTo(scrollTarget, {
                duration: 500,
                delay: 0,
                smooth: "easeInOutQuart"});
            setScrollTarget(undefined);
        }
    })

  return (
    <BrowserRouter>
        <Navigation scrollFunction={(id) => scrollFunction(id)} setScrollTarget={(id) => setScrollTarget(id)}/>
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

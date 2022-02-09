import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Home";
import {NotFound} from "./NotFound";
import {LoginPage} from "./Login";
import {RegisterPage} from "./RegisterPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/logowanie" element={<LoginPage/>}/>
            <Route path="/rejestracja" element={<RegisterPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

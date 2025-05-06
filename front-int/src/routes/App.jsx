import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Home from "../pages/Home";

export default function App() {
    return(
        <Router>
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/" element={<Main />}/>
            </Routes>
        </Router>
    )
}
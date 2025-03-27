import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";

export default function App() {
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/" element={<Main />}/>
            </Routes>
        </Router>
    )
}
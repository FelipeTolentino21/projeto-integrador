import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Main from "../pages/Main";
import Security from "../components/Security";

export default function App() {
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route 
                path="/home" 
                element={
                    <Security>
                        <Home />
                    </Security>
                }/>
            </Routes>
        </Router>
    )
}
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import ProtectRoute from '../components/ProtectRoute'

import './App.css'

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route 
        path='/'
        element={
          <ProtectRoute>
            <Home />
          </ProtectRoute>
        }
        />
      </Routes>
    </Router>
  )
}
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../src/(pages)/home/page'
import Login from '../src/(pages)/Login/page'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}
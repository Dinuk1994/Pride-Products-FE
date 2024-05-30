import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../src/(pages)/home/page'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  )
}
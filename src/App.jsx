import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createContext } from 'react';
import ProductAPI from './api/ProductAPI.js';
import Home from '../src/(pages)/home/page'
import Login from '../src/(pages)/Login/page'
import Register from '../src/(pages)/Register/Page'
import Admin from '../src/(pages)/Admin/page'
import View from '../src/(pages)/Card/page'
import Cart from '../src/(pages)/Cart/page'
import { useState } from 'react';

export const GlobalState = createContext();

export default function App() {
  const [token, setToken] = useState(false);
  const {isLoading } = ProductAPI();

  const state = {
    token: [token, setToken],
    productAPI : ProductAPI()
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <GlobalState.Provider value={state} >
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/view' element={<View />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </GlobalState.Provider>
  );
}
import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from './pages/home/home';
import Fav from './pages/fav/fav';
import Cart from './pages/cart/cart';
import {Provider} from "react-redux"
import Store from './pages/redux/store';

function App() {
  return (
    <div>
      hi
      <Provider store={Store}>
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/home">HOME</Link>
        </li>
        <li>
          <Link to="/cart">CART</Link>
        </li>
        <li>
          <Link to="/fav">FAVORITE</Link>
        </li>
      </ul>

    
      <Routes>
        <Route path='/home' element={<Home />}>HOME</Route>
        <Route path='/cart' element={<Cart />}>CART</Route>
        <Route path='/fav' element={<Fav />}>FAVORITE</Route>

      </Routes>
      </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductAll from "./page/ProductAll";
import Login from './page/Login';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const[authenticate, setAuthenticate] = useState(false);
  useEffect(()=>{
    console.log("Aaaa", authenticate)
  },[authenticate])

  return (
    <div>
    <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} /> {/* Navbar에 로그인 상태 전달 */}
     <Routes>
     <Route path="/" element={<ProductAll />} />
     <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
     <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
     </Routes>
    </div>
  );
}

export default App;

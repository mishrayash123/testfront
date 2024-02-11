import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import './App.css';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Notfound from "./Components/Notfound"
import Notlogin from "./Components/Notlogin"
import Profile from './Components/Profilesection/Profile';
import React, { useState, useRef, useEffect } from "react";


function App() {
  const [isLoggedIn,setisLoggedIn] = useState(true)

  useEffect(() => {
    if( !localStorage.getItem("tokenurlshort")){
     setisLoggedIn(false)
    }
  }, []);
  
  return (
    <div>
<BrowserRouter>
<Navbar />
    <Routes>
    {isLoggedIn ? (
             <>
    <Route path='/' element={<Home />}></Route>
    <Route path='/profile' element={<Profile />}></Route>
    </>
    ) : ( 
            <>
    <Route path='/' element={<Notlogin />}></Route>
    <Route path='/profile' element={<Notlogin />}></Route>
    <Route path='/register' element={<Register />}></Route>
            </>
             )}
             <Route path="*" element={<Notfound />} />
    </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;


import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import './App.css';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import { useAuth } from "./AuthContext";
import Notfound from "./Components/Notfound"
import Notlogin from "./Components/Notlogin"
import Profile from './Components/Profilesection/Profile';


function App() {
  const { isLoggedIn } = useAuth();

  
  return (
    <div>
      <Navbar />
<BrowserRouter>
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
    <Route path='/login' element={<Login />}></Route>
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


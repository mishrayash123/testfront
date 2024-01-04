import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import './App.css';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import Product from './Components/Services/Product';
import Products from './Components/Services/Products';
import Cart from './Components/Services/Cart';
import Deals from './Components/Services/Deals';
import Summaery from './Components/Services/Summaery';
import Checkout from './Components/Services/Checkout';
import { useAuth } from "./AuthContext";
import Notfound from "./Components/Notfound"
import Notlogin from "./Components/Notlogin"
import Profile from './Components/Profilesection/Profile';
import Edit from './Components/Profilesection/Edit';
import Main from './Components/Seller/Main'
import SellRegister from './Components/Seller/SellRegister'
import Addproducts from './Components/Seller/Addproducts'
import Manage from './Components/Seller/Manage'

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
    <Route path='/product' element={<Product />}></Route>
    <Route path='/manage' element={<Manage />}></Route>
    <Route path='/products' element={<Products />}></Route>
    <Route path='/cart' element={<Cart />}></Route>
    <Route path='/deals' element={<Deals />}></Route>
    <Route path='/order' element={<Summaery />}></Route>
    <Route path='/checkout' element={<Checkout />}></Route>
    <Route path='/profile' element={<Profile />}></Route>
    <Route path='/edit' element={<Edit />}></Route>
    <Route path='/sell' element={<Main />}></Route>
    <Route path='/registerforsell' element={<SellRegister />}></Route>
    <Route path='/addproducts' element={<Addproducts />}></Route>
    </>
    ) : ( 
            <>
    <Route path='/' element={<Home />}></Route>
    <Route path='/addproducts' element={<Notlogin />}></Route>
    <Route path='/manage' element={<Notlogin />}></Route>
    <Route path='/product' element={<Notlogin />}></Route>
    <Route path='/products' element={<Notlogin />}></Route>
    <Route path='/cart' element={<Notlogin />}></Route>
    <Route path='/registerforsell' element={<Notlogin />}></Route>
    <Route path='/deals' element={<Notlogin />}></Route>
    <Route path='/profile' element={<Notlogin />}></Route>
    <Route path='/edit' element={<Notlogin />}></Route>
    <Route path='/order' element={<Notlogin/>}></Route>
    <Route path='/checkout' element={<Notlogin />}></Route>
    <Route path='/sell' element={<Notlogin />}></Route>
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


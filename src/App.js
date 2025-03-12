import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as  Router, Routes ,Route } from 'react-router-dom';
import Bestseller from './Components/Bestseller/Bestseller';
import Home from './Components/Home/Home';
import Fotter from './Components/Fotter/Fotter';
import Waterpurifier from './Components/Waterpurier/Waterpurifier';
import About from './Components/Home/About';
import Contact from './Components/Contact/Contact';
import Cart from './Components/Cart/Cart';
import Loginpage from './Components/Loginpage/Loginpage';

function App() {
  return (
    <>
          <Router>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/waterpurifier' element={<Waterpurifier/>}></Route>
              <Route path='/bestseller' element={<Bestseller/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/loginpage' element={<Loginpage/>}></Route>
            </Routes>
            <Fotter/>
          </Router>
    </>
  );
}

export default App;

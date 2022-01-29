
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductList from './pages/ProductList'
import Home from './pages/Home';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';


function App() {
 
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register/>} />
     <Route path="/cart" element={<Cart/>} />
     <Route path="/products/:category" element={<ProductList/>} />
     <Route path="/product/:id" element={<Product/>} />
     </Routes>
    </BrowserRouter>
   
       
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/nav";
import Home from './components/Home';
import Store from "./components/Store";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]); 
  const [quantities, setQuantities] = useState({}); 

  return (
    <Router>
      <NavBar cart={cart}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store  setCart={setCart} quantities={quantities} setQuantities={setQuantities} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;

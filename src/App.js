import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import GridView from "./pages/GridView";
import Columns from "./pages/Columns";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import MyAccount from "./pages/MyAccount";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/pages/gridview" element={<GridView />} />
          <Route exact path="/pages/columns" element={<Columns />} />
          <Route exact path="/shop/products" element={<Product />} />
          <Route exact path="/shop/cart" element={<Cart />} />
          <Route exact path="/shop/checkout" element={<Checkout />} />
          <Route exact path="/shop/my-account" element={<MyAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

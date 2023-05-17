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
import GridPostPage from "./pages/GridPostPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pages/gridview" element={<GridView />} />
          <Route path="/pages/columns" element={<Columns />} />
          <Route path="/shop/products" element={<Product />} />
          <Route path="/shop/cart" element={<Cart />} />
          <Route path="/shop/checkout" element={<Checkout />} />
          <Route path="/shop/my-account" element={<MyAccount />} />
          <Route path="/gridviewpost" element={<GridPostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

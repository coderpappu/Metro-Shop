import "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Shop from "./Pages/shop";
import Cart from "./Pages/cart";
import Contact from "./Pages/contact";
import Account from "./Pages/account";
import Wishlist from "./Pages/wishlist";
import Checkout from "./Pages/checkout";
import Error from "./Pages/error";
import ProductAdd from "./Pages/productAdd";
import AdminDashboard from "./Pages/Dashboard/adminDashboard";
import ActionPanel from "./Pages/Dashboard/actionPage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admindash" element={<AdminDashboard />} />
          <Route path="/prodadd" element={<ProductAdd />} />
          <Route path="/actionpanel" element={<ActionPanel />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

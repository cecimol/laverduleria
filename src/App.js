import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/itemDetailContainer";
import { CartProvider } from "./context/cartContext";
import Cart from "./components/cart";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDeO6MHawf2u6eb5f3AZ89KX0mVS0T2NPs",
  authDomain: "miproyecto-f254d.firebaseapp.com",
  projectId: "miproyecto-f254d",
  storageBucket: "miproyecto-f254d.appspot.com",
  messagingSenderId: "414021040004",
  appId: "1:414021040004:web:8e8e459887f1a8eadecfd1",
};

const App = () => {
  initializeApp(firebaseConfig);
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={null} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;

// import logo from '../logo.svg';
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Categories from "./Categories";
import NavBar from "./Navbar";
import Electronics from "./Electronics";
import Fashion from "./Fashion";
import Groceries from "./Groceries";
import Shoes from "./Shoes";
import Cart from "./Cart";
import Home from "./Home";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(0)
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  function addToCart(product) {
    console.log(product)
    if (!cart.includes(product)) {
      setCounter(counter =+1)
      setCart([...cart, product]);
    }
  }
  return (
    <div className="App">
      <NavBar searchChange={setSearch} counter={counter}/>
      <Categories />
      <Routes>
        <Route
          path="/products"
          element={
            <Home products={products} search={search} cartIt={addToCart} />
          }
        />
        <Route
          path="/electronics"
          element={<Electronics products={products} cartIt={addToCart} />}
        />
        <Route
          path="/fashion"
          element={<Fashion products={products} cartIt={addToCart} />}
        />
        <Route
          path="/shoes"
          element={<Shoes products={products} cartIt={addToCart} />}
        />
        <Route
          path="/groceries"
          element={<Groceries products={products} cartIt={addToCart} />}
        />
        <Route path="/cart" element={<Cart products={cart} />} />
      </Routes>
    </div>
  );
}

export default App;

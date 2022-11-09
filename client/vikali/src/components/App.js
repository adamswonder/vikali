// import logo from '../logo.svg';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Categories from "./Categories";
import NavBar from "./Navbar";
import Electronics from "./Electronics";
import Fashion from "./Fashion";
import Groceries from "./Groceries";
import Shoes from "./Shoes";
import Cart from "./Cart";
import Home from './Home'
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://drip-mall-project.herokuapp.com/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  },[]);

  function addToCart(product) {
    if (!cart.includes(product)) {
      setCart([...cart, product])
      fetch("https://drip-mall-project.herokuapp.com/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      });
    }
  }
  return (
    <div className="App">
      {/* <Announcement /> */}
      <NavBar searchChange={setSearch} />
      <Categories />
      <Switch>
        <Route path="/" exact>
          <Home products={products} search={search} cartIt={addToCart} />
        </Route>
        <Route path="/electronics">
          <Electronics products={products} cartIt={addToCart} />
        </Route>
        <Route path="/fashion">
          <Fashion products={products} cartIt={addToCart} />
        </Route>
        <Route path="/shoes">
          <Shoes products={products} cartIt={addToCart} />
        </Route>
        <Route path="/groceries">
          <Groceries products={products} cartIt={addToCart} />
        </Route>
        <Route path="/cart">
          <Cart products={cart} />
        </Route>
      </Switch> 
      {/* {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

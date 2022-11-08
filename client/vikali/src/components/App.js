import React from "react";
// import { Switch, Route } from "react-router-dom";
// import Categories from "./Categories";
// import NavBar from "./NavBar";

function App() {
  // const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);
  // const [search, setSearch] = useState("");
  //
  // useEffect(() => {
  //   fetch("http://localhost:3000/products")
  //     .then((resp) => resp.json())
  //     .then((data) => setProducts(data))
  //     .catch((err) => console.log(err));
  // }, []);
  //
  // function addToCart(product) {
  //   if (!cart.includes(product)) {
  //     setCart([...cart, product]);
  //     fetch("http://localhost:3000/cart", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(product),
  //     });
  //   }
  // }
  return (
    <div>
      {/* <NavBar searchChange={setSearch} /> */}
      {/* <Categories /> */}
    </div>
  );
}

export default App;

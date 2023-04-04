import { useState } from "react";
import "./App.css";
import CounterContainer from "./components/Counter/CounterContainer";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemList from "./components/ItemList/ItemList.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
function App() {
  let saludo = "hola Cristian";
  return (
    <div className="App">
      <Navbar />
      <ItemList saludo={saludo} />
      <CounterContainer />
      <CartWidget />
    </div>
  );
}

export default App;

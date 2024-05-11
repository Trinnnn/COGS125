import styles from "./App.module.css";
import { Navbar } from "./componets/Navbar/Navbar.js";
import { Hero } from "./componets/Hero/Hero.js";
import React from "react";

function App() {
  return React.createElement(
    "div",
    { className: styles.App },
    React.createElement(Navbar, null),
    React.createElement(Hero, null)
  );
}

export default App;

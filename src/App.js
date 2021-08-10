import React from "react";
import "./index.css";
import Login from "./componentes/login";
import Header from "./componentes/header";
import Buscador from "./componentes/SearchInput";
import Hero from "./componentes/hero";

function App() {
  return (
    <div>
      <Header />
      <Login />
      <Buscador />
      <Hero />
    </div>
  );
}

export default App;

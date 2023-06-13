import React from "react";

import logo from "./logo.png";
import search from "./search.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo do Alura Space" />
      <div>
        <input type="text" name="" id="" placeholder="O que você procura?" />
        <img src={search} alt="icone de busca" />
      </div>
    </header>
  );
};

export default Header;

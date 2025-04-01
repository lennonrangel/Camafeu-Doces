import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import cook from "../../assets/cook.png";

function Home() {
  return (

<body>
      <header className="menu">
        <nav>
          <img src={logo} class="logo" alt="Logo" />
          <ul className="list-menu">
            <li><a href="home">Home</a></li>
            <li><a href="produtos">Produtos</a></li>
            <li><a href="sobre-nos">Empresa</a></li>
            <li><a href="cardapio">Unidades</a></li>
            <li><a href="contato">Contato</a></li>
          </ul>
        </nav>
      </header>      
</body>
  )
}

export default Home

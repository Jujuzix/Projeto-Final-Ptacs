import './Todo.css'
import { useEffect, useState } from "react";
import Detalhe from './Componentes/detalhe';
import { Link } from 'react-router-dom';
export default function destaque() {

  const listavideosLocalStorage = JSON.parse(localStorage.getItem("listavideos")) || [];
  return (

    <header>
      <nav>
        <div  class="Navbar">
          <h1>Videos Site</h1>
          <ul>
            <li>Home</li>
            <Link class="link" to="/registro">
              <li>Cadastro</li>
            </Link>
            <Link class="link" to="/destaque">
              <li>Destaque</li>
            </Link>
          </ul>
        </div>
        <div class="lista"></div>
        <div class="Card">
          {listavideosLocalStorage.map((video, index) => (
            <Detalhe key={index} video={video} />
            
          ))}
        </div>
      </nav>
    </header>







  );
}
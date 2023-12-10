import './Todo.css'
import { useEffect, useState } from "react";
import VideoCard from './Componentes/Menu';
import { Link } from 'react-router-dom';
export default function destaque() {

  const listavideos = JSON.parse(localStorage.getItem("listavideos")) || [];
  return (

    <header>
      <nav>
        <div class="Navbar">
          <h1>Videos Site</h1>
          <ul>
            <li>Home</li>
            <Link to="/registro">
              <li>Cadastro</li>
            </Link>
            <Link to="/destaque">
              <li>Destaque</li>
            </Link>
          </ul>
        </div>
        <div class="lista"></div>
        <div class="Card">
          {listavideos.slice(-2).map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </nav>
    </header>







  );
}
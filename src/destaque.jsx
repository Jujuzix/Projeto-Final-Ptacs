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
          <h1>Games Videos</h1>
          <ul>
            <Link class="link" to="/">
              <li>Home</li>
            </Link>

            <Link  class="link" to="/registro">
              <li>Cadastro</li>
            </Link>

            <Link  class="link"  to="/destaque">
              <li>Destaque</li>
            </Link>

          </ul>
        </div>
        <div class="lista"></div>
        <div class="Card">
          {/* o intuito do slice será de puxar os ultimos 5 videos que serão cadastrados para a pagína de videos em destaque. */}
            {listavideos.slice(-5).map((video, index) => (
              <VideoCard key={index} video={video} />
          ))}
        </div>
      </nav>
     
    </header>







  );
}
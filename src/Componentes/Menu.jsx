
import { Link } from 'react-router-dom';
import React from 'react';

const Menu = ({ video }) => {
  return (
    <div>
    <div class="Card">
      <iframe
        width="300"
        height="200"
        src={`https://www.youtube.com/embed/${video.video.slice(17)}`}
        title="video"

        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div class="dentro">
        <h1 class='princ'>Nome do Canal:
          <p class="menor">{video.canal}</p>
          Titulo do Vídeo:<p>{video.titulo}</p>
         
         
       
        </h1>
<button > <Link class="link" to="/detalhe">Mais Sobre</Link></button>
      </div>


    </div>
    </div>
  );
};

export default Menu;

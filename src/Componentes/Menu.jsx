{/* Este componente é o principal, que vai estar mostrando um card para com o intuito de demosntrar  informações principais do video que vai estar sendo apresentado na pagína principal, junto do botão que irá o levar para a pagina seguinte, que será a de detalhes. */}
import { Link } from 'react-router-dom';
import React from 'react';

const Menu = ({ video }) => {
  return (
    <div>
    <div class="Card">
      {/*O iframe irá exibir o video que será inserido na pagina de registro e será apresentado junto de suas informações.*/}
      <iframe
        width="300"
        height="200"
        src={`https://www.youtube.com/embed/${video.video.slice(17)}`}
        title="video"
        frameBorder="0"
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

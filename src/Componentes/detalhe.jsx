{/* Este componente vai estar mostrando um card para com o intuito de demosntrar mais informações do video que vai estar sendo apresentado na pagína de detalhes. */}
import React from 'react';
import { Link } from 'react-router-dom';
const detalhe = ({ video }) => {
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
        <h1 class='princ'>
          A Descrição do Vídeo:
          <p>{video.descricao}</p>
          Tema:
          <p>{video.jogo}</p>
          Data em que o video foi publicado:
          <p>{video.data}</p>
       
        </h1>
        <button > <Link class="link" to="/">Voltar para Pagína Inicial</Link></button>
      </div>


    </div>
    </div>
  );
};

export default detalhe;
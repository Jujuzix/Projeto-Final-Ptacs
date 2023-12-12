import { Link } from 'react-router-dom';
import VideoCard from './Componentes/Menu';
import Detalhe from './Componentes/detalhe';
import './Todo.css';
export default function Home() {
  {/*O listavideosLocalStorage vai estar listando os videos que estão sendo mostrados localmente.*/ }
  const listavideosLocalStorage = JSON.parse(localStorage.getItem("listavideos")) || [];
  return (
    <header>
      <nav >
        <div class="Navbar" >
          <h1>Games Videos</h1>
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
        {/* esta rendenrizando o componete VideoCard, que ira puxar o seu conteudo e vai expor na pagina principal junto com o seu conteúdo.
         E o map irá puxar a listagem do listavideosLocalStorage, que vai estar criando um card junto com cada video renderizado. */}
          {listavideosLocalStorage.map((video, index) => (
            <VideoCard key={index} video={video} />
          
          ))}
        </div>
      </nav>
    </header>
  );
}
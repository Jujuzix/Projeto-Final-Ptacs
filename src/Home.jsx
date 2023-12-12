import { Link } from 'react-router-dom';
import VideoCard from './Componentes/Menu';
import Detalhe from './Componentes/detalhe';
import './Todo.css';
export default function Home() {
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
          {listavideosLocalStorage.map((video, index) => (
            <VideoCard key={index} video={video} />
          
          ))}
        </div>
      </nav>
    </header>
  );
}
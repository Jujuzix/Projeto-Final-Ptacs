import './Todo.css'
import Menu from './Componentes/menu';
export default function Home() {

  const listavideosLocalStorage = JSON.parse(localStorage.getItem("listavideos"));
  return (

    <header>

      <nav>
        <div class="Navbar">
          <h1>Videos Site</h1>

          <ul>
            <li>Home</li>
            <li>Cadastro</li>
            <li>Destaque</li>

          </ul>
        </div>
        <div class="lista"></div>
        <menu />
        {listavideosLocalStorage.map((video)=><p>{video.titulo}</p>)}


      </nav>
     
    </header>






  );
}
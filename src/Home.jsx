import './Todo.css'
import Menu from './Componentes/menu';
export default function Home() {

  const listavideosLocalStorage = JSON.parse(localStorage.getItem("Listavideos"));
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



      </nav>
    </header>






  );
}
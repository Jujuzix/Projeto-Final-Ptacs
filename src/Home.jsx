import './Todo.css'
import Menu from './Componentes/menu';
export default function Home() {
   
    const lista = JSON.parse(localStorage.getItem("Listavideos"));
    return (

        <header>

            <nav>
                <div class="Navbar">
                  <h1>Videos Site</h1>
                 
                  <div class="lista">
                  
                    <h2>Home</h2>
                    <h2>Destaque</h2>
                    <h2>Cadastro</h2>
                 
                  </div>
                  </div>
                    <menu />


               
            </nav>
        </header>






    );
}
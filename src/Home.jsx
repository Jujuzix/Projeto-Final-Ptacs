import './Todo.css'
import Menu from './Componentes/menu';
import { Link } from 'react-router-dom';
export default function Home() {

  const listavideosLocalStorage = JSON.parse(localStorage.getItem("listavideos")) || [];
  return (

    <header>

      <nav>
        <div class="Navbar">
          <h1>Videos Site</h1>

          <ul>
<<<<<<< HEAD
            <li>Home</li> 
            <Link to="/registro">
            <li>Cadastro</li>
            </Link>
            
            <li>Destaque</li>
=======
            <li>Home</li>
            <Link to="/registro"><li>Cadastro</li>
            </Link>
            <Link to="/destaque"><li>Destaque</li></Link>

>>>>>>> 5a9626f608b3237271dc3c3f040aa9322e9012ad

          </ul>
        </div>
        <div class="lista"></div>
        <menu />
<<<<<<< HEAD
        {listavideosLocalStorage.map((video)=> <iframe width="300" 
       height="200"
       src={`https://www.youtube.com/embed/${video.video.slice(17)}`} 
       title="video" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>)}


      </nav>
     

      <iframe width="300"
      height="200" 
      src='(`https://www.youtube.com/embed`)'></iframe>
=======
        <div class="card">
        {listavideosLocalStorage.map((video) => 
        <iframe width="300"
          height="200"
          src={`https://www.youtube.com/embed/${video.video.slice(17)}`}
          title="video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>)}

          <menu/>

          {listaVideos.map((vi))}
         
</div>



                   



      </nav>

>>>>>>> 5a9626f608b3237271dc3c3f040aa9322e9012ad
    </header>

    







  );
}
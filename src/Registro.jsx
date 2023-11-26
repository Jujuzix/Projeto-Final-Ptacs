import { useEffect, useState } from "react" //Gerencia Estado
import { Link } from "react-router-dom";
import './Todo.css'
export default function Todo() {
    const listavideosLocalStorage = JSON.parse(localStorage.getItem("Listavideos"));

    const [listavideos, Listavideos] = useState(listavideosLocalStorage || []);
    const [id, setId] = useState(VideolistaLocalStorage[VideolistaLocalStorage.length - 1]?.id + 1 || 1);
    const [titulo, setTitu] = useState("");
    const [video, setvideo] = useState("");
    useEffect(() => { localStorage.setItem("listavideos", JSON.stringify(listavideos)) }, [listavideos]);
    //Estado


    //Salvar o formulário para a lista
    const salvar = (e) => {
        e.preventDefault();
        setVideolista([...lista, {
            descricao: descricao,
            id: id,
            titulo: titulo,
            video: video

        }])
        setId(id + 1);
        setvideo("");

    };
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
   
    
        <div>
            <h1 class="d">Opções de Tênis</h1>



            <div class="add">
                <form onSubmit={salvar}>
                    <input placeholder="adicione a url da imagem desejada" type="text" value={img} onChange={(e) => { setImg(e.target.value) }} />
                    <input value={tenis} onChange={(e) => { setTenis(e.target.value) }} />
                    <input Value={titulo} onChange={(e) => { setTitu(e.target.value) }} />
                    <button class="btn">Adicionar</button>
                </form>
            </div>
            </div>
            </header>
    )
}
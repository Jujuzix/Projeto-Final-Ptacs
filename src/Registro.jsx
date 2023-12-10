/*
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
*/



import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Todo.css';

export default function Todo() {
    const listaVideosLocalStorage = JSON.parse(localStorage.getItem("listavideos")) || [];

    const [listaVideos, setListaVideos] = useState(listaVideosLocalStorage);
    const [id, setId] = useState(listaVideos[listaVideos.length - 1]?.id + 1 || 1);
    const [canal, setCanal] = useState("");
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [jogo, setJogos] = useState("");
    const [video, setVideo] = useState("");

    useEffect(() => {
        localStorage.setItem("listavideos", JSON.stringify(listaVideos));
    }, [listaVideos]);

    const navigate = useNavigate();

    const salvar = async(e) => {
        e.preventDefault();
       await setListaVideos([  ...listaVideos,
            { 
                id: id,
                canal: canal,
                titulo: titulo,
                video: video,
                descricao:descricao
            }
        ]);
        await setId(id + 1);
        navigate("/");
        setVideo("");
        setDescricao("");
        setCanal("");
        setTitulo("");
    };

    return (
        <header>
            <nav class="Navbar" >
            <h1 >Lista de Videos</h1>
            </nav>
          
              
                <div class="add">
                    <form  onSubmit={salvar}>
                        <h1>Video Desejado:</h1>
                        <input placeholder="adicione a url do video" type="text" value={video} onChange={(e) => setVideo(e.target.value)} />
                        <h1>Canal:</h1>
                        <input placeholder="adicione o nome do canal escolhido" value={canal} onChange={(e) => setCanal(e.target.value)} />
                        <h1>Titulo:</h1>
                        <input placeholder="adicione o titulo escolhido" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                        <h1>Descrição:</h1>
                        <input placeholder="adicione a decrição desejada" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                      
                        <button class="btn">Adicionar</button>
                      
                    </form>
                </div>
           
           
           
        </header>

       
    );
}

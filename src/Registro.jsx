
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
    const [data, setDatas] = useState("")   

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
                jogo: jogo,
                video: video,
                data: data,
                descricao:descricao
            }
        ]);
        await setId(id + 1);
        navigate("/");
        setVideo("");
        setDescricao("");
        setJogos("");
        setCanal("");
        setDatas("");
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
                        <h1>Tema:</h1>
                        <input placeholder="adicione o tema" value={jogo} onChange={(e) => setJogos(e.target.value)} />
                        <h1>Video foi publicado dia:</h1>
                        <input placeholder="adicione a data" value={data} onChange={(e) => setDatas(e.target.value)} />
                        <button class="btn">Adicionar</button>
                      
                    </form>
                </div>
           
           
           
        </header>

       
    );
}

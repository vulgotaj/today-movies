import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './favoritos.css';

function Favoritos() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem('@todaymovies');
        setFilmes(JSON.parse(minhaLista) || [])
    }, []);

    function excluirFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('@todaymovies', JSON.stringify(filtroFilmes));
        toast.success("Filme removido dos favoritos!");
    }

    return(
        <div className="container">
            <div className="lista-favoritos">
                {filmes.map((filme) => {
                    return (
                        <article>

                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <div className="detalhes-filme">
                                <h2>{filme.title}</h2>
                                <div className="flex-buttons">
                                    <Link to={`/filme/${filme.id}`}>Detalhes</Link>
                                    <a href="#" onClick={() => excluirFilme(filme.id)}><i class="fa-solid fa-xmark"></i> Excluir</a>
                                </div>
                            </div>

                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Favoritos;
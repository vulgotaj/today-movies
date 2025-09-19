import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: 'b7562157e726fd357b11ab569dd5b149',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            setFilmes(response.data.results);
            setLoading(false);
        }

        loadFilmes();

    }, [])

    if(loading) {
        return (
            <section>
                <h1>CARREGANDO...</h1>
            </section>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {

                    return (

                        <article key={filme.id}>

                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} />
                            <div className="detalhes-filme">
                                <h2>{filme.title}</h2>
                                <div className="flex-buttons">
                                    <Link to={`/filme/${filme.id}`}>Detalhes</Link>
                                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}><i class="fa-solid fa-clapperboard"></i> Trailer</a>
                                </div>
                            </div>

                        </article>
                    )

                })}
            </div>
        </div>
    )
}

export default Home;
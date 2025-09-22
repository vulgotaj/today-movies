import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './filme.css';

import api from '../../services/api';

function Filme() {
const { id } = useParams();
const navigate = useNavigate();

const [filme, setFilme] = useState({});
const [loading, setLoading] = useState(true);

useEffect(() => {

    async function loadFilmes() {
        await api.get(`/movie/${id}`, {
            params: {
                api_key: 'b7562157e726fd357b11ab569dd5b149',
                language: 'pt-BR',
            }
        })
        .then((response) => {
            setFilme(response.data);
            setLoading(false);
        })
        .catch(() => {
            navigate("/", { replace: true });
            return;
        })
    }

    loadFilmes();

}, [navigate, id])

function salvarFilme() {
    const minhaLista = localStorage.getItem("@todaymovies");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)

    if(hasFilme) {
        return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@todaymovies", JSON.stringify(filmesSalvos));
    
}

if(loading) {
    return(
        <div className="filme-info">
            <h1>CARREGANDO...</h1>
        </div>
    )
}

    return(
        <section className="filme-sec">
            
            <div className="filme-img">
                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
            </div>

            <div className="filme-desc">
                <h1>{filme.title}</h1>

                <p>Gêneros: {filme.genres && filme.genres.length > 0 ?
                   filme.genres.map((genre, index) => (
                    <span key={genre.id}>
                        {genre.name}
                        {index < filme.genres.length - 1 && ', '}
                    </span>
                ))
                : 'Não informado'}
                </p>

                <p>Lançamento: 
                    {filme.release_date ? new Date(filme.release_date).toLocaleDateString('pt-BR') : 'Não informada'}
                </p>

                <p>Duração:
                    {filme.runtime ? `${filme.runtime} min` : 'Não informada'}
                </p>

                <p>Sinopse: {filme.overview ? `${filme.overview}` : 'Não informada'}</p>

                <h3>Nota: {filme.vote_average.toFixed(1)} / 10</h3>

                <div className="filme-flex-buttons">
                    <button onClick={salvarFilme}>Salvar</button>
                    <button>
                        <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                            Trailer
                        </a>
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Filme;
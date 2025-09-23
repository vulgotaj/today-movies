import { Link } from 'react-router-dom';
import './erro.css';

function Erro() {
    return(
        <div className="error">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <p>A página que você tentou acessar não existe, <Link to="/">clique aqui</Link> para retornar a página principal</p>
        </div>
    )
}

export default Erro;
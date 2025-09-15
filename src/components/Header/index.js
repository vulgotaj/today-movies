import './header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function Header() {
    return (
        <header>
            <div className="header-container">
                <Link className="logo" to="/"><img src={logo} alt="todayMOVIES logo"></img></Link>
                <Link className="favoritos" to="/favoritos"><i class="fa-solid fa-star"></i> Favoritos</Link>
            </div>
        </header>
    )
}

export default Header;
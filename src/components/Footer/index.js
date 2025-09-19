import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <span> &copy; 2025, todayMOVIES, Todos os direitos reservados. </span>
            <a href="https://www.linkedin.com/in/feltajima/"><i class="fa-brands fa-linkedin"></i> Felipe Tajima</a>
            <a href="https://github.com/vulgotaj"><i class="fa-brands fa-square-github"></i> vulgotaj</a>
        </footer>
    )
}

export default Footer;
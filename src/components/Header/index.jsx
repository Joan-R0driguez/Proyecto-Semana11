import { Link } from 'react-router-dom';
import Logo from '../../assets/img/pngwing.com.png'
import './styles.css';

export default function Header () {
    return(
        <header>
            <section className="Header-logo">
                <Link to="/">
                    <img src={Logo} alt="Logo"/>
                </Link>
                <h3>GlobalWiki</h3>
            </section>
            <section className="Header-pages">
                <ul>
                    <Link to="/login"><li>Login</li></Link>
                    <Link to="/register"><li>Register</li></Link>
                </ul>
            </section>
        </header>
    )
}
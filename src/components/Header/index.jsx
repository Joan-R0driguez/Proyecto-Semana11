import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/pngwing.com.png'
import './styles.css';

export default function Header () {

    const [show, setShow] = useState(false);

    useEffect(window.onscroll = () => {
        setShow(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
    }, [])
    
    return(
        <header className={show ? "sticky" : "Header"}>
            <section className="Header-logo">
                <Link to="/homepage">
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
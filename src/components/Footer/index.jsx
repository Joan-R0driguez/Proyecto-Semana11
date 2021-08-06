import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

function Footer() {
    return (
        <footer>
            <Link to="/aboutus">
                <span className="footer-links">About Us</span>
            </Link> 
            <span>Pagina realizada por Joan Rodriguez</span>
            <Link to="/contact">
                <span className="footer-links">Contactenos</span>
            </Link> 
        </footer>
    )
}

export default Footer

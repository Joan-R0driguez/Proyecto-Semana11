import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

function GridItem({pais}) {

    const getId = (id) => {
        localStorage.setItem("countryid", id)
    }

    return (
        <section className="pais-item">
            <Link to="/countryitem" onClick={ () => getId(pais.alpha3Code)}>
                <img src={pais.flag} alt="" />
                <h2>Nombre: {pais.name}</h2>
                <h4>Capital: {pais.capital || "no tiene"}</h4>
            </Link>
        </section>
        
    )
}

export default GridItem

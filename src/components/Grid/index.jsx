import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GridItem from '../GridItem'
import Search from '../Search';
import './styles.css'

function Grid() {

    const url = "https://restcountries.eu/rest/v2/all"

    const [paises, setPaises] = useState([])

    useEffect(() => {
        setTimeout( () => {
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setPaises(data);
            });
        }, 1500)
        
    }, [])

    return paises.length === 0 ? <h1 className="loading">Loading...</h1> : (
        <>
            <Search />
            <Link to="/tablepage">
                <h1 className="table-link">Vista de tabla aqui</h1>
            </Link>
            <section className="country-grid">
                {paises.map( (pais) => {
                    return(
                        <GridItem pais={pais}/>
                    )
                })}
            </section>
            
        </>

            
    )
}

export default Grid

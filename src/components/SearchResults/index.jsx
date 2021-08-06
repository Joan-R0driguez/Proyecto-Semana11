import React, { useEffect, useState } from 'react'
import GridItem from '../GridItem';
import Search from '../Search';
import './styles.css'

function SearchResults() {

    const countryname = localStorage.getItem("userSearch");

    const api = "https://restcountries.eu/rest/v2/name/"

    const url = `${api}${countryname}`

    const [paises, setPaises] = useState([])

    useEffect(() => {
        setTimeout( () => {
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setPaises(data);
            });
        }, 1500)
        
    }, [paises])

    return paises.length === 0 ? <h1 className="loading">Loading...</h1> : (
        <>
            <Search />
            <section className={paises.length === 1 ? "country-grid-single" : "country-grid"}>
                {paises.map( (pais) => {
                    return(
                        <GridItem pais={pais}/>
                    )
                })}
            </section>
        </>
        
)
}

export default SearchResults

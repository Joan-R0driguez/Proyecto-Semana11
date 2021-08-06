import React, { useEffect, useState } from 'react'
import './styles.css'

function Table() {

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
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Nombre nativo</th>
                        <th>Capital</th>
                        <th>Lenguaje</th>
                        <th>Region</th>
                    </tr>
                </thead>
                <tbody>
                    {paises.map( (pais) => {
                        return(
                            <tr>
                                <td>{pais.translations.es}</td>
                                <td>{pais.nativeName}</td>
                                <td>{pais.capital}</td>
                                <td>{pais.languages[0].name}</td>
                                <td>{pais.region}</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </>
    )
}

export default Table

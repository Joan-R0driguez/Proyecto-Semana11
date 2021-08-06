import React, { useEffect, useState } from 'react'
import './styles.css'

function ItemDetail() {

    const api = "https://restcountries.eu/rest/v2/alpha/"

    const id = localStorage.getItem("countryid")

    const url = `${api}${id}`

    const [pais, setPais] = useState(null)

    useEffect(() => {
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setPais(data);
            });
    }, [url])

    console.log(pais);

    return (
        <>
            {pais ? (
            <>
                <section className="item-detail">
                    <div className="image-container">
                        <img src={pais?.flag} alt="bandera del pais" />
                    </div>
                    <div className="text-container">
                        <h3>Nombre: {pais?.translations.es}</h3>
                        <h3>Nombre nativo: {pais?.nativeName}</h3>
                        <h3>Capital: {pais?.capital}</h3>
                        <h3>Region: {pais?.region}</h3>
                        <h3>Lenguaje: {pais?.languages[0].name}</h3>
                        <h3>Habitantes: {pais?.population}</h3>
                        <h3>Moneda: {pais?.currencies[0].name}</h3>
                    </div>
                </section>
            </>    
            ) : <h1 className="loading">Loading...</h1>} 
        </>
    )
}

export default ItemDetail

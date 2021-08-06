import React from 'react'
import mapa from '../../assets/img/002.mapamundi-con-letras.png'
import './styles.css'

function Hero() {
    return (
        <section className="img-container">
            <img src={mapa} alt="un mapamundi" className="mapamundi"/>
        </section>
    )
}

export default Hero

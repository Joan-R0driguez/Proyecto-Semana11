import React from 'react'
import './styles.css'

function Contact() {
    return (
        <div className="contact-container">
            <h2>Contactanos</h2>
            <form>
                <p>
                    <label>Nombre</label>
                    <input type="text" required/>
                </p>
                <p>
                    <label>Correo</label>
                    <input type="email" required/>
                </p>
                <p>
                    <label>Titulo</label>
                    <input type="text" required/>
                </p>
                <p>
                    <label>Tu comentario</label>
                    <textarea required></textarea>
                </p>
                
                <p><button>Enviar</button>
                </p>
            </form>
        </div>
    )
}

export default Contact

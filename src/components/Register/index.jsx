import './styles.css';

export default function Register () {
    return(
        <div className="register-container">
            <h2>Registrate</h2>
            <form className="formulario">
                <p>
                    <label>Usuario</label>
                    <input type="text" required/>
                </p>
                <p>
                    <label>Correo</label>
                    <input type="email" required/>
                </p>
                <p>
                    <label>Contraseña</label>
                    <input type="password" required/>
                </p>
                
                <p><button>Enviar</button>
                </p>
            </form>
        </div>
    )
}
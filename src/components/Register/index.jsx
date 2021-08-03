import './styles.css';

export default function Register () {
    return(
        <div className="register-container">
            <h2>Registrate</h2>
            <form className="formulario">
                <p>
                    <label>Usuario</label>
                    <input type="text" />
                </p>
                <p>
                    <label>Correo</label>
                    <input type="email" />
                </p>
                <p>
                    <label>Contraseña</label>
                    <input type="password" />
                </p>
                
                <p><button>Enviar</button>
                </p>
            </form>
        </div>
    )
}
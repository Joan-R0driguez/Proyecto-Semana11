import './styles.css';

export default function Login () {
    return(
        <div className="login-container">
            <h2>Iniciar Sesion</h2>
            <form>
                <p>
                    <label>Usuario</label>
                    <input type="text" />
                </p>
                <p>
                    <label>Contraseña</label>
                    <input type="password" />
                </p>
                <p><button>Ingresar</button>
                </p>
            </form>
        </div>
    )
}
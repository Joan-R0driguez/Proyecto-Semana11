import {Link} from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { Form } from 'semantic-ui-react'
import './styles.css';

export default function Login () {

    const nombre = "joan"
    const contraseña = "12345"

    const formik = useFormik({
        initialValues: {
            name:"",
            password:""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("El usuario es obligatorio"),
            password: Yup.string().required("La contraseña es obligatoria")
        }),
        onSubmit: (formData) => {
            console.log(formData);
        },
    })

    return(
        <div className="login-container">
            <h2>Iniciar Sesion</h2>
            <Form onSubmit={formik.handleSubmit}>
                <p>
                    <label>Usuario</label>
                    <Form.Input
                            onChange={formik.handleChange}
                            error={formik.errors.name}
                            type="text" 
                            name="name" 
                    />
                </p>
                <p>
                    <label>Contraseña</label>
                    <Form.Input
                        onChange={formik.handleChange}
                        error={formik.errors.password}
                        type="password" 
                        name="password" 
                    />
                </p>
                <p className="button">
                    {nombre === formik.values.name && contraseña === formik.values.password ? (
                        <Link to="/home">
                            <button type="submit">Ingresar</button>
                        </Link> 
                    ) : (
                        <Link to="/">
                            <button type="submit">Ingresar</button>
                        </Link>
                    )}
                    
                </p>
            </Form>
        </div>
    )
}
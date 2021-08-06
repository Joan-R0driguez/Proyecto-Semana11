import * as Yup from 'yup'
import { useFormik } from 'formik';
import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './styles.css';

export default function Register () {

    const formik = useFormik({
        initialValues: {
            user:"",
            email:"",
            password:""
        },
        validationSchema: Yup.object({
            user: Yup.string().required("El usuario es obligatorio"),
            email: Yup.string().email("No es un email valido").required("El correo es obligatorio"),
            password: Yup.string().required("La contraseña es obligatoria")
        }),
        onSubmit: (formData) => {
            console.log(formData);
        },
    })

    return(
        <div className="register-container">
            <h2>Registrarse</h2>
            <Form onSubmit={formik.handleSubmit}>
                <p>
                    <label>Usuario</label>
                    <Form.Input
                        id="userName"
                        onChange={formik.handleChange}
                        error={formik.errors.user}
                        type="text" 
                        name="user" 
                    />
                </p>
                <p>
                    <label>Correo</label>
                    <Form.Input
                        onChange={formik.handleChange}
                        error={formik.errors.email}
                        type="text" 
                        name="email" 
                    />
                </p>
                <p>
                    <label>Contraseña</label>
                    <Form.Input
                        id="userPass"
                        onChange={formik.handleChange}
                        error={formik.errors.password}
                        type="password" 
                        name="password" 
                    />
                </p>
                <p className="button">
                        <Link to="/home">
                            <button type="submit">Ingresar</button>
                        </Link>
                </p>
            </Form>
        </div>
    )
} 
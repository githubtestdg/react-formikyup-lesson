import {useAuth} from "../context/AuthContext";
import {useLocation, useNavigate} from "react-router-dom";
import { Helmet } from "react-helmet";
import {useFormik, Formik, Form, Field} from "formik";


export default function Login(){

    const {setUser} = useAuth()
    const navigate  = useNavigate()
    const location = useLocation()

    return(
        <>
            <Helmet>
                <title>Login</title>
                <meta name={'description'} content={'Login description'} />
            </Helmet>
            <h2>Login Page</h2>
            <Formik initialValues={{
                username:'',
                password:''
            }}
            onSubmit={values => {
                setUser(values)
                navigate(location?.state?.return_url || '/',{
                    replace : true
                })
                console.log(values)
            }}
            >
                {({values}) => (
                    <Form>
                        <Field name={'username'}/> <br/>
                        <Field name={'password'} type={'password'} /> <br/>
                        <button type="submit">Giriş yap</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}
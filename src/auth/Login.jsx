import {useAuth} from "../context/AuthContext";
import {useLocation, useNavigate} from "react-router-dom";
import { Helmet } from "react-helmet";
import { Formik, Form, Field} from "formik";
import Input from "../components/form/Input";
import {LoginSchema} from "../validation";


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
            onSubmit={(values,actions) => {
                setUser(values)
                navigate(location?.state?.return_url || '/',{
                    replace : true
                })
                setTimeout(()=>{
                    actions.setSubmitting(false)
                    actions.resetForm()
                }, 3000)
            }}
            validationSchema={LoginSchema}
            >
                {({values,isSubmiting}) => (
                    <Form className={'grid gap-y-3 p-4'}>
                        <h1 className={'text-2xl font-bold mb-3'}>Giriş Yap</h1>
                        <Input name={'username'} label={'Kullanıcı Adı'}/> <br/>
                        <Input name={'password'} type={'password'} label={'Parola'}/> <br/>
                        <button type="reset">Resetle</button>
                        <button disabled={isSubmiting} type="submit" className={'bg-black h-10 rounded text-sm text-white disabled:opacity-50'}>Giriş yap</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}
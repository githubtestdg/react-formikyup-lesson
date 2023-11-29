import {useAuth} from "../context/AuthContext";
import {useLocation, useNavigate} from "react-router-dom";
import { Helmet } from "react-helmet";


export default function Login(){

    const {setUser} = useAuth()
    const navigate  = useNavigate()
    const location = useLocation()

    console.log(location)
    const loginHandle = ()=> {
        setUser({
            id : 1,
            username : 'tyf',
        })
        navigate(location?.state?.return_url || '/')
    }

    return(
        <>
            <Helmet>
                <title>Login</title>
                <meta name={'description'} content={'Login description'} />
            </Helmet>
            <h2>Login Page</h2>
            <button onClick={loginHandle}>Login</button>
        </>
    )
}
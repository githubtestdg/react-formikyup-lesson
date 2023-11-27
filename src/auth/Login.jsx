import {useAuth} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

export default function Login(){

    const {setUser} = useAuth()
    const navigate = useNavigate()

    const loginHandle = ()=> {
        setUser({
            id : 1,
            username : 'tyf',
        })
        navigate('/')
    }

    return(
        <>
            <h2>Login Page</h2>
            <button onClick={loginHandle}>Login</button>
        </>
    )
}
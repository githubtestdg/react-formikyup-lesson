import {useAuth} from "../context/AuthContext";
import {Link} from "react-router-dom";

export default function Profile() {
    const {setUser, user} = useAuth()
    const logoutHandle = () => {
        setUser(false)
    }
    return (
        <>
            <h3>Profile Page</h3>
            {!user && <Link to={'/auth/login'}>Giriş yap</Link>}
            {user && <button onClick={logoutHandle}>Çıkış Yap</button>}
        </>
    )
}

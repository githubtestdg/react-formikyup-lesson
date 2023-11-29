import {useAuth} from "../context/AuthContext";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet"

export default function Profile() {
    const {setUser, user} = useAuth()
    const logoutHandle = () => {
        setUser(false)
    }
    return (
        <>
            <Helmet>
                <title>Profile</title>
                <meta name={'description'} content={'Profile page description'} />
            </Helmet>
            <h3>Profile Page</h3>
            {!user && <Link to={'/auth/login'}>Giriş yap</Link>}
            {user && <button onClick={logoutHandle}>Çıkış Yap</button>}
        </>
    )
}

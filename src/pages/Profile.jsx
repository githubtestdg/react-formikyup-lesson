import {useAuth} from "../context/AuthContext";

export default function Profile(){
    const {setUser} = useAuth()
    const logoutHandle = () => {
        setUser(false)
    }
    return(
        <>
            <h3>Profile Page</h3>
            <button onClick={logoutHandle}>Çıkış Yap</button>
        </>
    )
}
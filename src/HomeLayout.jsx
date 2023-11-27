import {NavLink, Outlet} from "react-router-dom";

export  default function HomeLayout(){
    return(
        <>
            <nav>
                <NavLink to="/" className={({isActive}) =>  isActive && 'aktif'} >Anasayfa</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/blog" style={({isActive}) => ({
                    backgroundColor : isActive ? '#351232' : 'white'
                }) }>
                    {({isActive}) => (
                        <>
                            Blog
                            {isActive && '(Aktif)'}
                        </>
                    )}
                </NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}
import {NavLink, Outlet} from "react-router-dom";
import { url } from './utils';


export  default function HomeLayout(){

    return(
        <>
            <nav>
                <NavLink to={url('home')} className={({isActive}) =>  isActive && 'aktif'} >Anasayfa</NavLink>
                <NavLink to={url('home.contact')}>Contact</NavLink>
                <NavLink to={url('home.blog')} style={({isActive}) => ({
                    backgroundColor : isActive ? '#351232' : 'white'
                }) }>
                    {({isActive}) => (
                        <>
                            Blog
                            {isActive && '(Aktif)'}
                        </>
                    )}
                </NavLink>
                <NavLink to={url('home.profile')}>Profile</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}
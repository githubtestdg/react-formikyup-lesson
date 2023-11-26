import { Outlet } from "react-router-dom";

export default function BlogLayout(){
    return(
        <>
          <ul>
                <li><a href="#">Adana</a></li>
                <li><a href="#">Osmaniye</a></li>
            </ul>
            <Outlet/>
        </>
    )
}
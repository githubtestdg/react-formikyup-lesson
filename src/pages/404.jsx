import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"

export default function Page404 (){
    return(
        <>
            <Helmet>
                <title>404</title>
                <meta name={'description'} content={'404 description'} />
            </Helmet>
            <h1>404 Pages Not Found</h1>
            <Link to='/'> Anasayfaya Dön</Link>
        </>
    )
}
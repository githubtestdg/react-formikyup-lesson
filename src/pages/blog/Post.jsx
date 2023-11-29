import { useParams } from "react-router-dom"
import { Helmet } from 'react-helmet'

export default function Post(){
    const {url, id} = useParams()
    return(
        <>
            <Helmet>
                <title>{url} Info</title>
                <meta name={'description'} content={'Homepage description'} />
            </Helmet>

            <div> Post Page = {url} - {id} </div>
        </>
    )
}
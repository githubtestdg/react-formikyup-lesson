import {Helmet} from 'react-helmet'

export default function Home () {
    return(
        <>
        <Helmet>
            <title>Homepage</title>
            <meta name={'description'} content={'Homepage description'} />
        </Helmet>
        <div>Homepage</div>
        </>
    );
}
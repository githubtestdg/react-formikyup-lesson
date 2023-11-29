import { Link, useSearchParams } from "react-router-dom";
import { url } from "../../utils"
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";



export default function Blog () {

  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('search') || '')

  useEffect(() => {
    searchParams.set('search', search)
    if(!search){
      searchParams.delete('search')
    }
    setSearchParams(Object.fromEntries([...searchParams]))
  },[search])

  const posts = [
    {
        id:1,
        title: 'post-1'
    },
   {
    id:2,
    title:'post-2-adana'
} 
]
    return(
        <div>

            <Helmet>
                <title>Blog</title>
                <meta name={'description'} content={'Blog page description'} />
            </Helmet>

          <input type="text"  defaultValue={search} onChange={e => setSearch(e.target.value)} />

          Blog page
          <ul>
                {posts.map(post => (
                   <li key={post.id}>
                     <Link  to={url('home.blog.post',{
                        id: post.id,
                        url: post.title
                    })} > {post.title} </Link>
                   </li>
                ))}
                   <li> <Link to={url('home.blog.categories')}>Osmaniye</Link></li>
            </ul>
        </div>
    );
}
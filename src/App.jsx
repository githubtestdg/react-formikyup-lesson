import { Routes,Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import BlogLayout from "./pages/blog/";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/Contact";
import './style.css'
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Page404 from "./pages/404";
import Blog404 from "./pages/blog/Blog404";

export default function App() {
  return (
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
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/blog" element={<BlogLayout />} >
          <Route index={true} element={<Blog />} />
          <Route path="categories" element={<Categories />}/>
          <Route path="post/:id/:url" element={<Post />}/>
          <Route path="*" element={<Blog404 />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
    </>
  );
}

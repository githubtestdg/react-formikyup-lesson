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
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import AuthLayout from "./auth/AuthLayout";
import Login from "./auth/Login";
import HomeLayout from "./HomeLayout";



export default function App() {
  return (
  <>
    <Routes>
      <Route path={'/'} element={<HomeLayout/>}>
        <Route index={true} element={<Home />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="blog" element={<BlogLayout />} >
            <Route index={true} element={<Blog />} />
            <Route path="categories" element={<Categories />}/>
            <Route path="post/:id/:url" element={<Post />}/>
            <Route path="*" element={<Blog404 />} />
        </Route>
      <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>} />
      </Route>
      <Route path={'/auth'} element={<AuthLayout/>}>
        <Route path={'login'} element={<Login/>}/>
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
    </>
  );
}

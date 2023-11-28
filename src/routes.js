import HomeLayout from "./HomeLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogLayout from "./pages/blog";
import Blog from "./pages/blog/Blog";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Blog404 from "./pages/blog/Blog404";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import AuthLayout from "./auth/AuthLayout";
import Login from "./auth/Login";
import Page404 from "./pages/404";


const routes = [
    {
        path: '/',
        element : <HomeLayout/>,
        name: 'home',
        children:[
            {
                index: true,
                element: <Home/>,
                name: 'index'
            },
            {
                path:'contact',
                element: <Contact/>,
                name:'contact'
            },
            {
                path: 'blog',
                element: <BlogLayout/>,
                auth: true,
                name:'blog',
                children:[
                    {
                        index: true,
                        element: <Blog/>,
                        name:'index'
                    },
                    {
                        path:'categories',
                        element: <Categories/>,
                        name:'categories'
                    },
                    {
                        path: 'post/:id/:url',
                        element: <Post/>,
                        name:'post'
                    },
                    {
                        path: '*',
                        element: <Blog404/>,
                        name:'blogNotFound'
                    }
                ]
            },
            {
                path:'profile',
                element: <Profile/>,
                auth: true,
                name:'profile'
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        name:'auth',
        children: [{
            path: 'login',
            element: <Login/>,
            name:'login'
        }]
    },
    {
        path: '*',
        element: <Page404/>,
        name:'notFound'
    }
]

const authMap = routes => routes.map(route => {
    if (route?.auth){
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if (route?.children){
        route.children = authMap(route.children)
    }
    return route
})

export default authMap(routes)
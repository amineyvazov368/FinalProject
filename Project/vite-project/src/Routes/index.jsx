import AdminRoot from "../pages/Admin/AdminRoot";
import ClientRoot from "../pages/Client/ClientRoot";
import AdminBlog from "../pages/Admin/AdminBlog";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminTeam from '../pages/Admin/AdminTeam';
import Dashboard from "../pages/Admin/Dashboard";
import About from "../pages/Client/About";
import Blog from "../pages/Client/Blog";
import Contact from "../pages/Client/Contact";
import Gallery from "../pages/Client/Gallery";
import Home from "../pages/Client/Home";
import Login from "../pages/Client/Login";
import Pricing from "../pages/Client/Pricing";
import Register from "../pages/Client/Register";
import Team from "../pages/Client/Team"



export const ROUTES = [
    //admin root

    {
        path:"/admin",
        element:<AdminRoot/>,
        children:[
            {
                index:true,
                element:<Dashboard/>
            },
            {
                path:"blog",
                element:<AdminBlog/>
            },
            {
                path:"team",
                element:<AdminTeam/>
            },
            {
                path:"login",
                element:<AdminLogin/>
            }
        ]
},

//client root
{
    path:"/",
    element:<ClientRoot/>,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:"about",
            element:<About/>
        },
        {
            path:"blog",
            element:<Blog/>
        },
        {
            path:"contact",
            element:<Contact/>
        },
        {
            path:"gallery",
            element:<Gallery/>
        },
        {
            path:"login",
            element:<Login/>
        },
        {
            path:"register",
            element:<Register/>
        },
        {
            path:"team",
            element:<Team/>
        },
        {
            path:"pricing",
            element:<Pricing/>
        }

    ]
}

]
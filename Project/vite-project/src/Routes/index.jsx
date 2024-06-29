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
import Team from "../pages/Client/Team";
import User from '../pages/Client/User';
import TeamCreate from "../pages/Admin/AdminTeam/TeamCreate.jsx";

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
                path:"AdminBlog",
                element:<AdminBlog/>
            },
            {
                path:"AdminTeam",
                element:<AdminTeam/>
            },
            {
                path:"adminTeam/create",
                element:<TeamCreate/>
            },
            {
                path:"AdminLogin",
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
        },
        {
            path:"user",
            element:<User/>
        }

    ]
}

]
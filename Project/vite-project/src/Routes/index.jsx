import AdminRoot from "../pages/Admin/AdminRoot";
import ClientRoot from "../pages/Client/ClientRoot";
import AdminBlog from "../pages/Admin/AdminBlog";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminTeam from '../pages/Admin/AdminTeam';
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
import BlogCreate from "../pages/Admin/AdminBlog/BlogCreate";
import Users from "../pages/Admin/Users"
import Message from "../pages/Admin/Message"
import BlogDelete from "../pages/Admin/AdminBlog/BlogDelete";
import TeamDelete from "../pages/Admin/AdminTeam/TeamDelete";

export const ROUTES = [
    //admin root

    {
        path: "/admin",
        element: <AdminRoot />,
        children: [

            {
                path: "AdminBlog",
                element: <AdminBlog />
            },
            {
                path: "adminBlog/create",
                element: <BlogCreate />
            },
            {
                path: "adminBlog/delete/:id",
                element: <BlogDelete />
            },
            {
                path: "adminTeam",
                element: <AdminTeam />
            },
            {
                path: "adminTeam/create",
                element: <TeamCreate />
            },
            {
                path: "adminTeam/delete/:id",
                element: <TeamDelete/>
            },
            {
                path: "users",
                element: <Users />
            },
            {
                path: "AdminLogin",
                element: <AdminLogin />
            },
            {
                path: "message",
                element: <Message />
            }
        ]
    },

    //client root
    {
        path: "/",
        element: <ClientRoot />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "gallery",
                element: <Gallery />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "team",
                element: <Team />
            },
            {
                path: "pricing",
                element: <Pricing />
            },
            {
                path: "user",
                element: <User />
            }

        ]
    }

]
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Login/Register";
import PageNotFounde from "../../pages/PageNotFounde/PageNotFounde";
import About from "../../pages/About/About";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Productdetails from "../../pages/About/Productdetails/Productdetails";
import EditAbout from "../../pages/About/EditAbout/EditAbout";
import Products from "../../pages/About/Products/Products";
// import EditAbout from "../../pages/About/EditAbout/EditAbout";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/Posts',
                element: <Products></Products>
            },
            // {
            //     path: '/Furnitures',
            //     element: <Products></Products>
            // },
            
            {
                path: '/productdetails/:id',
                element: <PrivateRoute><Productdetails></Productdetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`)
            },
            // {
            //     path: '/category/:name',
            //     element: <PrivateRoute><Categories></Categories></PrivateRoute>,
            //     loader: ({ params }) => fetch(`https://seconde-up-server-husain7997.vercel.app/category/${params.name}`)
            // },
            
            {
                path:"/editabout/:email",
                element: <EditAbout></EditAbout>,
                loader: ({ params }) => fetch(`http://localhost:5000/users/${params.email}`)
            },
           
            {
                path: '/*',
                element: <PageNotFounde></PageNotFounde>
            },

        ]
    }
    // {
// path:'/dashboard',
// element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
// children:[
// {
//     path:'/dashboard',
// element: <MyAppointments></MyAppointments>
// },
// {
//     path:'/dashboard/users',
//     element: <AdminRoute><Users></Users></AdminRoute>
// }
// ]
//     }
])
export default router;
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Login/Register";
import PageNotFounde from "../../pages/PageNotFounde/PageNotFounde";

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
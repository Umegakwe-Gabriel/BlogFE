import React from 'react'
import Layout from '../Components/common/Layout'
import {createBrowserRouter} from "react-router-dom"
import HomeScreen from '../pages/HomeScreen'
import SignIn from '../pages/auth/SignIn'
import Register from '../pages/auth/Register'

export const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomeScreen/>
            }
       ]
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/sign-in",
        element: <SignIn/>
    },
])
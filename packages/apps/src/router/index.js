import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";
import Home from "../page/Home";
import Role from "../page/Role";
import News from "../page/News";

export default createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/role',
                element: <Role />
            },
            {
                path: '/news',
                element: <News />
            }
        ]
    }
])
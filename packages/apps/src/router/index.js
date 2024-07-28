import { createHashRouter } from "react-router-dom";
import App from "../App";
import React from "react";
import Home from "../page/Home/Home";
import Role from "../page/Role/Role";
import News from "../page/News/News";
import NewsMain from "../page/News-Main";

export default createHashRouter([
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
                path: '/news/:id',
                element: <News />
            },
            {
                path: '/news',
                element: <NewsMain />
            }
        ]
    }
])
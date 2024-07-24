import ReactDOM from "react-dom/client";
import React from "react";
import router from "./router";
import { RouterProvider } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
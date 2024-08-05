import ReactDOM from "react-dom/client";
import React from "react";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/root.store";
const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
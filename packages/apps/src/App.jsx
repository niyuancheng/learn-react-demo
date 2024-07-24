import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";

export default function App() {
    return (
        <div className="nova-app-wrapper">
            <Header />
            <div className="router-container">
                <Outlet />
            </div>
        </div>
    )
}
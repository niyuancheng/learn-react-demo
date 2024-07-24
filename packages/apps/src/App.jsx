import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./index.css";

export default function App() {
    return (
        <div className="nova-app-wrapper">
            <Header />
            <div>This is a App</div>
        </div>
    )
}
import React from "react";
import { poster } from "../assets";
import "./Home.css";
export default function Home() {
    return (
        <div className="nova-header-home-container">
            <div className="nova-header-home-video">
                <video src="https://ys.mihoyo.com/main/_nuxt/videos/bg.3e78e80.mp4" loop autoPlay poster={poster}></video>
            </div>
        </div>
    )
}
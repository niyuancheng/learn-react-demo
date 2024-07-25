import React from "react";
import { poster } from "../assets";
import "./Home.css";
export default function Home() {
    return (
        <div className="nova-home-container">
            <div className="nova-home-video">
                <video src="https://ys.mihoyo.com/main/_nuxt/videos/bg.3e78e80.mp4" loop autoPlay poster={poster}></video>
            </div>

            <div className="nova-home-body">
                This is home body
            </div>
        </div>
    )
}
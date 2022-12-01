import React from "react";
import NAV from "../components/navbar/NavBar"
import HERO from "../components/hero/Hero"
import IM1 from "../assets/im1.jpg"
import "./home.css"
// import IM2 from "../assets/im2.jpg"

export default function Home(){
    return(
        <>
        <NAV></NAV>
        <HERO></HERO>

        <div className="recent_projects">
            <h1>Recent Projects</h1>
            <div className="projects">
                <div className="project">
                    <img src={IM1} alt="" />
                    <h2>Art Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa debitis numquam qui veniam corrupti facilis vitae, dignissimos sequi aspernatur, sapiente explicabo consectetur eos illo harum! Ullam expedita deserunt beatae maiores?</p>
                </div>

                <div className="project">
                    <img src={IM1} alt="" />
                    <h2>Art Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa debitis numquam qui veniam corrupti facilis vitae, dignissimos sequi aspernatur, sapiente explicabo consectetur eos illo harum! Ullam expedita deserunt beatae maiores?</p>
                </div>

                <div className="project">
                    <img src={IM1} alt="" />
                    <h2>Art Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa debitis numquam qui veniam corrupti facilis vitae, dignissimos sequi aspernatur, sapiente explicabo consectetur eos illo harum! Ullam expedita deserunt beatae maiores?</p>
                </div>
            </div>
        </div>
        </>
    );
}
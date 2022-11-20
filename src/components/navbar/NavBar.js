import React from 'react'
import './navbar.css'

export default function NavBar(){
    return(
        <div className="navBar">
            <div className="start">
                <a href="">HOME</a>
                <a href="">INSPIRATIONS</a>
            </div>
            <div className="center">
                <h1>MONA ART STUDIO</h1>
            </div>
            <div className="end">
                <a href="">WORKS</a>
                <a href="">CONTACT</a>
            </div>
        </div>
    )
}
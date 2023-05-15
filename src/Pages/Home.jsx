import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
        <div>
            <h1>FRAMER MOTION</h1>
        </div>
        <div className="exemplos">
            <Link to={"/gesture-animations"}>
                <h2>Gesture<br/>Animations</h2> 
            </Link>
            <Link to={"/drag"}>
                <h2>Drag</h2> 
            </Link>
        </div>
        <p className="rodape">IFRS • Web Design • Gabriel Hamdan • Renata Pigatto</p>
        </>
    );
}
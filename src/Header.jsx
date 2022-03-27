import React from "react";
import Clock from './Clock.jsx'

export default function Header() {
    return (
        <div class="bg-dark text-light">
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html">Home</a>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./portfolio.html">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./pokedex.html">Pokedex</a>
                        </li>
                    </ul>
                    <Clock/>
                </div>
            </nav>
        </div>
)
}
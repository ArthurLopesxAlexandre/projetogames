import React from 'react'
import Home from '../pages/Home'
import "../pages/Home.css";
import { Link } from 'react-router-dom';
import logo from "../img/logo.jpg";



export default function Nav(){
    return (
        <>
        <nav className="navbar">
        <div className="logo-area">
        <img
  src={logo}
  alt="Logo TZ"
  className="logo-img"
/>
          <h1 className="logo-text">TZGAMES</h1>
        </div>

        <ul className="nav-links">
  <Link to="/">Home</Link>
  <Link to="/Jogo">Jogo</Link>
  <Link to="/Contato">Contato</Link>
</ul>
      </nav>
      </>
    )
}
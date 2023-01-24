import React from "react";
import Footer from "../includes/Footer";
import Navbar from "../includes/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h2 className="user-title">Home Sweet Home</h2>

      <div className="container">
        <div className="home-card">Knižní Klub</div>
        <div className="home-card">Deskovky</div>
        <div className="home-card">Bowling</div>
        <div className="home-card">Music Kvíz</div>
        <div className="home-card">Lesbotoč Camp </div>
        <div className="home-card">Tour de Svařáček</div>
        <div className="home-card">Speed Dating</div>
      </div>

      <Footer />
    </div>
  );
}

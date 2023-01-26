import React from "react";
import Footer from "../includes/Footer";
import Navbar from "../includes/Navbar";

export default function Home() {
  return (
    <div className="user-container">
      {/* <Navbar /> */}
      {/* <h2 className="user-title">Home Sweet Home</h2> */}

      <div className="home-container">
        <div className="home-card knizni-card">
          {/* <img
            className="home-card-images"
            src="img/home/book-club-min.jpg"
            alt=""
          /> */}
          {/* <p>Knižní Klub</p> */}
        </div>

        <div className="home-card deskovky-card"></div>
        <div className="home-card bowling-card">Bowling</div>
        <div className="home-card">Music Kvíz</div>
        <div className="home-card">Lesbotoč Camp </div>
        <div className="home-card">Tour de Svařáček</div>
        <div className="home-card">Speed Dating</div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
// public\img\home\book-club-min.jpg

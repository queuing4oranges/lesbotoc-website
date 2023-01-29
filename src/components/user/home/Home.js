import React from "react";
import { Link } from "react-router-dom";
import Footer from "../includes/Footer";
import Navbar from "../includes/Navbar";

export default function Home() {
  const resetTitle = () => {
    document.getElementById("dynamic-home-title").innerHTML = "";
  };

  return (
    <div className="user-container">
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="38%" y1="1%" x2="62%" y2="99%">
            <stop offset="5%" stopColor="#f5e2d3"></stop>
            <stop offset="95%" stopColor="#7ab6cb"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 180.66666666666663,184.13333333333333 361.33333333333326,168.26666666666665 533,163 C 704.6666666666667,157.73333333333335 867.3333333333335,163.0666666666667 1017,171 C 1166.6666666666665,178.9333333333333 1303.3333333333333,189.46666666666664 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      {/* <Navbar /> */}
      {/* <h2 className="user-title">Home Sweet Home</h2> */}

      <div className="home-container">
        <div className="home-cont">
          <div
            className="home-card knizni-card"
            onMouseEnter={() =>
              (document.getElementById("dynamic-home-title").innerHTML =
                "Knižní Klub")
            }
            onMouseLeave={() => resetTitle()}
          ></div>
          <div
            className="home-card deskovky-card"
            onMouseEnter={() =>
              (document.getElementById("dynamic-home-title").innerHTML =
                "Deskovky")
            }
            onMouseLeave={() => resetTitle()}
          ></div>
          <div
            className="home-card bowling-card"
            onMouseEnter={() =>
              (document.getElementById("dynamic-home-title").innerHTML =
                "Bowling")
            }
            onMouseLeave={() => resetTitle()}
          ></div>
          <div
            className="home-card music-card"
            onMouseEnter={() =>
              (document.getElementById("dynamic-home-title").innerHTML =
                "Music Kvíz")
            }
            onMouseLeave={() => resetTitle()}
          ></div>
          <div
            className="home-card camp-card"
            onMouseEnter={() =>
              (document.getElementById("dynamic-home-title").innerHTML =
                "Lesbotoč Camp")
            }
            onMouseLeave={() => resetTitle()}
          ></div>
          <div
            className="home-card svarek-card"
            onMouseEnter={() =>
              (document.getElementById("dynamic-home-title").innerHTML =
                "Tour de Svařáček")
            }
            onMouseLeave={() => resetTitle()}
          ></div>
          <div
            className="home-card speed-card"
            onMouseEnter={() =>
              (document.getElementById("dynamic-home-title").innerHTML =
                "Speed Dating")
            }
            onMouseLeave={() => resetTitle()}
          ></div>
          <div className="home-card more-card">
            <Link to={"/kalendar"}>Kam vyrazit?</Link>
          </div>
        </div>

        <div className="dynamic-titles-cont">
          <h3 className="dynamic-home-title" id="dynamic-home-title"></h3>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

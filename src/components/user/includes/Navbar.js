import React from "react";
import { NavLink } from "react-router-dom";
//icons
import Facebook from "../../../assets/svg-icons/Facebook";
import Instagram from "../../../assets/svg-icons/Instagram";
//data
import { navbarlinks } from "../../../data/NavbarLinks";

export default function Navbar() {
  return (
    <div className="user-navbar-container sticky">
      <div className="user-navbar-cont">
        <div className="user-navbar-symbols">
          <NavLink
            className="user-nav-link"
            to={"/"}
            style={({ isActive }) => ({
              color: isActive ? "#eb5a49" : "#7ab6cb",
              textDecoration: "none",
            })}
          >
            <p
              className="logo-home"
              style={{
                fontFamily: "'Amatic SC', cursive",
                fontSize: "22px",
                color: "black",
              }}
            >
              {" "}
              Lesbotoč
            </p>
          </NavLink>

          <a
            href="https://www.facebook.com/seznamsenatoci"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <Facebook width={24} height={24} fill="currentColor" />
          </a>
          <a
            href="https://www.instagram.com/lesbotoc/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram width={24} height={24} fill="currentColor" />
          </a>
        </div>
        <div className="navbar-links">
          {navbarlinks.map((link) => (
            <div key={link.id}>
              <NavLink
                className="user-nav-link"
                to={link.to}
                style={({ isActive }) => ({
                  color: isActive ? "#feebdd" : "#003243",
                  textDecoration: "none",
                })}
              >
                {link.name}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

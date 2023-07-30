import React, { useState, Fragment } from "react";
import { navbarlinks } from "../../../data/NavbarLinks";
import Hamburger from "../../../assets/svg-icons/Hamburger";
import X from "../../../assets/svg-icons/X";
import { NavLink } from "react-router-dom";

export default function MobileNavbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Fragment>
      {/* <div className="mobile-menu"></div> */}
      {!openMenu ? (
        <button
          className="user-hamburger"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Hamburger height={24} width={24} fill="#003243" />
        </button>
      ) : (
        <>
          <button
            className="user-hamburger"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <X height={24} width={24} fill="#003243" />
          </button>
        </>
      )}
      {openMenu && (
        <div className="navlinks-cont pt-3">
          {navbarlinks.map((link) => (
            <div key={link.id} className="mobile-navlink">
              <NavLink to={link.to}>
                <p className="mr-5 ml-5">{link.name}</p>
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
}

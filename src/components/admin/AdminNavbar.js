import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

export default function AdminNavbar() {
  const [showNavbar, setShowNavbar] = useState(false)

  const toggleMenu = () => {
    let menu = document.querySelector(".navbar-nav");
    menu.classList.toggle("show");

  }

  return (
    <div className="admin-navbar sticky">
        <nav className="navbar admin-nav">
            <div className="container">

                  <div className="mobil-nav-cont">
                    <button className="hamburger-btn btn btn-sm" onClick={toggleMenu}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                      </svg>
                    </button>
                  </div>

                <div className="navbar-brand" href="#">
                    <Link to={"/"}><img className="lesbotoc-adminnavbar-logo" src="/img/logo_light.png" alt="lesbotoc logo" /></Link>
                    <Link style={{textDecoration: 'none'}} to={"/admin"}><p>Admin</p></Link>
                </div>

                <div className="navbar-nav">



                  <Link className="nav-link" to={"/admin/contacts"}>Contacts</Link>

                  <Link className="nav-link" to={"/admin/events"}>Events</Link>

                  <Link className="nav-link" to={"/admin/pictures"}>Pictures</Link>

                  <Link className="nav-link" to={"/admin/newsletter"}>Newsletter</Link>

                            
                  <div className="logout-cont">
                    <Link style={{textDecoration: 'none'}} to={"/"}>
                    <button className="btn btn-danger logout-btn">
                    <svg className="logout-logo bi bi-box-arrow-right" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                    <p>Logout</p>
                    </button>
                    </Link>       
                  </div>

                </div>
            </div>
        </nav>
    </div>
  )
}

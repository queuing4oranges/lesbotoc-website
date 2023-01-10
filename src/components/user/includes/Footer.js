import React from 'react';

export default function Footer() {

  //getting updated year for footer
  const currentYear = new Date();

  return (
    <div className="user-footer-container">
      <div className="user-footer-cont">

        <div className="user-footer-copyright">
          <p>&copy; {currentYear.getFullYear()} &nbsp;</p>
          <a href="https://www.itisgoodtohave.me">Katja Zenker</a>
         </div>

        <div className="user-footer-newsletter">
          <p className="footer-newsletter">Newsletter</p>
          <p className="footer-contct">Contact</p>
          <p className="footer-privacy">Privacy</p>

        </div>

        <div className="user-footer-admin">
        <button className="btn admin-panel-button">AdminPanel</button>
        </div>



      </div>
    </div>
  )
}

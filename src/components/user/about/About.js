import React from "react";
import Footer from "../includes/Footer";
import Navbar from "../includes/Navbar";
import team from "../../../assets/team2.jpg";
import mariana from "../../../assets/mariana.png";
import eliska from "../../../assets/eliska.png";
import marta from "../../../assets/marta.png";

export default function About() {
  return (
    <div className="user-container">
      <Navbar />
      <div className="user-about-cont">
        <h2 className="user-title">To jsme my</h2>
        <img
          src={team}
          alt="3 women from lesbotoč"
          className="user-about-img"
        />
      </div>

      <div className="user-about-intro">
        <div className="paragraph-box opaque-box"></div>

        <p className="user-paragraph user-about-paragraph">
          Jsme tři obyčejné ženské. Jedna z Prahy, druhá z Moravy a třetí od
          Plzně. Sešly jsme se z různých koutů ČR, abychom uspořádaly tu pravou
          seznamovací akci. Zjistily jsme totiž po letech úporného hledání, že
          lesby nemají pořádně kam jít a kde se najít. Chceme vytvářet prostor
          pro seznamovací akce pravidelně každý měsíc. Nenásilnou formou tak
          chceme docílit, abychom se všechny poznaly a nezbylo nám jediného
          opomíjeného živáčka v koutě.
        </p>
      </div>

      <div className="user-singles-cont">
        <div className="user-about member-mariana">
          <img loading="lazy" src={mariana} alt="Mariana - Team Member" />
          <p className="member-name">Mariana</p>
          <p className="user-paragraph mariana-intro">
            Lorem ipsum dolor sit amet. Et enim architecto ea reprehenderit
            voluptatem et ratione consequatur et illo sunt quo beatae inventore.
            Ut ducimus corrupti nam debitis consequuntur ea dignissimos
            temporibus ea repellat laboriosam ea tempora vitae aut dolorem
            voluptatem et pariatur molestiae.
          </p>
        </div>

        <div className="user-about member-eliska">
          <img loading="lazy" src={eliska} alt="Eliska - Team Member" />
          <p className="member-name">Eliška</p>
          <p className="user-paragraph eliska-intro">
            Lorem ipsum dolor sit amet. Et enim architecto ea reprehenderit
            voluptatem et ratione consequatur et illo sunt quo beatae inventore.
            Ut ducimus corrupti nam debitis consequuntur ea dignissimos
            temporibus ea repellat laboriosam ea tempora vitae aut dolorem
            voluptatem et pariatur molestiae.
          </p>
        </div>

        <div className="user-about member-marta">
          <img loading="lazy" src={marta} alt="Marta - Team Member" />
          <p className="member-name">Marta</p>
          <p className="user-paragraph marta-intro">
            Lorem ipsum dolor sit amet. Et enim architecto ea reprehenderit
            voluptatem et ratione consequatur et illo sunt quo beatae inventore.
            Ut ducimus corrupti nam debitis consequuntur ea dignissimos
            temporibus ea repellat laboriosam ea tempora vitae aut dolorem
            voluptatem et pariatur molestiae.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

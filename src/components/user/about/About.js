import React from "react";
import Footer from "../includes/Footer";
import Navbar from "../includes/Navbar";
import team from "../../../assets/about_images/team2.png";
import { members } from "./aboutData";

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
          loading="eager"
        />
      </div>

      <div className="user-about-intro">
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

      <div className="user-singles-container">
        <div className="user-singles">
          {members.map((member) => (
            <div key={member.id} className="user-about">
              <img src={member.img} loading="lazy" alt={member.name} />
              <p className="member-name">{member.name}</p>
              <p className="user-paragraph">{member.intro}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

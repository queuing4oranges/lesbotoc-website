import React from 'react';
import BubbleGrid from '../includes/BubbleGrid';
import Footer from '../includes/Footer';
import Navbar from '../includes/Navbar';

export default function About() {
  return (
    <div className="user-about-container">
      <Navbar/>
      <div className="user-about-cont">
      <h2 className="user-title">To jsme my</h2>
      <img src="img/Team2.jpg" alt="" className="user-about-img" />
      </div>
      
      <div className="user-about-intro">
        <div className="bubbles-about">
          <BubbleGrid/>
        </div>
        

        <div className="paragraph-box opaque-box"></div>

        <p className="user-paragraph user-about-paragraph">
        Jsme tři obyčejné ženské. Jedna z Prahy, druhá z Moravy a třetí od Plzně. Sešly jsme se z různých koutů ČR, abychom uspořádaly tu pravou seznamovací akci.
        Zjistily jsme totiž po letech úporného hledání, že lesby nemají pořádně kam jít a kde se najít. Chceme vytvářet prostor pro seznamovací akce pravidelně každý měsíc. Nenásilnou formou tak
        chceme docílit, abychom se všechny poznaly a nezbylo nám jediného opomíjeného živáčka v koutě.
        </p>
      </div>


        <div className="user-singles-cont">
          <div className="user-about member-mariana">
            <img src="/img/mariana_sq.png" alt="pictures of Mariana - Team Member" />
            <p className="member-name">Mariana</p>
            <p className="user-paragraph mariana-intro">
              Lorem ipsum dolor sit amet. Et enim architecto ea reprehenderit voluptatem et ratione consequatur et illo sunt quo beatae inventore. Ut ducimus corrupti nam debitis consequuntur ea dignissimos temporibus ea repellat laboriosam ea tempora vitae aut dolorem voluptatem et pariatur molestiae.
            </p>
          </div>

          <div className="user-about member-eliska">
            <img src="/img/eliska_sq.png" alt="pictures of Eliska - Team Member" />
            <p className="member-name">Eliška</p>
            <p className="user-paragraph eliska-intro">
              Lorem ipsum dolor sit amet. Et enim architecto ea reprehenderit voluptatem et ratione consequatur et illo sunt quo beatae inventore. Ut ducimus corrupti nam debitis consequuntur ea dignissimos temporibus ea repellat laboriosam ea tempora vitae aut dolorem voluptatem et pariatur molestiae.
            </p>
          </div>

          <div className="user-about member-marta">
            <img src="/img/marta_sq.png" alt="pictures of Marta - Team Member" />
            <p className="member-name">Marta</p>
            <p className="user-paragraph marta-intro">
              Lorem ipsum dolor sit amet. Et enim architecto ea reprehenderit voluptatem et ratione consequatur et illo sunt quo beatae inventore. Ut ducimus corrupti nam debitis consequuntur ea dignissimos temporibus ea repellat laboriosam ea tempora vitae aut dolorem voluptatem et pariatur molestiae.
            </p>
          </div>
      </div>
      <Footer/>
    </div>
  )
}


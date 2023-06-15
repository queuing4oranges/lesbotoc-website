import { HomeGradient } from "./HomeGradient";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//logo
import LogoPart2 from "../../includes/icons/LogoPart2";
import LogoPart1 from "../../includes/icons/LogoPart1";

//data
import { links } from "./homeData";
import RightArrow from "../../../assets/svg-icons/RightArrow";

export default function Home() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [fontColor, setFontColor] = useState("#003243");

  const handleMouseEnter = (newTitle) => {
    setTitle(newTitle);
    setFontColor("#003243");
  };

  const handleMouseLeave = () => {
    setFontColor("transparent");
  };

  const goToCalendar = () => {
    navigate("/kalendar");
  };

  return (
    <div className="user-container">
      <div className="gradient-container">
        <HomeGradient />
      </div>

      <div className="home-container">
        <div className="logo-cont">
          <div className="logo-cont-logo">
            <LogoPart1 width={105} height={125} color="#2B2A29" />
            <div className="logo-part-two">
              <LogoPart2
                className="logo-part-two"
                width={152}
                height={160}
                color="#2B2A29"
                circle="#7AB6CB"
              />
            </div>
          </div>

          <div className="logo-cont-text">
            <p>seznámení podle vašich představ</p>
          </div>
        </div>
        <div className="home-cont">
          {links.map((link) => (
            <div
              key={link.id}
              style={{ backgroundImage: `url(${link.background})` }}
              className={`home-card ${link.CName}`}
              onMouseEnter={() => handleMouseEnter(link.title)}
              onMouseLeave={() => handleMouseLeave()}
              onClick={() => goToCalendar()}
            ></div>
          ))}
        </div>{" "}
      </div>
      <div className="dynamic-title-cont">
        <p
          className="dynamic-home-title"
          id="dynamic-home-title"
          style={{ color: fontColor }}
        >
          {title}
        </p>
        <div className="enter-btn" onClick={() => goToCalendar()}>
          <RightArrow height={50} width={50} />
        </div>
      </div>
    </div>
  );
}

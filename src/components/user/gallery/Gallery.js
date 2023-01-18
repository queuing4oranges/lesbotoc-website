import React, { useState, useEffect } from "react";
import Footer from "../includes/Footer";
import Navbar from "../includes/Navbar";
import axios from "axios";
import BubbleGrid6x7 from "../includes/BubbleGrid6x7";
import OpaqueBox from "../includes/OpaqueBox";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    getImages();
  }, [imagesLoaded]);

  const getImages = () => {
    axios
      .get("https://api.itisgoodtohave.me/images/read.php")
      .then(function (response) {
        setImages(response.data);
        setImagesLoaded(true);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="user-gallery-container">
        <h2 className="user-title">Galerie</h2>

        <div className="box-gallery1">
          <OpaqueBox width="600px" height="300px" />
        </div>

        <div className="box-gallery2">
          <OpaqueBox width="600px" height="300px" />
        </div>

        <div className="bubbles-gallery2">
          <BubbleGrid6x7 color="#B84639" />
        </div>

        <div className="bubbles-gallery3">
          <BubbleGrid6x7 color="#003243" />
        </div>

        {imagesLoaded && (
          <div className="user-gallery-cont">
            {images.map((img, key) => (
              <div key={key} className="user-img-cont">
                <img
                  className="user-gallery-img"
                  src={`https://api.itisgoodtohave.me/images/images/${img.filename}`}
                  alt={`${img.alt}`}
                />
                <p className="user-img-title">{img.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

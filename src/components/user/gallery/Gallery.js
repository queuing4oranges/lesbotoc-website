import React, { useEffect } from "react";
//components
import Footer from "../includes/Footer";
import Navbar from "../includes/Navbar";
import Loading from "../includes/Loading";
//hooks
import useGetImages from "../../../hooks/useGetImages";

export default function Gallery() {
  const { images, loading, error, getImages } = useGetImages();

  useEffect(() => {
    getImages();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  console.log(error);

  return (
    <div>
      <Navbar />
      <div className="user-container gallery-container">
        <h2 className="user-title gallery-title">Galerie</h2>

        {images && (
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

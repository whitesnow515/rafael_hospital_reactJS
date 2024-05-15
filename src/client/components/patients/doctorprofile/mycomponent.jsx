import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import {
  IMG_fe_01,
  IMG_fe_02,
  IMG_fe_03,
  IMG_fe_04,
} from "../../pages/searchdoctor/searchList/img";

const MyComponent = () => {
  const images = [IMG_fe_01, IMG_fe_02, IMG_fe_03, IMG_fe_04];
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div>
      <ul className="clinic-gallery">
        {images.map((image, index) => (
          <li key={index}>
            <a onClick={() => openLightbox(index)}>
              <img src={image} alt={`Feature ${index + 1}`} />
            </a>
          </li>
        ))}
      </ul>

      {lightboxOpen && (
        <Lightbox
          mainSrc={images[lightboxIndex]}
          nextSrc={images[(lightboxIndex + 1) % images.length]}
          prevSrc={images[(lightboxIndex + images.length - 1) % images.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setLightboxIndex(
              (lightboxIndex + images.length - 1) % images.length
            )
          }
          onMoveNextRequest={() =>
            setLightboxIndex((lightboxIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default MyComponent;

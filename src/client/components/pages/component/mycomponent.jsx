import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

import { IMG_fe_01, IMG_fe_02, IMG_fe_03, IMG_fe_04 } from "./img";

const MyComponent = () => {
  const photos = [
    { src: IMG_fe_01, alt: "Feature" },
    { src: IMG_fe_02, alt: "Feature" },
    { src: IMG_fe_03, alt: "Feature" },
    { src: IMG_fe_04, alt: "Feature", "data-attribute": "SRL" },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery
        photos={photos}
        onClick={(e, { photo, index }) => openLightbox(index)}
      />
      <Lightbox
        images={photos.map((photo) => ({ src: photo.src }))}
        onClose={closeLightbox}
        onClickPrev={() => setCurrentImage(currentImage - 1)}
        onClickNext={() => setCurrentImage(currentImage + 1)}
        currentImage={currentImage}
        isOpen={viewerIsOpen}
      />
    </div>
  );
};

export default MyComponent;

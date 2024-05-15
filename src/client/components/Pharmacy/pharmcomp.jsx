import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

import { feature01, feature02, feature03, feature04 } from "./image";

const PharmacyComp = () => {
  const photos = [
    { src: feature01, alt: "Feature" },
    { src: feature02, alt: "Feature" },
    { src: feature03, alt: "Feature" },
    { src: feature04, alt: "Feature", "data-attribute": "SRL" },
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

export default PharmacyComp;

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Gallery.css";

const images = Array.from({ length: 14 }, (_, i) => `/images/salon-${i + 1}.jpeg`);
const slides = images.map((src) => ({ src }));

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="gallery-page">
      <h1 className="page-title display-heading gold-text">Gallery</h1>

      <div className="gallery-grid container-page">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className="gallery-thumb"
            data-aos="fade-up"
            data-aos-delay={(i % 4) * 100}
            onClick={() => setIndex(i)}
          >
            <img src={src} alt="" loading="lazy" />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </div>
  );
}

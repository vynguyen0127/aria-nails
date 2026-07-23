import { useEffect, useState } from "react";
import "./Carousel.css";

export default function Carousel({ images, interval = 4000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  const go = (dir) => {
    setIndex((i) => (i + dir + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-track">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`carousel-slide ${i === index ? "carousel-slide-active" : ""}`}
          />
        ))}
      </div>
      <button className="carousel-btn carousel-btn-prev" onClick={() => go(-1)} aria-label="Previous slide">
        &#10094;
      </button>
      <button className="carousel-btn carousel-btn-next" onClick={() => go(1)} aria-label="Next slide">
        &#10095;
      </button>
      <div className="carousel-dots">
        {images.map((src, i) => (
          <button
            key={src}
            className={`carousel-dot ${i === index ? "carousel-dot-active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

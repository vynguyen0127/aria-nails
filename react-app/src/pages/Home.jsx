import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import "./Home.css";

const heroImages = ["/images/salon-2.jpeg", "/images/salon-3.jpeg", "/images/salon-10.jpeg"];

const menuPreviews = [
  { img: "/images/menu-1.png", label: "Manicures", to: "/services#manicures" },
  { img: "/images/menu-2.png", label: "Pedicures", to: "/services#pedicures" },
  { img: "/images/menu-3.png", label: "Extras", to: "/services#other" },
  { img: "/images/menu-4.png", label: "Kids", to: "/services#kids" },
];

export default function Home() {
  return (
    <div className="home">
      <section className="home-hero">
        <h1 className="display-heading gold-text home-hero-title" data-aos="fade-down">
          Aria Nail Spa
        </h1>
        <p className="home-hero-tagline" data-aos="fade-up">
          Chicago&rsquo;s destination for manicures, pedicures &amp; relaxing spa treatments
        </p>
        <div data-aos="zoom-in" data-aos-delay="150">
          <Carousel images={heroImages} />
        </div>
      </section>

      <div className="appt-btn" data-aos="fade-up">
        <a href="https://book.atsoft.com/Book/326" target="_blank" rel="noreferrer">
          <button type="button" className="btn-gold">
            Make an Appointment
          </button>
        </a>
      </div>

      <section className="menu-preview container-page">
        <div className="menu-preview-grid">
          {menuPreviews.map((item, i) => (
            <div
              className="menu-card"
              key={item.label}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <img src={item.img} alt={item.label} className="menu-card-img" />
              <div className="menu-card-body">
                <h5 className="menu-card-title">{item.label}</h5>
                <Link className="btn-gold menu-card-btn" to={item.to}>
                  View Menu
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

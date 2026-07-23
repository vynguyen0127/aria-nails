import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { serviceCategories } from "../data/services";
import "./Services.css";

export default function Services() {
  const location = useLocation();
  const [openId, setOpenId] = useState(serviceCategories[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const hashId = location.hash.replace("#", "");
    if (hashId && serviceCategories.some((c) => c.id === hashId)) {
      setOpenId(hashId);
      requestAnimationFrame(() => {
        sectionRefs.current[hashId]?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  return (
    <div className="services-page">
      <h1 className="page-title display-heading gold-text">Services</h1>

      <div className="services-accordion container-page">
        {serviceCategories.map((category) => {
          const isOpen = openId === category.id;
          return (
            <div
              className="service-category"
              key={category.id}
              id={category.id}
              ref={(el) => (sectionRefs.current[category.id] = el)}
            >
              <button
                type="button"
                className="service-category-header display-heading gold-text"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : category.id)}
              >
                {category.name}
                <span className={`chevron ${isOpen ? "chevron-open" : ""}`}>&#9662;</span>
              </button>

              {isOpen && (
                <div className="service-category-body">
                  {category.note && <p className="service-note">{category.note}</p>}
                  <ul className="service-list">
                    {category.items.map((item) => (
                      <li className="service-item" key={item.name}>
                        <div className="service-item-row">
                          <span className="service-item-name">{item.name}</span>
                          <span className="service-item-price">{item.price}</span>
                        </div>
                        {item.description && (
                          <p className="service-item-description">{item.description}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

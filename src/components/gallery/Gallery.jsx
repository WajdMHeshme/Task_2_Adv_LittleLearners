// Gallery.jsx
import React, { useState } from "react";
import "./Gallery.css";
import MainHeading from "../benefits/heading/MainHeading";
import GallerySection from "./gallerySection/GallerySection";
import { GalleryData } from "../../Data";

const Gallery = () => {
  // حالة الفلتر: 'all' لعرض الجميع أو عنوان القسم لتصفية
  const [filter, setFilter] = useState("all");

  // إنشاء مصفوفة الأزرار بشكل مبسط
  const buttons = ["all"];
  GalleryData.forEach(section => {
    buttons.push(section.title);
  });

  return (
    <section>
      <div className="container">
        <MainHeading
          startPgf="Our Gallery"
          heading="Our Rooms Gallery"
          mainPgf="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
        />

        {/* أزرار التحكم */}
        <div className="filter-buttons">
          {buttons.map(btn => (
            <button
              key={btn}
              className={filter === btn ? "Gbtn active" : "Gbtn"}
              onClick={() => setFilter(btn)}
            >
              {btn === "all" ? "All" : btn}
            </button>
          ))}
        </div>

        {/* عرض الأقسام بناء على الفلتر */}
        <div className="content">
          {GalleryData.map((section, idx) => (
            (filter === "all" || filter === section.title) && (
              <div data-aos= "zoom-in-right" key={idx} className="galleryContainer">
                <GallerySection
                  title={section.title}
                  img1={section.img1}
                  img2={section.img2}
                  img3={section.img3}
                  img4={section.img4}
                  pgf={section.pgf}
                />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery

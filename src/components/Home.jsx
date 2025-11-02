import React, { useState, useEffect } from "react";
import "../Style/Home.css";

function Home() {
  const images = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home">
      <div className="hero-section">
      {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i}`}
            className={`hero-img ${i === index ? "active" : ""}`}
          />
        ))}
        <div className="hero-text">
          <h1>Welcome to MyShop</h1>
          <p>
            Discover amazing products, exclusive deals, and everything you love — all in one place.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

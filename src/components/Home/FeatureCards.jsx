import React, { useState, useEffect } from 'react';
import './FeatureCards.css';

const FeatureCards = ({ clouddata }) => {
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardIndex = parseInt(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, cardIndex]));
          } else {
            setVisibleCards((prev) => new Set([...prev].filter((index) => index !== cardIndex)));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    );

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card) => observer.observe(card));

    // Cleanup function to disconnect the observer
    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-container mt-5">
      <div className="scroll-row justify-content-center">
        {clouddata.map((data, index) => (
          <div
            className={`scroll-col-lg-4 feature-card ${visibleCards.has(index) ? 'visible' : ''}`}
            key={index}
            data-index={index}
            data-aos="fade-right"
            data-aos-delay={index * 100}
          >
            <div className="scroll-home-wrapper-img">
              <img src={data.src} alt={data.alt} />
              <div className="scroll-home-content">
                <h4 className="scroll-home-content-header">{data.content}</h4>
                <p className="scroll-home-content-subtitle">{data.hoverContent2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;

import React from 'react';
import "./process.css";

const ProcessCard = ({ cardsData }) => {
  return (
    <div className="process-cards-container">
      {cardsData.map((card, index) => (
        <div className="process-cards" key={index}>
          <div className="process-cards-icons">{card.icon}</div>
          <h5 className="process-cards-title" style={{ textAlign: 'left' }}>
            {card.title}
          </h5>
          <p className="text-light process-cards-d">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProcessCard;

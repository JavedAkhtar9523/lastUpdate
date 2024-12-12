import React, { useState } from "react";
import "./Faq.css";

const FAQ = ({faqs}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null); 

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index); 
  };

  return (
      <div className="faq-consultation">
        <section className="faq-section">
        <h2>Frequently asked questions</h2>
        <p>Here are some common questions about this service.</p>
        <ul className="faq-list">
          {faqs.map((faq, index) => (
            <li key={index}>
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <button>{openFaqIndex === index ? "-" : "+"}</button>
              </div>
              {openFaqIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </section>
      </div>
  );
};

export default FAQ;

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import icons from react-icons
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Does your iOS app development company sign an NDA to keep my app secure?",
      answer: "Ans : Yes. The first task of our team is to sign an NDA to maintain the app's security and privacy. You can trust us that your iOS app development ideas will be completely safe. So, Get the desirable app with our top iOS app development company.",
    },
    {
      question: "How long does it take to create a website?",
      answer: "The timeline depends on the complexity of the project, but typically ranges from 4 to 12 weeks.",
    },
    {
      question: "Can I update my website after it's launched?",
      answer: "Yes, we provide user-friendly CMS solutions or ongoing maintenance services for updates.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h1 className="faq-title fw-bold">Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />} 
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

// import React from "react";
// import "./FaqAndConsultation.css";

// const FaqAndConsultation = () => {
//   return (
//     <div className="faq-consultation">
//       {/* FAQ Section */}
//       <section className="faq-section">
//         <h2>Frequently asked questions</h2>
//         <p>Here are some common questions about this service.</p>
//         <ul className="faq-list">
//           <li>
//             <span>What is Cloud Computing in Business?</span>
//             <button>+</button>
//           </li>
//           <li>
//             <span>Is Using the Cloud Safe?</span>
//             <button>+</button>
//           </li>
//           <li>
//             <span>Is Cloud Reliability a Concern?</span>
//             <button>+</button>
//           </li>
//           <li>
//             <span>Do You Need Internet to Access the Cloud?</span>
//             <button>+</button>
//           </li>
//         </ul>
//       </section>

//       {/* Consultation Section */}
//       <section className="consultation-section">
//         <div className="consultation-box">
//           <h3>Get Free Consultation Now!.</h3>
//           <p>Let's create a powerful website that grows with your business</p>
//           <button className="consult-btn">Consult Now →</button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FaqAndConsultation;

import React, { useState } from "react";
import "./FaqAndConsultation.css";

const FaqAndConsultation = ({faqs}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null); // Track which FAQ is open

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index); // Toggle between open and closed
  };



  return (
    <div className="faq-consultation">
      {/* FAQ Section */}
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

      {/* Consultation Section */}
      <section className="consultation-section">
        <div className="consultation-box">
          <h3>Get Free Consultation Now!.</h3>
          <p>Let's create a powerful website that grows with your business</p>
          <button className="consult-btn">Consult Now →</button>
        </div>
      </section>
    </div>
  );
};

export default FaqAndConsultation;

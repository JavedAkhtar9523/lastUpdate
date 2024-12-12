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

const FaqAndConsultation = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Cloud Computing in Business?",
      answer:
        "Cloud computing in business involves delivering computing services like servers, storage, and applications over the internet.",
    },
    {
      question: "Is Using the Cloud Safe?",
      answer:
        "Yes, cloud providers invest heavily in security, but businesses must also implement their own security measures.",
    },
    {
      question: "Is Cloud Reliability a Concern?",
      answer:
        "Cloud reliability depends on the provider. Most reputable providers offer high availability and disaster recovery options.",
    },
    {
      question: "Do You Need Internet to Access the Cloud?",
      answer:
        "Yes, an internet connection is typically required to access cloud services.",
    },
  ];

  return (
    <div className="faq-consultationn">
      {/* FAQ Section */}
      <section className="faq-sectionn">
        <h2>Frequently asked questions</h2>
        <p>Here are some common questions about this service.</p>
        <ul className="faq-list">
          {faqs.map((faq, index) => (
            <li key={index}>
              <div className="faq-questionn" onClick={() => toggleFaq(index)}>
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
      <section className="consultationn-section">
        <div className="consultationn-box">
          <h3>Get Free Consultation Now!.</h3>
          <p>Let's create a powerful website that grows with your business</p>
          <button className="consult-btn">Consult Now →</button>
        </div>
      </section>
    </div>
  );
};

export default FaqAndConsultation;

// import React, { useRef } from "react";
// import Homeimg from "../../Images/Homeimg.jpg";
// import ImageCarousel from "./ImageCarousel";
// // import "./HomeUpdated.css";

// const HeroSection = ({ mousePosition }) => {
//   const contentRef = useRef(null);

//   const contentItems = [
//     "AI-powered chatbots automate customer interactions, providing instant responses and support.",
//     "Tools monitor brand reputation by analyzing user sentiments and feedback across social platforms.",
//     "AI analyzes engagement patterns to determine the best times to post content for maximum reach and interaction.",
//     "Personalized content feeds based on user preferences and behavior, enhancing user engagement.",
//   ];
//   return (
//     <>
//       <section className="hero">
//         <div className="hero-overlay"></div>
//         <div
//           className="hero-background"
//           style={{
//             transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
//           }}
//         ></div>

//         <div className="hero-content">
//           <div className="animated-text">
//             <h2 className="pre-title">Welcome to the Future</h2>
//             <h1 className="main-title">
//               Embracing The Future Of Technology
//               {/* <span className="text-accent">.</span> */}
//               Innovating For A<span className="text-accent"></span>
//               <span className="text-accent">Better Tomorrow</span>
//             </h1>
//             <p className="subtitle">
//               Join us on a journey towards innovation and cutting-edge
//               technology. Together, we'll shape the future and create solutions
//               that matter.
//             </p>

//             <div className="cta-container">
//               <button className="primary-btn">
//                 Explore Technologies
//                 <span className="btn-shine"></span>
//               </button>
//             </div>
//           </div>

//           <div className="floating-cards">
//             <div className="card card-1">
//               <div className="card-icon">🚀</div>
//               <h3>Innovation</h3>
//               <p>Pushing boundaries</p>
//             </div>
//             <div className="card card-2">
//               <div className="card-icon">💡</div>
//               <h3>Creativity</h3>
//               <p>Unique solutions</p>
//             </div>
//             <div className="card card-3">
//               <div className="card-icon">⚡</div>
//               <h3>Performance</h3>
//               <p>Lightning fast</p>
//             </div>
//           </div>
//         </div>

//         <div className="scroll-indicator">
//           <div className="mouse">
//             <div className="wheel"></div>
//           </div>
//           <div className="scroll-text">Scroll to Explore</div>
//         </div>
//       </section>
//       <section className="features-section">
//         <h2 className="section-title">Unlock The Power</h2>
//         <p className="section-description">
//           <b>AMBISPINE TECHNOLOGIES </b> will provide you vibrant community to
//           celebrate diversity, creativity and connection.
//         </p>
//         <div className="feature-image">
//           <img src={Homeimg} alt="Feature" />
//         </div>
//       </section>

//       <section ref={contentRef} className="ai-features-section">
//         <h2 className="section-title">AI-Powered Solutions</h2>
//         <div className="features-grid">
//           {contentItems.map((item, index) => (
//             <div key={index} className="feature-card animate-on-scroll">
//               <p>{item}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="network-section">
//         <h2 className="section-title">
//           Spread Your Wings, Expand Your Network
//         </h2>
//         <p className="section-description">
//           Expand your reach and influence. Grow your connections, increase your
//           opportunities, and access to resources. Make a bond with new
//           possibilities and horizons.
//         </p>
//         <ImageCarousel />
//       </section>
//     </>
//   );
// };

// export default HeroSection;

import React, { useRef, useEffect, useState } from "react";
import Homeimg from "../../Images/Homeimg.jpg";
import ImageCarousel from "./ImageCarousel";
import { Link } from "react-router-dom";
import AIPowerSolution from "./AIPowerSolution";

const HeroSection = ({ mousePosition }) => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const contentRef = useRef(null);

  // const contentItems = [
  //   "AI-powered chatbots automate customer interactions, providing instant responses and support.",
  //   "Tools monitor brand reputation by analyzing user sentiments and feedback across social platforms.",
  //   "AI analyzes engagement patterns to determine the best times to post content for maximum reach and interaction.",
  //   "Personalized content feeds based on user preferences and behavior, enhancing user engagement.",
  // ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => new Set([...prev, cardIndex]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    const cards = document.querySelectorAll(".feature-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div
          className="hero-background"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        ></div>

        <div className="hero-content_1">
          <div className="hero-left">
            <div className="badge">Welcome to the Future</div>

            <h1 className="hero-title">
              Embracing The Future Of
              <span className="gradient-text"> Technology</span>
            </h1>

            <p className="hero-description">
              Join us on a journey towards innovation and cutting-edge
              technology. Together, we'll shape the future and create solutions
              that matter.
            </p>

            <div className="cta-container">
              <button className="primary-btn">
                <Link
                  to="/services/web-app-development"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Explore Technologies
                </Link>
                <span className="btn-shine"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="scroll-text">
            <Link
              to="/platform"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Scroll to Explore
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Unlock The Power</h2>
        <p className="section-description">
          <b>AMBISPINE TECHNOLOGIES </b> will provide you vibrant community to
          celebrate diversity, creativity and connection.
        </p>
        <div className="feature-image">
          <img src={Homeimg} alt="Feature" />
        </div>
      </section>

      {/* <section ref={contentRef} className="ai-features-section">
        <h2 className="section-title">AI-Powered Solutions</h2>
        <div className="features-grid">
          {contentItems.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-card ${
                visibleCards.has(index) ? "visible" : ""
              }`}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section> */}
      <h2 className="section-title">AI-Powered Solutions</h2>
      <AIPowerSolution />

      <section className="network-section">
        <h2 className="section-title">
          Spread Your Wings, Expand Your Network
        </h2>
        <p className="section-description">
          Expand your reach and influence. Grow your connections, increase your
          opportunities, and access to resources. Make a bond with new
          possibilities and horizons.
        </p>
        <ImageCarousel />
      </section>
    </>
  );
};

export default HeroSection;

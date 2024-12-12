// import React from "react";
// import "./mobileapp.css";

// // Import images
// import heroBackground from "../../assets/mobile-app-development.jpg";
// import expertiseImage from "../../assets/img-2.jpg";
// import servicesImage from "../../assets/img-3.png";

// const MobileAppDevelopmentPage = () => {
//   return (
//     <div className="mobile-app-page">
//       {/* Hero Section */}
//       <section
//         className="hero"
//         style={{ backgroundImage: `url(${heroBackground})` }}
//       >
//         <div className="hero-content">
//           <h1>Mobile App Development</h1>
//           <p>
//             Convert your idea into a live application with Think web hub app
//             development services
//           </p>
//         </div>
//       </section>

//       {/* Expertise Section */}
//       <section className="section expertise">
//         <div className="section-grid">
//           <div className="section-text">
//             <h2>Our Cutting-Edge Expertise</h2>
//             <p>
//               In the dynamic digital landscape, we empower businesses with
//               innovative technologies that drive intelligence, data-driven
//               insights, and seamless interconnectivity. Our approach transforms
//               your digital strategy, delivering unparalleled business value
//               across every touchpoint.
//             </p>
//             <ul className="expertise-highlights">
//               <li>🚀 Innovative Solutions</li>
//               <li>📊 Data-Driven Strategies</li>
//               <li>🔗 Seamless Integration</li>
//             </ul>
//           </div>
//           <div className="section-image">
//             <div className="image-wrapper">
//               <img
//                 src={expertiseImage}
//                 alt="Innovative Mobile Solutions"
//                 className="expertise-image"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="section services">
//         <div className="section-grid reverse">
//           <div className="section-text">
//             <h2>Transforming Dreams into Digital Reality</h2>
//             <p>
//               We provide comprehensive mobile app development services that go
//               beyond mere coding. Our holistic approach ensures your app not
//               only functions flawlessly but also stands out in the competitive
//               digital marketplace.
//             </p>
//             <div className="services-list">
//               <div className="service-item">
//                 <span className="icon">🛠️</span>
//                 <h4>Custom Development</h4>
//                 <p>Tailored solutions that match your unique business needs</p>
//               </div>
//               <div className="service-item">
//                 <span className="icon">🔄</span>
//                 <h4>Ongoing Support</h4>
//                 <p>Continuous maintenance and performance optimization</p>
//               </div>
//               <div className="service-item">
//                 <span className="icon">📣</span>
//                 <h4>Marketing Boost</h4>
//                 <p>Strategic services to enhance app visibility and growth</p>
//               </div>
//             </div>
//           </div>
//           <div className="section-image">
//             <img
//               src={servicesImage}
//               alt="Comprehensive App Services"
//               className="services-image"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Consultation Section */}
//       <section className="section consultation">
//         <div className="consultation-container">
//           <div className="consultation-content">
//             <h3>Get free consultation now</h3>
//             <p>
//               Let's discuss your project and discover how we can turn your
//               innovative concept into a successful mobile application.
//             </p>
//             <button className="consultation-btn">
//               Free Consultation <span className="arrow">→</span>
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MobileAppDevelopmentPage;

import React from "react";
import "./mobileapp.css";

// Import images
// import heroBackground from "../../assets/mobile-app-development.jpg";
import expertiseImage from "../../assets/img-2.jpg";
import servicesImage from "../../assets/img-3.png";

const MobileAppDevelopmentPage = () => {
  return (
    <div className="mobile-app-page">
      {/* <section
        className="hero"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="hero-content">
          <h1>Mobile App Development</h1>
          <p>
            Transform Your Digital Vision into Powerful Mobile Solutions with
            Think Web Hub
          </p>
        </div>
      </section> */}
      {/* Hero Section */}
      <section className="hero_mobile">
        <div className="hero-overlay">
          <h1>Mobile App Development</h1>
          <p>
            Convert your ideas into a live application with Thinkweb Hub app
            development services
          </p>
        </div>
      </section>

      <section className="section expertise">
        <div className="section-grid">
          <div className="section-text">
            <h2>Our Cutting-Edge Expertise</h2>
            <p>
              In today's digital landscape, we empower businesses with
              innovative technologies that drive intelligent, data-driven
              insights and seamless interconnectivity. Our strategic approach
              transforms your digital strategy, delivering unparalleled business
              value across every touchpoint.
            </p>
            <ul className="expertise-highlights">
              <li>🚀 Innovative Solutions</li>
              <li>📊 Data-Driven Strategies</li>
              <li>🔗 Seamless Integration</li>
            </ul>
          </div>
          <div className="section-image">
            <img
              src={expertiseImage}
              alt="Innovative Mobile Solutions"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="section-grid reverse">
          <div className="section-text">
            <h2>Transforming Dreams into Digital Reality</h2>
            <p>
              We provide comprehensive mobile app development services that
              transcend traditional coding. Our holistic approach ensures your
              app not only functions flawlessly but stands out in the
              competitive digital marketplace.
            </p>
            <div className="services-list">
              <div className="service-item">
                <span className="icon">🛠️</span>
                <h4>Custom Development</h4>
                <p>
                  Tailored solutions precisely matching your unique business
                  needs
                </p>
              </div>
              <div className="service-item">
                <span className="icon">🔄</span>
                <h4>Ongoing Support</h4>
                <p>
                  Continuous maintenance and performance optimization strategies
                </p>
              </div>
              <div className="service-item">
                <span className="icon">📣</span>
                <h4>Marketing Boost</h4>
                <p>
                  Strategic services to amplify app visibility and accelerate
                  growth
                </p>
              </div>
            </div>
          </div>
          <div className="section-image">
            <img
              src={servicesImage}
              alt="Comprehensive App Services"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* <section className="section consultation">
        <div className="consultation-container">
          <h3>Get Free Consultation Now</h3>
          <p>
            Let's discuss your innovative project and discover how we can
            transform your concept into a successful, market-leading mobile
            application.
          </p>
          <button className="consultation-btn">
            Free Consultation <span className="arrow">→</span>
          </button>
        </div>
      </section> */}
      {/* Consultation Section */}
      <section className="consultationa-section">
        <div className="consultation-box">
          <h3>Get Free Consultation Now!.</h3>
          <p>Let's create a powerful website that grows with your business</p>
          <button className="consult-btn">Consult Now →</button>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopmentPage;

// import React from "react";
// import "./mobileapp.css";

// // Import images
// import heroBackground from "../../assets/mobile-app-development.jpg";
// import expertiseImage from "../../assets/img-2.jpg";
// import servicesImage from "../../assets/img-3.png";

// const MobileAppDevelopmentPage = () => {
//   return (
//     <div className="mobile-app-page">
//       <section className="hero">
//         <div className="hero-content">
//           <h1>Transforming Ideas into Digital Experiences</h1>
//           <p>
//             Craft cutting-edge mobile applications that redefine user
//             interaction and drive business innovation with our expert
//             development solutions
//           </p>
//           <button className="consultation-btn">
//             Start Your Journey <span className="arrow">→</span>
//           </button>
//         </div>
//       </section>

//       <section className="section expertise">
//         <div className="section-grid">
//           <div className="section-text">
//             <h2>Innovative Mobile Expertise</h2>
//             <p>
//               We blend technological innovation with strategic insight to create
//               mobile solutions that transcend traditional boundaries. Our
//               approach integrates advanced technologies, user-centric design,
//               and data-driven strategies to deliver exceptional digital
//               experiences.
//             </p>
//             <ul className="expertise-highlights">
//               <li>🚀 Innovative Design</li>
//               <li>📊 Advanced Analytics</li>
//               <li>🔗 Seamless Integration</li>
//             </ul>
//           </div>
//           <div className="section-image">
//             <img
//               src={expertiseImage}
//               alt="Mobile Innovation Expertise"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </section>

//       <section className="section services">
//         <div className="section-grid reverse">
//           <div className="section-text">
//             <h2>Comprehensive Development Solutions</h2>
//             <p>
//               Our holistic mobile app development approach encompasses
//               end-to-end services designed to transform your digital vision into
//               market-leading applications that drive user engagement and
//               business growth.
//             </p>
//             <div className="services-list">
//               <div className="service-item">
//                 <span className="icon">🛠️</span>
//                 <h4>Custom Development</h4>
//                 <p>
//                   Tailored mobile solutions engineered to your unique business
//                   requirements
//                 </p>
//               </div>
//               <div className="service-item">
//                 <span className="icon">🔄</span>
//                 <h4>Continuous Support</h4>
//                 <p>
//                   Ongoing maintenance and performance optimization strategies
//                 </p>
//               </div>
//               <div className="service-item">
//                 <span className="icon">📣</span>
//                 <h4>Growth Marketing</h4>
//                 <p>
//                   Strategic services to amplify app visibility and user
//                   acquisition
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="section-image">
//             <img
//               src={servicesImage}
//               alt="Mobile App Development Services"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </section>

//       <section className="section consultation">
//         <div className="consultation-container">
//           <h3>Ready to Innovate?</h3>
//           <p>
//             Let's collaborate and transform your groundbreaking mobile app
//             concept into a successful, market-disrupting digital solution.
//           </p>
//           <button className="consultation-btn">
//             Schedule Consultation <span className="arrow">→</span>
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MobileAppDevelopmentPage;

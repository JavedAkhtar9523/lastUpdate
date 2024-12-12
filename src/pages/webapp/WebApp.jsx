// import React, { useState } from "react";
// import { PlusIcon, MinusIcon, ChevronRightIcon } from "lucide-react";
// import "./webapp.css";

// // Import images
// import heroBackground from "../../assets/hero.jpg";
// import coverImage from "../../assets/img-2.png";
// import DevelopersTools from "../DevelopersTools/DevelopersTools";

// const WebDevelopmentPage = () => {
//   const [activeSection, setActiveSection] = useState(null);

//   const services = [
//     {
//       title: "Custom Website Development",
//       description:
//         "We provide tailored web solutions that precisely match your business needs, ensuring a unique online presence that stands out from the competition.",
//     },
//     {
//       title: "WordPress Development",
//       description:
//         "Leverage the power of WordPress with our expert development services, creating robust, scalable, and user-friendly websites.",
//     },
//     {
//       title: "CMS or SaaS Development",
//       description:
//         "Build powerful content management systems and software-as-a-service platforms that streamline your business operations.",
//     },
//     {
//       title: "Web App Development",
//       description:
//         "Transform your business ideas into interactive, responsive web applications that deliver exceptional user experiences.",
//     },
//     {
//       title: "ERP Development",
//       description:
//         "Develop comprehensive Enterprise Resource Planning solutions to integrate and optimize your business processes.",
//     },
//   ];

//   const developmentStages = [
//     {
//       title: "Customized Development",
//       content:
//         "Our experienced developers create powerful, customized CMS solutions that empower users to manage their websites effortlessly.",
//     },
//     {
//       title: "Latest Technology",
//       content:
//         "We employ cutting-edge technologies and integrated strategies to develop user-friendly website solutions using modern frameworks and API sets.",
//     },
//     {
//       title: "Delivery On Time",
//       content:
//         "With our vast domain expertise, we deliver high-quality products on schedule, helping your business stand out from the competition.",
//     },
//     {
//       title: "1 Year Maintenance",
//       content:
//         "We provide one year of free maintenance with our software creation, ensuring your business runs smoothly without any hassles.",
//     },
//   ];

//   const toggleSection = (index) => {
//     setActiveSection(activeSection === index ? null : index);
//   };

//   return (
//     <div className="web-development-container">
//       {/* Hero Section */}
//       <section
//         className="hero-section"
//         style={{ backgroundImage: `url(${heroBackground})` }}
//       >
//         <div className="hero-content">
//           <h1>
//             Website Development
//             <br />
//             AmbiSpine
//           </h1>
//           <p>
//             Start Designs is an emerging web development company offering
//             comprehensive website development services. Our in-house team of
//             experienced and professional web developers uses innovative
//             technologies to build your business online.
//           </p>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="services-section">
//         <div className="services-header">
//           <h2>We Offer Website Development Services</h2>
//           <p>Comprehensive web solutions tailored to your business needs</p>
//         </div>

//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`service-card ${
//                 activeSection === index ? "active" : ""
//               }`}
//               onClick={() => toggleSection(index)}
//             >
//               <div className="service-header">
//                 <h3>{service.title}</h3>
//                 {activeSection === index ? (
//                   <MinusIcon size={24} className="toggle-icon" />
//                 ) : (
//                   <PlusIcon size={24} className="toggle-icon" />
//                 )}
//               </div>
//               {activeSection === index && (
//                 <p className="service-description">{service.description}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Development Stages */}
//       <section className="development-stages">
//         <h2>Our Development Process</h2>
//         <div className="stages-container">
//           {developmentStages.map((stage, index) => (
//             <div key={index} className="stage-card">
//               <div className="stage-icon">
//                 <ChevronRightIcon size={32} />
//               </div>
//               <div className="stage-content">
//                 <h3>{stage.title}</h3>
//                 <p>{stage.content}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <br />
//         <DevelopersTools/>
//       </section>

//       {/* Consultation Section */}
//       <section className="consultation-section">
//         <div className="consultation-content">
//           <div className="consultation-text">
//             <h3>Ready to Transform Your Web Presence?</h3>
//             <p>Let's create a powerful website that grows with your business</p>
//           </div>
//           <button className="consultation-button">
//             Get Free Consultation <ChevronRightIcon size={20} />
//           </button>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default WebDevelopmentPage;

import React, { useState } from "react";
import { PlusIcon, MinusIcon, ChevronRightIcon } from "lucide-react";
import "./webapp.css";

const WebDevelopmentPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const services = [
    {
      title: "Custom Website Development",
      description:
        "Crafting bespoke web solutions that transform your digital vision into a powerful online presence, tailored precisely to your business needs.",
      icon: "💻",
      color: "#3b82f6", // Soft blue
    },
    {
      title: "WordPress Development",
      description:
        "Harness the full potential of WordPress with our expert development services, creating robust, scalable, and user-friendly websites that stand out.",
      icon: "🌐",
      color: "#10b981", // Emerald green
    },
    {
      title: "CMS or SaaS Development",
      description:
        "Develop cutting-edge content management systems and software-as-a-service platforms that streamline your business operations and drive efficiency.",
      icon: "🚀",
      color: "#6366f1", // Indigo
    },
    {
      title: "Web App Development",
      description:
        "Transform innovative business ideas into interactive, responsive web applications that deliver exceptional user experiences and drive engagement.",
      icon: "📱",
      color: "#f43f5e", // Rose
    },
    {
      title: "Enterprise Solutions",
      description:
        "Create comprehensive Enterprise Resource Planning solutions that integrate seamlessly, optimize processes, and provide actionable business insights.",
      icon: "📊",
      color: "#8b5cf6", // Purple
    },
  ];

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="web-development-container">
      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Innovative Web Development</h1>
            <p style={{ color: "#eee" }}>
              Transforming digital landscapes with cutting-edge web solutions
              that elevate your business to new heights.
            </p>
            <button className="cta-button">
              Start Your Project <ChevronRightIcon size={20} />
            </button>
          </div>
        </div>
      </header>

      <section className="services-section">
        <div className="section-header">
          <h2>Our Web Development Services</h2>
          <p>
            Comprehensive digital solutions designed to drive your business
            forward
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${
                activeSection === index ? "expanded" : ""
              }`}
              style={{ borderTop: `4px solid ${service.color}` }}
            >
              <div
                className="service-header"
                onClick={() => toggleSection(index)}
              >
                <div className="service-title">
                  <span
                    className="service-icon"
                    style={{ color: service.color }}
                  >
                    {service.icon}
                  </span>
                  <h3>{service.title}</h3>
                </div>
                {activeSection === index ? (
                  <MinusIcon size={24} style={{ color: service.color }} />
                ) : (
                  <PlusIcon size={24} style={{ color: service.color }} />
                )}
              </div>

              {activeSection === index && (
                <div
                  className="service-description"
                  style={{
                    display: "block", // Ensure description is visible
                    opacity: 1,
                    height: "auto",
                  }}
                >
                  <p>{service.description}</p>
                  <button
                    className="learn-more-btn"
                    style={{
                      backgroundColor: service.color,
                      borderRadius: "8px",
                    }}
                  >
                    Learn More
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="process-section">
        <h2>Our Development Process</h2>
        <div className="process-grid">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Strategy & Planning</h3>
              <p>
                In-depth consultation to understand your unique business
                requirements and goals.
              </p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Design & Prototype</h3>
              <p>
                Create intuitive, visually compelling designs that reflect your
                brand identity.
              </p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Development</h3>
              <p>
                Implement robust, scalable solutions using latest web
                technologies.
              </p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Launch & Support</h3>
              <p>
                Seamless deployment with ongoing maintenance and technical
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="consultation-section">
        <div className="consultation-content">
          <div className="consultation-text">
            <h3 style={{ color: "#ccc" }}>
              Ready to Elevate Your Digital Presence?
            </h3>
            <p style={{ color: "#ccc" }}>
              Let's collaborate and create a powerful web solution that drives
              your business forward.
            </p>
          </div>
          <button className="consultation-button">
            Book Free Consultation <ChevronRightIcon size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;

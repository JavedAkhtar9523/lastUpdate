import React from "react";
import HeroSection from "../../layouts/HeroSection";
import "./EnterpriseSolutions.css";
import {
  FaCloud,
  FaCode,
  FaDatabase,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";
import EnImage from "../../assets/enterprise-1.jpg";
import EnImage1 from "../../assets/enterprise.png";
import EnImage2 from "../../assets/global.jpeg";
import EnImage3 from "../../assets/financial.jpg";

const EnterpriseSolutions = () => (
  <div>
    <HeroSection
      icon="🏢"
      bgImage={EnImage}
      title="Enterprise Solutions"
      subtitle="Scalable and robust enterprise-level applications built with cutting-edge technology."
    />
    <div className="enterprise-content">
      <section className="enterprise-solutions-section">
        <div className="text-content">
          <h2>What Are Enterprise Solutions?</h2>
          <p>
            Enterprise solutions are large-scale software applications designed
            to help businesses manage and streamline complex processes across
            various departments. These solutions are tailored to handle the
            challenges of modern organizations, including data management,
            process automation, and collaboration.
          </p>
        </div>
        <img
          src={EnImage1}
          alt="Enterprise Solutions"
          className="enterprise-image"
        />
      </section>

      <section className="enterprise-solutions-section-2">
        <h2 className="section-heading-2">
          Why Choose Our Enterprise Solutions?
        </h2>
        <p>
          At <strong>AmbiSpine Technologies</strong>, we specialize in
          developing scalable and robust enterprise solutions that align with
          your organizational goals. Our team has deep expertise in creating
          systems that integrate seamlessly with your existing processes while
          ensuring maximum efficiency.
        </p>

        <h3 className="card-heading">Key Features</h3>
        <div className="process-cards">
          <div className="process-card">
            <strong>Scalability:</strong> Built to grow alongside your business.
          </div>
          <div className="process-card">
            <strong>Integration:</strong> Seamless compatibility with existing
            software and third-party tools.
          </div>
          <div className="process-card">
            <strong>Customization:</strong> Tailored to meet the unique needs of
            your organization.
          </div>
          <div className="process-card">
            <strong>Security:</strong> Robust measures to protect your critical
            business data.
          </div>
        </div>

        <h3 className="card-heading">Our Process</h3>
        <div className="process-cards">
          <div className="process-card">
            <strong>Consultation:</strong> Understand your business needs and
            goals.
          </div>
          <div className="process-card">
            <strong>Design:</strong> Develop a scalable architecture tailored to
            your requirements.
          </div>
          <div className="process-card">
            <strong>Development:</strong> Build and test the solution using
            agile methodologies.
          </div>
          <div className="process-card">
            <strong>Deployment:</strong> Seamlessly integrate the solution into
            your operations.
          </div>
          <div className="process-card">
            <strong>Support:</strong> Provide continuous support and updates to
            ensure optimal performance.
          </div>
        </div>

        <h3 className="card-heading">Technologies We Use</h3>
        <ul className="tech-list">
          <li>
            <FaCloud className="icon" />
            Cloud Platforms: AWS, Azure, Google Cloud
          </li>
          <li>
            <FaCode className="icon" />
            Programming Languages: Java, .NET, Python
          </li>
          <li>
            <FaDatabase className="icon" />
            Databases: SQL Server, MongoDB, Oracle
          </li>
          <li>
            <FaTools className="icon" />
            DevOps Tools: Jenkins, Kubernetes, Docker
          </li>
          <li>
            <FaShieldAlt className="icon" />
            Security: Advanced encryption, firewalls, and monitoring tools
          </li>
        </ul>
      </section>
      <br />
      <section class="case-studies-section">
        <h3>Case Studies</h3>

        <div class="case-study">
          <img
            src={EnImage2}
            alt="Streamlining Operations"
            class="case-study-image"
          />
          <p>
            <strong>
              Example 1: Streamlining Operations for a Global Manufacturer
            </strong>
            <br />
            We developed an integrated enterprise resource planning (ERP) system
            for a leading manufacturer, enabling real-time data tracking across
            production, inventory, and sales. This solution reduced operational
            costs by 25% and improved overall efficiency.
          </p>
        </div>

        <div class="case-study">
          <img
            src={EnImage3}
            alt="Enhancing Collaboration"
            class="case-study-image"
          />
          <p>
            <strong>
              Example 2: Enhancing Collaboration for a Financial Institution
            </strong>
            <br />
            Our team developed a comprehensive collaboration suite for a major
            financial institution, helping them streamline communication, manage
            projects, and improve team coordination across multiple locations.
            This system significantly reduced communication overhead and boosted
            productivity by 30%.
          </p>
        </div>

        <h3>Why Partner with Us?</h3>
        <p>
          Partnering with <strong>AmbiSpine Technologies</strong> means more
          than just building a software solution. It means gaining a trusted
          ally dedicated to your success. We are committed to delivering
          solutions that empower your organization to reach new heights and stay
          ahead of the competition.
        </p>

        <h3>Next Steps</h3>
        <p>
          Ready to transform your enterprise with a customized solution? Let's
          work together to create a system that elevates your business to the
          next level. Our team is here to understand your needs, design a
          solution, and deploy it efficiently.
        </p>

        <button class="cta-button">Get in Touch</button>
      </section>
    </div>
  </div>
);

export default EnterpriseSolutions;

// import React from "react";
// import "./EnterpriseSolutions.css";

// // Import images (ensure these are in your assets folder)
// import enterpriseHeroImage from "../assets/enterprise-hero.jpg";
// import globalManufacturerImage from "../assets/global-manufacturer.jpg";
// import financialInstitutionImage from "../assets/financial-institution.jpg";

// const EnterpriseSolutions = () => {
//   const technologies = [
//     {
//       icon: "☁️",
//       title: "Cloud Platforms",
//       description: "AWS, Azure, Google Cloud",
//     },
//     {
//       icon: "💻",
//       title: "Programming Languages",
//       description: "Java, .NET, Python",
//     },
//     {
//       icon: "📊",
//       title: "Databases",
//       description: "SQL Server, MongoDB, Oracle",
//     },
//     {
//       icon: "🛠️",
//       title: "DevOps Tools",
//       description: "Jenkins, Kubernetes, Docker",
//     },
//     {
//       icon: "🔒",
//       title: "Security",
//       description: "Advanced encryption, firewalls",
//     },
//   ];

//   const caseStudies = [
//     {
//       image: globalManufacturerImage,
//       title: "Streamlining Operations",
//       description:
//         "Developed an integrated ERP system reducing operational costs by 25%.",
//       impact: "Improved efficiency across production, inventory, and sales",
//     },
//     {
//       image: financialInstitutionImage,
//       title: "Enhancing Collaboration",
//       description:
//         "Created a comprehensive collaboration suite boosting productivity by 30%.",
//       impact: "Streamlined communication across multiple locations",
//     },
//   ];

//   return (
//     <div className="enterprise-solutions">
//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-content">
//           <h1>Enterprise Solutions</h1>
//           <p>
//             Scalable and robust enterprise-level applications built with
//             cutting-edge technology
//           </p>
//         </div>
//         <img
//           src={enterpriseHeroImage}
//           alt="Enterprise Solutions"
//           className="hero-image"
//         />
//       </section>

//       {/* About Enterprise Solutions */}
//       <section className="about-section">
//         <div className="about-content">
//           <h2>What Are Enterprise Solutions?</h2>
//           <p>
//             Enterprise solutions are large-scale software applications designed
//             to help businesses manage and streamline complex processes across
//             various departments. These solutions are tailored to handle the
//             challenges of modern organizations, including data management,
//             process automation, and collaboration.
//           </p>
//         </div>
//       </section>

//       {/* Technologies */}
//       <section className="technologies-section">
//         <h2>Technologies We Use</h2>
//         <div className="technologies-grid">
//           {technologies.map((tech, index) => (
//             <div key={index} className="technology-card">
//               <div className="technology-icon">{tech.icon}</div>
//               <h3>{tech.title}</h3>
//               <p>{tech.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Case Studies */}
//       <section className="case-studies-section">
//         <h2>Success Stories</h2>
//         <div className="case-studies-grid">
//           {caseStudies.map((study, index) => (
//             <div key={index} className="case-study-card">
//               <img src={study.image} alt={study.title} />
//               <div className="case-study-content">
//                 <h3>{study.title}</h3>
//                 <p>{study.description}</p>
//                 <div className="case-study-impact">
//                   <p>Impact: {study.impact}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="cta-section">
//         <div className="cta-content">
//           <h2>Ready to Transform Your Enterprise?</h2>
//           <p>
//             Let's work together to create a customized solution that elevates
//             your business to the next level.
//           </p>
//           <button className="cta-button">Get Started</button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default EnterpriseSolutions;

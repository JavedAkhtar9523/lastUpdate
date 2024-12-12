import React, { Fragment } from "react";
import "./CloudMigration.css"
import { FaArrowDown } from "react-icons/fa";
import cloudServicesImage from "../../assets/CloudSolution4.png";
import { FaApple, FaClipboardCheck, FaPaintBrush, FaCode, FaBug,
    FaUserTie, FaUsers, FaRegClock, FaDollarSign
} from 'react-icons/fa';
import FAQ from "../card/Faq";
import StayCards from "./StayCards";
import OurCustomersSection from "../card/OurCustomersSection";


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


  
      

  const cardsData = [
    {
      title: "Expert Team",
      description:
        "Our seasoned iPhone app development team boasts extensive experience, delivering high-quality solutions that exceed expectations.",
      icon: <FaUserTie size={30} color="#007bff" />, // Icon representing expertise
    },
    {
      title: "Customer-Centric Approach",
      description:
        "We prioritize your goals, objectives, and unique requirements, tailoring our services to meet your needs and ensure your success.",
      icon: <FaUsers size={30} color="#28a745" />, // Icon representing customer focus
    },
    {
      title: "Cost-Effective",
      description:
        "We optimize resources and streamline processes to deliver high-quality solutions within your budget.",
      icon: <FaDollarSign size={30} color="#dc3545" />, // Icon representing cost-effectiveness
    },
  ];

const  CloudMigration = () => {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".section-grid");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    
  return (
    <Fragment>

      <div className="website-container" id="cloude-heros">
        <div className="website-hero">
          <h1 className="website-title">Cloud Solution and Data Migration</h1>
          <p className="website-subtitle">
          Think Web Hub.Start Designs is an emerging web development company
          that offers website development services. .
          </p>
          <div className="website-actions-down text-white" onClick={handleScrollDown}>
            <FaArrowDown />
          </div>
        </div>
      </div>
     
<section className="cloud-migrations-container d-flex justify-content-center align-items-center">
  <div className="section-grid">
    <div className="section-text">
    <h2>
    Cloud Solution and Data Migration:  “Transform Your Digital Landscape”
    </h2>
      <p>
        Empower your business with seamless cloud technologies and efficient data migration strategies.
      </p>
    </div>
    <div className="section-image">
      <img src={cloudServicesImage} alt="What We Do" className="image" />
    </div>
  </div>
</section>

     
{/* <section className="img-section">
    <div className="img-section-container">
        <h2>Unlock the Power of the Cloud</h2>
        <p className="">Explore our tailored cloud solutions and
        expert data migration service</p>
    </div>
</section> */}
<section className="ai-section">
    <div className="ai-section-container">
        <h2>Unlock the Power of the Cloud</h2>
        <p>Explore our tailored cloud solutions and expert data migration service</p>
    </div>
</section>


     

<section className="tool-section">
  <div className="tool-process">
  <h1 className="tool-title mb-5 text-white">
  We Use Leading Open-Source, On-Premise, & Cloud- Based Data Migration Tools
  </h1>
  <p>Our data migration experts have global, multi-industry experience
  executing business solutions using proven, digitally-gathered data methodologies, practices, and tools.</p>
  <div className="tool-cards-container">
    {cardsData.map((card, index) => (
      <div className="tool-card" key={index}>
        <div className="iconss">{card.icon}</div>
        <h5 className="mt-2 text-white fs-6 fw-bold" style={{textAlign:'left'}}>{card.title}</h5>
        <p className="text-light" style={{textAlign:'left',fontSize:'0.8rem'}}>{card.description}</p>
      </div>
    ))}
  </div>
  </div>
</section>

<section className="Stay-section">
  <div className="Stay-process">
  <h2 className="Stay-title fw-bold mb-1">
  Stay On Top With Our Cloud Migration Specifications
  </h2>
  <p>Our data migration experts have global, multi-industry experience
  executing business solutions using proven, digitally-gathered data methodologies, practices, and tools.</p>
  <div>
    <StayCards/>
  </div>
  </div>
</section>

<OurCustomersSection/>
     

<div className="faqs-section">
    <h1 className="fw-bold">FAQ's - Top Android App Development Compan</h1>
    <FAQ faqs={faqs}/>
</div>
    </Fragment>
  );
};

export default  CloudMigration;

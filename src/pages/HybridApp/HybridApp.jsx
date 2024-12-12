import React, { Fragment } from "react";
import "./hybridApp.css";
import { FaArrowDown,FaArrowRight } from "react-icons/fa";
import hybridImg from "../../assets/hybrid.jpg";
import { FaApple, FaClipboardCheck, FaPaintBrush, FaCode, FaBug,
    FaUserTie, FaUsers, FaDollarSign

 } from 'react-icons/fa';
 import { GiShakingHands } from "react-icons/gi";

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

const works = [
    {
      Icon: <FaApple size={30}  />, 
      title: "Custom iPhone App Development:",
      description: "We craft tailored iOS apps that align with your unique business goals and objectives.",
    },
    {
      Icon: <FaClipboardCheck size={30}  />,
      title: "App Consulting",
      description: "Our expert consultants help you define your app requirements, identify target audiences, and determine the best features and functionalities for your app.",
    },
    {
      Icon: <FaPaintBrush size={30} />,
      title: "App Design",
      description: "Our skilled designers create visually stunning and user-friendly app interfaces that reflect your brand and captivate your users.",
    },
    {
      Icon: <FaCode size={30}  />,
      title: "App Development",
      description: "Our experienced developers build robust, scalable, and secure iOS apps using the latest technologies and frameworks.",
    },
    {
      Icon: <FaBug size={30}  />, 
      title: "App Testing and Quality Assurance",
      description: "Our skilled designers create visually stunning and user-friendly app interfaces that reflect your brand and captivate your users.",
    },
  ];
      

  const cardsData = [
    {
      title: "Expert Team",
      description:
        "Our seasoned iPhone app development team boasts extensive experience, delivering high-quality solutions that exceed expectations.",
      icon: <FaUsers size={30} color="#fff" />, 
    },
    {
      title: "Customer-Centric Approach",
      description:
        "We prioritize your goals, objectives, and unique requirements, tailoring our services to meet your needs and ensure your success.",
      icon: <FaUserTie size={30} color="#fff" />, 
    },
    {
      title: "Agile Methodology",
      description:
        "Our flexible approach adapts to changing requirements, ensuring efficient, timely, and hassle-free project delivery.",
      icon: <GiShakingHands size={30} color="#fff" />, 
    },
    {
      title: "Cost-Effective",
      description:
        "We optimize resources and streamline processes to deliver high-quality solutions within your budget.",
      icon: <FaDollarSign size={30} color="#fff" />, 
    },
  ];

const HybridApp = () => {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    
  return (
    <Fragment>
      {/* Hero Section */}
      <div className="website-container" id="hybrid-hero">
        <div className="website-hero">
          <h1 className="website-title">Hybrid Mobile App Development</h1>
          <p className="website-subtitle">
            Revolutionize your business, enhance customer engagement, and drive
            growth. With Apple's stringent quality standards and loyal user
            base, investing in iOS app development can help you tap into a
            lucrative market and stay ahead of the competition.
          </p>
          <div className="website-actions-down" onClick={handleScrollDown}>
            <FaArrowDown />
          </div>
        </div>
      </div>

        {/* <section className="hero">
        <div className="hero-overlay">
          <h1>Hybrid Mobile App Develo</h1>
          <p>
          revolutionize your business, enhance customer engagement, and drive
          growth. With Apple's stringent quality standards and loyal user base, investing in iOS
           app development can help you tap into a lucrative market and stay ahead of the competition.
          </p>
        </div>
      </section>
      */}



      <section className="wrapper next-section">
       <div className="w-75">
       <h1 className="section-titles fw-bold">Explore Our Hybrid Application Development Potential</h1>
        <p className="section-subtitle fw-normal  ">
        Our developers are industry-leading experts in hybrid mobile apps development, bringing their expertise and years of experience
         to help you create powerful applications optimized for all screen sizes
        </p>
       </div>
      </section>

      <section className="section hybrid">
        <div className="section-grid">
          <div className="section-text">
            <h2>Hybrid Mobile App Developmen</h2>
            <p>
              In today's digital landscape, we empower businesses with
              innovative technologies that drive intelligent, data-driven
              insights and seamless interconnectivity. Our strategic approach
              transforms your digital strategy, delivering unparalleled business
              value across every touchpoint.
            </p>
           
          </div>
          <div className="section-image">
            <img
              src={hybridImg}
              alt="Innovative Mobile Solutions"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="development-process-hybrid">
        <div className="w-75">
        <h1 className="section-title-0">Our comprehensive services include</h1>
  <p className="section-subtitles-0">
  Mobulous specializes in providing the best iOS app development services to clients. Our experts create feature-rich and custom iOS apps tailored to your specific business needs and requirements,
   ensuring leading-edge quality and user satisfaction.
  </p>
  <div>
    <div className="services-gallery-hybrid">
      {works.map((work, index) => (
        <div className="services-card-hybrid" key={index}>
          <div className="services-icon-hybrid">{work.Icon}</div>
          <div className="services-details-hybrid">
            <h4 className="fw-semibold-hybrid">{work.title}</h4>
            <p className="services-description-hybrid">{work.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
        </div>
</section>

<section className="hybrid-proces">
  <h1 className="section-title text-center">Why Choose Hybrid App Development?</h1>
  <p className="section-subtitles-1">
    Hybrid mobile app development is becoming increasingly popular for its various benefits such as:
  </p>
  <div>
    <div className="hybrid-cards-container">
      {cardsData.map((card, index) => (
        <div className="hybrid-cards" key={index}>
         <div className="hybrid-cards-icons" style={{ color: "#ffd700" }}>
  {card.icon}
</div>

          <h5 className="hybrid-cards-title">{card.title}</h5>
          <p className="hybrid-cards-d">{card.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


<div className="hire-developer-section">
  <div className="hire-developer-content">
    <h1 className="hire-developer-title">We believe in bringing the best
    to our customer</h1>
    <p className="hire-developer-text">
    From visualization & concept to support we
are a company with a benevolent attitude
toward our clients and we are friendliest Hybrid app Development Company you will come across!!
    </p>
    <div className="hire-developer-actions">
      <button className="hire-developer-button">Hire Hybrid App Developer <FaArrowRight/></button>
    </div>
  </div>
</div>

     

    </Fragment>
  );
};

export default HybridApp;

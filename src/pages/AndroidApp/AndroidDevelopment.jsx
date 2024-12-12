import React, { Fragment } from "react";
import "./android.css"
import { FaArrowDown } from "react-icons/fa";
import cloudServicesImage from "../../assets/cloud-services.jpg";
import androidImage from "../../assets/android.png";
import { FaApple, FaClipboardCheck, FaPaintBrush, FaCode, FaBug,
    FaUserTie, FaUsers, FaDollarSign
} from 'react-icons/fa';
import { GiShakingHands } from "react-icons/gi";
import FAQ from "../card/Faq";
import ProcessCard from "../card/ProcessCard";
import OurCustomersSection from "../card/OurCustomersSection";
import androidImage1 from "../../assets/samsung-android-15-verspaetet-sich.webp"
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
      Icon: <FaApple size={30} color="#000" />, 
      title: "Custom iPhone App Development:",
      description: "We craft tailored iOS apps that align with your unique business goals and objectives.",
    },
    {
      Icon: <FaClipboardCheck size={30} color="#28a745" />,
      title: "App Consulting",
      description: "Our expert consultants help you define your app requirements, identify target audiences, and determine the best features and functionalities for your app.",
    },
    {
      Icon: <FaPaintBrush size={30} color="#ff5722" />,
      title: "App Design",
      description: "Our skilled designers create visually stunning and user-friendly app interfaces that reflect your brand and captivate your users.",
    },
    {
      Icon: <FaCode size={30} color="#673ab7" />,
      title: "App Development",
      description: "Our experienced developers build robust, scalable, and secure iOS apps using the latest technologies and frameworks.",
    },
    {
      Icon: <FaBug size={30} color="#dc3545" />, 
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

const  AndroidDevelopment = () => {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    
  return (
    <Fragment>
      {/* Hero Section */}
      <div className="website-container" id="android-heros">
        <div className="website-hero">
          <h1 className="website-title">Android App Development Services</h1>
          <p className="website-subtitle">
          Technology helps things get better!! It helps things get smaller, faster, and easier much and much 
          better. Your android app has to be one that boosts the image of your company. It should have those features that your audience can use with ease. Android applications help in boosting 
          the revenue and gaining maximum growth. In this era of technology where mobile is a priority i
          </p>
          <div className="website-actions-down text-white" onClick={handleScrollDown}>
            <FaArrowDown />
          </div>
        </div>
      </div>

  
      <section className="our-customers-container wrapper next-section">
        <div className="section-grid">
        <div className="section-text">
        <h2 className="">We are your Hero for Android App Development Solutions.</h2>
          <p>
          place and each feature goes into multiple rounds of testing.
Our dedicated team works round the clock to provide a wide range of Android app development services under one roof. Our Android app development skills have helped our clients achieve their goals and succeed in their respective industries.

          </p>
        </div>
        <div className="section-image">
          <img src={androidImage1} alt="What We Do"/>
        </div>
        </div>
      </section>
     

      <section className="comprehensive-services wrapper">
       <div className="services-work">
       <h1 className="section-titles fw-bold">Our comprehensive services include</h1>
        <p className="section-subtitle fw-normal">
        Mobulous specializes in providing the best iOS app development services to clients. Our experts create feature-rich and custom iOS apps tailored to your specific business needs and
        requirements, ensuring leading-edge quality and user satisfaction.
        </p>
        <div className="services-gallery">
        {works.map((work, index) => (
        <div className="services-card" key={index}>
             <div className="">{work.Icon}</div>
          <div className="services-details">
            <h4 className="fw-semibold">{work.title}</h4>
            <p className="">{work.description}</p>
          </div>
        </div>
      ))}
        </div>
       </div>
      </section>

    <section className="development-process">
    <h1 className="section-title  text-white">Why Choose Us for Android App Development?</h1>
    <p className="section-subtitle text-white fw-normal">Android mobile app development is becoming increasingly popular for its various benefits such as:</p>
 <div>
  <ProcessCard cardsData={cardsData}/>
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

export default  AndroidDevelopment;

import React, { Fragment } from 'react'
import "./ContentService.css";
import { FaArrowDown } from "react-icons/fa";
import cloudServicesImage from "../../assets/content-1.jpg";
import contentwritingImage3 from "../../assets/content-3.jpg";
import contentwritingImage from "../../assets/content-writing.jpg";
import { FaApple, FaClipboardCheck, FaPaintBrush, FaCode, FaBug,
    FaUserTie, FaUsers, FaRegClock, FaDollarSign
} from 'react-icons/fa';
import { LuCheckCircle } from "react-icons/lu";
import FAQ from "../card/Faq";
import OurCustomersSection from '../card/OurCustomersSection';
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
  const cardData = [
    "Our seasoned iPhone app development team boasts extensive experience, delivering high-quality solutions that exceed expectations.",
    "We prioritize user experience and create intuitive app designs tailored to your target audience.",
    "With a focus on performance and scalability, we ensure your app stands out in the competitive market.",
    "Our team stays up-to-date with the latest iOS trends and technologies to deliver cutting-edge solutions.",
    "From concept to deployment, we work closely with you to bring your app idea to life.",
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
      title: "Agile Methodology",
      description:
        "Our flexible approach adapts to changing requirements, ensuring efficient, timely, and hassle-free project delivery.",
      icon: <FaRegClock size={30} color="#ffc107" />, // Icon representing adaptability and time efficiency
    },
    {
      title: "Cost-Effective",
      description:
        "We optimize resources and streamline processes to deliver high-quality solutions within your budget.",
      icon: <FaDollarSign size={30} color="#dc3545" />, // Icon representing cost-effectiveness
    },
  ];

const  ContentWritingService = () => {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    
  return (
    <Fragment>
      {/* Hero Section */}
      <div className="website-container" id="content-heros">
        <div className="website-hero">
          <h1 className="website-title">Content Writing Service</h1>
          <p className="website-subtitle">
          Technology helps things get better!! It helps things get smaller, faster, and easier much and much better. Your android app has to be one that boosts the image of your company. It should have those features that your audience can use with ease. Android applications help
          in boosting the revenue and gaining maximum growth. In this era of tec
          </p>
          <div className="website-actions-down text-white" onClick={handleScrollDown}>
            <FaArrowDown />
          </div>
        </div>
      </div>
      
      <section className="Content-writing-container next-section">
  <div className="section-grid">
    {/* Image Section */}
    {/* <div className="banner-image col-md-6 d-flex justify-content-center align-items-center">
  <img
    src={cloudServicesImage}
    alt="Content Writing Services Illustration"
    className="img-fluid sphere-shaped-image"
  />
</div> */}
<div className="section-image">
    <img
      src={cloudServicesImage}
      alt="Content Writing Services Illustration"
    />
</div>


{/* <div className="cube-container">
  <div className="cube">
    <div className="face front">
      <img src={cloudServicesImage} alt="Front Face" />
    </div>
    <div className="face back">
      <img src={cloudServicesImage} alt="Back Face" />
    </div>
    <div className="face top">
      <img src={cloudServicesImage} alt="Top Face" />
    </div>
    <div className="face bottom">
      <img src={cloudServicesImage} alt="Bottom Face" />
    </div>
    <div className="face left">
      <img src={cloudServicesImage} alt="Left Face" />
    </div>
    <div className="face right">
      <img src={cloudServicesImage} alt="Right Face" />
    </div>
  </div>
</div> */}

    {/* Text Section */}
    <div className="section-text">
      <h2>Content Writing Service</h2>
      <p>
        Technology helps things get better! It helps things get smaller,
        faster, and easier. Your Android app should boost your company’s
        image and offer features that your audience can easily use. Android
        applications play a key role in increasing revenue and achieving
        maximum growth.
      </p>
    </div>
  </div>
</section>


      <section className="blog-section">
  <div className="blog-container">
    <div className="blog-img">
      <img src={contentwritingImage} alt="Blog Image" />
    </div>
    <div className="blog-content">
      <div>
        <h3 className='fw-bold'>Blog Building</h3>
        <p>
          SEO is not about ranking for popular terms, it's all about being
          found everywhere, when it matters the most. If you choose us as
          partners, we will make sure that we take a full audit of your
          entire website, including keywords, content, and page structure as
          well.
        </p>
      </div>
      <div>
        <h3  className='fw-bold'>Articles and Books</h3>
        <p>
          SEO is not about ranking for popular terms, it's all about being
          found everywhere, when it matters the most. If you choose us as
          partners, we will make sure that we take a full audit of your
          entire website, including keywords, content, and page structure as
          well.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Our Effective Writing Section */}
<section className="effective-writing-section">
  <div className="content-wrapper">
    <h1 className="fw-bold">An Effective Writing Content</h1>
    <p className="content-description">
      Get SEO-friendly content for your website that is filled with the highest searched keywords of your niche, helping your website rank higher on Google. 
      SEO experts agree that high-quality content not only takes your website to the top of Google but also rewards websites that publish high-quality content frequently and regularly.
    </p>
  </div>
  <div className="img-blure">
    <img src={contentwritingImage3} alt="Blurred Background" />
    <div className="img-blure-content">
      <div className="img-blure-content-content">
        <div className="img-blure-content-card">
          {cardData.map((text, index) => (
            <div
              className="img-blure-cards"
              key={index}
              style={{ marginLeft: `${index * 15}px` }}
            >
              <LuCheckCircle />
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div className="img-blure-cards-right">
          <h4>Why AKS Websoft for Content Writing Services</h4>
          <p>
            Our seasoned iPhone app development team boasts extensive
            experience, delivering high-quality solutions that exceed
            expectations. We prioritize user experience, scalability, and
            innovation in all our solutions.
          </p>
        </div>
      </div>
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

export default   ContentWritingService;

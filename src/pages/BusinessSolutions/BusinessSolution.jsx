import React, { Fragment } from 'react'
import "./BusinessSolution.css"
import { FaArrowRight } from "react-icons/fa";
import cloudServicesImage from "../../assets/cloud-services.jpg";
import { TfiSoundcloud } from "react-icons/tfi";
import { PiHandCoins } from "react-icons/pi";
import { AiOutlineSolution } from "react-icons/ai";
import { ImArrowRight2 } from 'react-icons/im';
import CallToAction from '../card/CallToAction';
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
      title: "Cloud Solutions and Migrations",
      description: "Your Journey to the Cloud Made Simple.Leverage our expertise to migrate your business to the cloud with minimal disruption. We specialize in cloud architecture, deployment, and management.",
      Icon: TfiSoundcloud
    },
    {
      title: "Cybersecurity and Complian",
      description: "Secure Your Business, Protect Your Future.Defend your organization against evolving cyber threats. Our comprehensive security services ensure compliance while protecting sensitive data.",
     Icon:  PiHandCoins
    },
    {
      title: "IT Consulting and Strateg",
      description: "Your Journey to the Cloud Made Simple.Leverage our expertise to migrate your business to the cloud with minimal disruption. We specialize in cloud architecture, deployment, and management.",
      Icon: AiOutlineSolution
    },
  ];
const BusinessSolution = () => {
    return (
        <Fragment>
          {/* Hero Section */}
          {/* <div className="website-container">
            <div className="website-hero">
              <h1 className="website-title">
              Business Solution
            </h1>
              <p className="website-subtitle">
              Start Designs is an emerging web development company that offers website development services.
               Our in-house team and professional web developers uses new technologie
              </p>
            </div>
          </div> */}
          <section className="hero">
        <div className="hero-overlay">
          <h1>Business Solution</h1>
          <p>
          Start Designs is an emerging web development company that offers website development services.
           Our in-house team and professional web developers uses new technologies
          </p>
        </div>
      </section>

<section className="wrapper">
  <div className="section-grid ">
    <div className="section-text">
      <h2>Custom Software Development</h2>
      <p className="description">
      Our Custom Software Development services focus on creating applications uniquely designed for your business goals. Whether you need a web, mobile, or
       desktop application, we deliver solutions that integrate seamlessly into your operations.
      </p>
    </div>
      <div className="section-image">
        <img
          src={cloudServicesImage}
          alt="Custom Software Development"
        />
      </div>
  </div>

  <div className="section-grid ">
    {/* Data Analysis Section */}
    <div className="section-image">
        <img
          src={cloudServicesImage}
          alt="Data Analysis"
        />
    </div>
    <div className="section-text">
      <h2>Data Analysis</h2>
      <p className="description">
      Gain a competitive edge with data-driven insights. Our Data Analytics services enable businesses to uncover trends,
      optimize processes, and make informed decisions.
      </p>
    </div>
  </div>
</section>
    
    <section className="business-section">
      <h3>The Benfits of Our Business Continuity Solutions </h3>
      <p>
      Our customized E-Commerce website designing services provides you with
options to update your website content yourself, and to use other customized
features to add photo galleries, form builders, news managers to your E- Commerce website. We are amongst the few website designing companies in India
that provide except 
      </p>

      <p>
      onal, innovative and high quality custom E-Commerce website designs at affordable prices. Our advance on-line stock and inventory management system will allow you to have real time information about various categories of products at
       any given point of time.
      </p>

      <p>
      Our web designing services includes E-Commerce web design, website maintenance, web redesign, small Business web design, and database dynamic admin panel web sites. Our web designing services have provided assistance to several local, national a
      </p>
    </section>
   
    <section className="business-solutions-section">
      <h3 className='text-white fw-bold'>The Benefits of Our Business Continuity Solutions</h3>
      <div className="business-solutions-card-container">
        {cardsData.map((card, index) => (
         <div
         className="business-card"
         key={index}
         style={{
           marginTop: `${index * 60}px`, 
           marginLeft: `${index * 25}px`,
         }}
       >
         <h3 className="business-card-title fw-bold">{card.title}</h3>
         <div className="business-card-icon">
           <card.Icon size={40} color="#fff" />
         </div>
         <p className="business-card-description">{card.description}</p>
       </div>
       
        ))}
      </div>
    </section>

    
<CallToAction/>

        </Fragment>
      );
}

export default BusinessSolution
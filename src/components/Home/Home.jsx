import React, { useRef, useEffect, useState } from "react";
import Homeimg from "../../Images/Homeimg.jpg";
import ImageCarousel from "./ImageCarousel";
import ambiup from '../../Images/ambiup.mp4';
import product3 from '../../Images/product3.png'
import product4 from '../../Images/product4.png'
import product5 from '../../Images/product5.png'
import product6 from '../../Images/product6.png'
import product8 from '../../Images/product8.png'
import product9 from '../../Images/product9.png'
import unlockImg from '../../assets/working-laptop.avif';
import officediscussingImg from '../../assets/office-discussing.avif';
import accessImg  from '../../assets/accessImg.jpg';
import empowerImg from '../../assets/EmpowerYourself.jpeg';
import learnImg from '../../assets/learn.jpg';
import connectedImg from '../../assets/connect.avif';
import dasboard from '../../assets/dashboard.png';
import clouddata3 from '../../Images/clouddata3.jpg';
import cloudata2 from '../../Images/cloudata2.jpg';
import cloudata1 from '../../Images/cloudata1.jpg';

import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import FeatureCards from "./FeatureCards";

const HeroSection = ({ mousePosition }) => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const contentRef = useRef(null);

  const contentItems = [
    "AI-powered chatbots automate customer interactions, providing instant responses and support.",
    "Tools monitor brand reputation by analyzing user sentiments and feedback across social platforms.",
    "AI analyzes engagement patterns to determine the best times to post content for maximum reach and interaction.",
    "Personalized content feeds based on user preferences and behavior, enhancing user engagement.",
  ];
  const service_product=[
    {
      id: 1,
      name: "Mobile Solution",
      description: "transform your business with our innovative mobile solutions, Explore our services",
      link: "mobile-solution",
      img : product8,
    },
    {
      id: 2,
      name: "website Solution",
      description: "Enhance your online visiblity, drive more traffic. Check our services today!",
      link: "website-solution",
      img : product9,
    },
    {
      id: 3,
      name: "Business Solution",
      description: "Elevate your business with Our expert solutions & accelerate your business growth.",
      link: "business-solution",
      img : product3,
    },
    {
      id: 4,
      name: "Designing Solution",
      description: "Boost Online Engagement with Our Responsive Web Design Services. Transform your digital landscape and captivate your audience with our expert web designing solutions. Explore our services today!",
      link: "web-designe-solution",
      img : product4,
    }, 
    {
      id: 5,
      name: "Cloud Solution",
      description: "Accelerate Business Growth with Our Scalable Cloud Solutions. Streamline operations, secure data, and unlock efficiency with our cloud services. Discover how our cloud solutions can transform your business!",
      link: "cloud-solution",
      img : product5,
    },
    {
      id: 6,
      name: "Digital  Solution",
      description: "Maximize Online Visibility with Our Data-Driven Digital Marketing Strategies. Reach, engage, and convert your target audience with our expert digital marketing solutions. Boost your online presence now!",
      link: "digital-marketing-solution",
      img : product6,
    }

  ]

  const spreadsServices = [
    {
      src: accessImg,
      alt: "Image 1",
      text: "Implies that a stronger network can provide valuable support and tools highlights the potential for new experiences and possibilities",
      headText: "Access the resources",
    },
    {
      src:empowerImg,
      alt: "Image 2",
      text: "Emphasizes the importance of accessing valuable resources and support through a strong network and follow your passion with following your choices.",
      headText: "Empower your life",
    },
    {
      src: learnImg,
      alt: "Image 3",
      headText: "Learn new skills",
      text: "Expand your network, and soar to new heights! By spreading your wings and expanding your network, you can unlock your full potential and achieve your dreams!",
    },
    {
      src: connectedImg,
      alt: "Image 4",
      headText: "Connect, Capture And Share",
      text: "The art of connection is here connecting you to the world, one person at a time intentional networking and connection and it's potential impact, let's connect to the world.",
    },
  ];
  const clouddata = [
    {
      id: 1,
      content: "Embrace the booster of Cloud Computing",
      hoverContent2: "Ambispine Technologies' Cloud Services provide a secure, scalable, and reliable infrastructure for your business applications. Our cloud solutions enable you to reduce costs, increase agility, and improve collaboration.",
      src: cloudata1,
     
    },
    {
      id: 2,
      content: "Elevate Your Business with Cloud Expertise",
      hoverContent2: "Transform your business with Ambispine Technologies' Cloud Services. Our secure, scalable, and reliable infrastructure boosts agility, collaboration, and cost savings. Discover the power of cloud computing with us.",
      src: cloudata2,
    },
    {
      id: 3,
      content: "Elevate Your Business with Cloud Expertise",
      hoverContent2: "Transform your business with Ambispine Technologies' Cloud Services. Our secure, scalable, and reliable infrastructure boosts agility, collaboration, and cost savings. Discover the power of cloud computing with us.",
      src: clouddata3
    },
  ]


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
      <section className="home-hero" style={{padding:"0px"}} >

        <div className="home-video-container">
        <video autoPlay loop muted className="home-background-video">
            <source src={ambiup} type="video/mp4" ></source>
        </video>
        </div>
        <div className="home-hero-overlay">
        <div className="home-hero-content">
          <div className="home-hero-left">

            <h1 className="home-hero-title" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
              Embracing The Future OF <br /> Technology
            </h1>

            <p className="home-hero-description"  data-aos="fade-right" >
            Join us to discover the latest advancements in cloud. Computing artificial intelligence, and data analytics and be part of the transformation. 
            </p>

            <div className="home-cta-container">
              <button className="home-primary-btn">
                <Link
                  to="/services/web-app-development"
                  style={{ textDecoration: "none", color:"white" }}
                >
                  Explore Technologies <FaLongArrowAltRight className="home-explore_tech_icon"/>
                </Link>
              </button>
            </div>
          </div>
        </div>
        </div>
      </section>
      
      <div className="home-body-section">
      <section className="unlouck-container">
        <div className="text-center mx-auto unlouck-left">
        <h2 data-aos="zoom-in" className="unlouck-title">Maximize effeciency with intelligent  <br />automation</h2>
        <p data-aos="zoom-in" className="unlouck-description fw-normal">
        <span className="fw-semibold text-primary">AMBISPINE TECHNOLOGIES</span> will provide you vibrant community to 
        celebrate diversity, creativity and connection.
          </p>
       <div className="unlock-img">
       <img  src={unlockImg} className="u-img" alt="Feature" />
       </div>
        </div>
        <div className="home-dasboard">
       <img  src={dasboard} className="home-dasboard-img" alt="Feature" />
       </div>
      </section>
      
      <div className="container-home mt-5">
      <div className="row-home  justify-content-center">
      {
      clouddata.map((data, index)=>(
        <div className="col-lg-4 home-wrapper-container" key={index}
        data-aos="fade-right"
        data-aos-delay={index * 100} >
          <div className="home-wrapper-img">
            <img src={data.src}  alt={data.alt} />
            <div className="home-content ">
              <h4 className="home-content-header">{data.content}</h4>
              <p className="home-content-subtitle">{data.hoverContent2}</p>
            </div>
          </div>
        </div>
      ))
      }

      </div>
      </div>

      {/* <FeatureCards  clouddata={ clouddata} /> */}
      <section ref={contentRef} className="home-ai-features-section">
        <h2 className="home-section-title-ai pb-5">AI-Powered Solutions</h2>
        <div className="home-features-grid">
          {contentItems.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`home-feature-card ${
                visibleCards.has(index) ? "visible" : ""
              }`}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <p className="fs-6">{item}</p>
            </div>
          ))}
        </div>
      </section>

      
      </div>


      <section className="home-product-service-section">
      <div className="">
        <h2 className="home-head-tile">
          Empowering Innovation: unleashing digital potential.
        </h2>
        <p className="home-subt-title">
          Discover the power of cutting-edge technology solutions & services.
        </p>
        <div className="row gap-5 justify-content-between" >
          {service_product.map((service, index) => (
             <div
              key={service.id}
              className=" col-lg-4 home-service_product_con"
              // data-aos="fade-right"
              // data-aos-delay={index * 300} // Staggered delay (200ms between items)
            >
              <div className="home-ser_pro_con_img">
                <img
                  src={service.img}
                  className="home-product_image"
                  alt={`${service.name}`}
                />
                <div>
                <h4 className="home-prod_title">{service.name}</h4>
                <p className="home-prod_descri">{service.description}</p>
                <Link
                  to={`/services/${service.link}`}
                  className="home-service_link"
                >
                  Explore {service.name} 
                  <FaLongArrowAltRight className="home-service_arro_link_icon" />
                </Link>
              </div>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="row justify-content-evenly mt-5 ">
          <div className="col-md-5 my-auto" >
          <h2 className="unlouck-title" data-aos="fade-up">
          Spread Your Wings, Expand Your Network
        </h2>
        <p className="unlouck-description" data-aos="fade-up">
          Expand your reach and influence. Grow your connections, increase your
          opportunities, and access to resources. Make a bond with new
          possibilities and horizons.
        </p>
        <Link to="/product" className="home-spreads-pro-link" data-aos="fade-up"> Learn More <FaLongArrowAltRight className="service_arro_link_icon"/></Link>
          </div>
          <div className="col-md-6 home-spreads-top-img-container" >
          <img src={officediscussingImg} className=" home-spreads-top" />
          </div>

        </div> 
   
        <div className="wrapper">
   <section className="home-network-section">    
      <div className="home-network-card" style={{ marginTop: "50px" }}>
        {spreadsServices.map((data, index) => {
          return (
            <div 
              key={index} 
              data-aos="fade-down"
              data-aos-delay={index * 200} 
              className="home-card"
            >
              <div className="home-card-img">
                <img src={data.src} alt={data.alt || "Service image"} />
              </div>
              <h4 className="home-card-heading">{data.headText}</h4>
              <p className="home-card-text">{data.text}</p>
            </div>
          );
        })}
      </div>
   </section>
</div>

     
        
      
    </>
  );
};

export default HeroSection;
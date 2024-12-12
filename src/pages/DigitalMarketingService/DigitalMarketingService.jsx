import React from 'react';
import './DigitalMarketingService.css';
import { FaArrowDown } from "react-icons/fa";
import DigitalMarket7 from '../../assets/digital-2.jpg';
import DigitalMarket4 from '../../assets/digital-3.jpg'
import DigitalMarket3 from '../../assets/digital-4.png';
import { CgPlayPauseO } from "react-icons/cg";
import { HiOutlineCursorClick } from "react-icons/hi";
import { GiTireIronCross } from "react-icons/gi";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxDrawingPin } from "react-icons/rx";
import { TbBrandSocketIo } from "react-icons/tb";
import FaqAndConsultation from '../card/Faq';

const ScoContainer = ({ id, content, hoverContent1, hoverContent2, Icon, }) => {
  return (
    <div className={`sco_container sco_container_${id}`}>
      <div className="sco_show_content">
        <span>
          <center>
            <Icon className="dig_ser_icon"/>
          </center>
        </span>
        <h5 className='fs-6'>{content}</h5>
      </div>
      <div className="sco_show_content_hover">
        <span>
        <center><Icon className="dig_ser_icon" /></center>
        </span>
        <h5 className='fs-6 text-center'>{content}</h5>
        <p style={{fontSize:'0.8rem'}}>{hoverContent1}</p>
        <p style={{fontSize:'0.8rem'}}>{hoverContent2}</p>
      </div>
    </div>
  );
};

export default function DigitalMarketingService() {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".section-grid");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    const data = [
      {
        id: 1,
        content: "Search Engine Optimization (SEO)",
        hoverContent1: `SEO encompasses various components such as on-page and off-page optimization, keyword research, content optimization, and link building.`,
        hoverContent2: "Through effective SEO practices, businesses can achieve higher rankings on search engine results pages, enhanced visibility, increased website traffic, and improved brand recognition.",
        Icon: CgPlayPauseO,
      },
      {
        id: 2,
        content: "Pay-per-click (PPC) Pay-per-click (PPC)",
        hoverContent1: "Pay-per-click (PPC) is an internet advertising model where advertisers only pay when users click on their ads.",
        hoverContent2: "This makes it an effective and cost-efficient method to drive traffic and generate leads for businesses making it a popular choice for digital marketing campaigns.",
        Icon: HiOutlineCursorClick,
      },
      {
        id: 3,
        content: "Conversion Rate Optimization (CRO)",
        hoverContent1:  "Conversion Rate Optimization (CRO) is the process of making modifications to a website or web page to enhance its capability to convert visitors into customers or achieve a desired outcome.",
        hoverContent2: "CRO is crucial for a successful digital marketing strategy, as it increases the likelihood of visitors turning into customers.",
        Icon: GiTireIronCross,

      },
      {
        id: 4,
        content: "Email Marketing ",
        hoverContent1:  "Email marketing is a powerful digital marketing tool that allows businesses to nurture leads, build relationships, and drive sales by sending tailored messages and promotional content to current or potential customers via email.",
        hoverContent2: "It offers numerous advantages, such as cost-efficiency, easy measurement, and the ability to reach a broad audience.",
        Icon: MdOutlineMailOutline,

      },
      {
        id: 5,
        content: "Social Media Marketing",
        hoverContent1:  "Social media marketing involves utilizing social media platforms to engage with customers, build brands, boost sales, and drive website traffic.",
        hoverContent2: "By leveraging social media marketing and social media management, businesses can connect with customers, enhance brand recognition, and drive website traffic effectively.",
        Icon: TbBrandSocketIo,

      },
      {
        id: 6,
        content: "Web Design & Development",
        hoverContent1:  "Web design and development services are essential for creating a user-friendly, visually appealing, and functional website that supports digital marketing efforts.",
        hoverContent2: "Web designers and developers are responsible for the full construction of a website, including the page structure and navigation.",
        Icon: RxDrawingPin,

      },
    ];
    const accordionData = [
      {
        question: "1. What are digital marketing services?",
        answer: "Digital marketing services encompass a range of online marketing activities aimed at promoting brands, products, or services through digital channels such as search engines, social media, email, and websites.",
      },
      {
        question: "2. What do digital marketing services offer?",
        answer: "Digital marketing services offer strategies and implementations that enhance online visibility, drive targeted traffic, engage potential customers, and boost sales. This includes SEO, PPC advertising, content marketing, email marketing, social media management, and more.",
      },
      {
        question: "3. What are the 4 main types of digital marketing?",
        answer: (
          <ol type='1'>
          <li>Search Engine Optimization (SEO)</li>
           <li>Pay-Per-Click (PPC) Advertising</li>
           <li>Content Marketing</li>
           <li>Email Marketing</li>
          </ol>
        )
      },
    ];
    

  return (
    <div style={{ marginTop: "85px" }}>
      <div className="website-container"  id="digitalMarket-heros">
        <div className="website-hero">
          <h1 className="website-title">Digital Marketing Services</h1>
          <p className="website-subtitle">
          Find out what great work can do to your Business. In AKS Websoft we can help you to custom your website to
          increase your Business and make you highlights all over the world.
          </p>
          <div className="website-actions-down" onClick={handleScrollDown}>
            <FaArrowDown />
          </div>
        </div>
      </div>
      

      <section >
      <div className='section-grid'>
      <div className='section-text'>
          <h2>Digital Marketing Services</h2>
  <p>
  Find out what great work can do to your Business. In AKS Websoft we can help you to custom your website to increase your Business and make you highlights all over the world.Business. In AKS Websoft we can help you to custom your website to increase your Business and make you highlights all over the world.
  </p>
      </div>

        <div className='section-image'>
        <img src={DigitalMarket3} alt='design-process' />
        </div>          
    </div>
      </section>
  
    <div className='container my-5 pt-3'>
    <h1 className='mb-4 dig_mar_head'><center>Our Digital Marketing Services</center> </h1>
    <p className='dig_title'>
    Scandiweb is a full-service digital marketing agency that offers a wide range of services to help your business succeed online. With our dedicated team of experts and a tailored approach to digital marketing, 
    Scandiweb ensures your business stays ahead in the competitive digital landscape.
    </p>
          <div className="row  justify-content-center">
          {data.map(({ id, content, hoverContent1, hoverContent2, Icon,}) => (
            <div key={id} className="col-lg-4">
              <div className="position-relative">
                <ScoContainer
                  id={id}
                  content={content}
                  hoverContent1={hoverContent1}
                  hoverContent2={hoverContent2}
                  Icon={Icon}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="Digital_mid ">
      <div className='row m-1'>
      <div className='col-12 col-lg-6 ps-5'>
          <h3 className='Digital_mid-header'>How Digital Marketing Services Drive Business Growth</h3>
  <p className='Digital_mid-text'>
  Digital marketing services provide businesses of all sizes with an opportunity to market their brand 24/7 at 
  a low cost. From startups to medium-sized enterprises to multiple-location companies, a digital marketing company helps you expand your niche market reach to offer goods and services to your target customers, irrespective of time differences or location.
  </p>
      </div>
      <div className='col-12 col-lg-6 d-flex justify-content-center'>
        <div className='dig_mar_container'>
        <img src={DigitalMarket4} className='digital_ser' alt='design-process' />
        </div>          
      </div>
      <div className='col-12 col-lg-6 d-flex mt-4 pt-3 justify-content-center'>
        <div className='dig_mar_container'>
        <img src={DigitalMarket7} className='digital_ser' alt='design-process' />
        </div>          
      </div>
      <div className='col-12 col-lg-6 ps-5'>
          <h3 className='Digital_mid-header'>How Digital Marketing Services</h3>
  <p className='Digital_mid-text'>
  Digital marketing services provide businesses of all sizes with an opportunity to market their brand 24/7 at a low cost. From startups to medium-sized enterprises to multiple-location companies, a digital marketing company helps you expand your niche market reach to offer goods and services to your target customers, 
  irrespective of time differences or location.
  </p>
      </div>
    </div>
    </div>

    {/* <div className="container mt-5 pt-3">
      <h1 className='fw-bold mt-4 mb-4 text-center' style={{color: "#333;"}}>Digital Marketing Services FAQs</h1>
  <div className="accordion" id="cloudsolution">
    {accordionData.map((item, index) => (
      <div className="accordion-item mt-2 border border-1 rounded-0" key={index}>
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#item${index}`}
            aria-expanded={index === 0 ? "true" : "false"}
            aria-controls={`item${index}`}
          >

            {item.question}
          </button>
        </h2>
        <div
          id={`item${index}`}
          className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
          data-bs-parent="#cloudsolution"
        >
          <div className="accordion-body"><strong>Answer:  </strong>{item.answer}</div>
        </div>
      </div>
    ))}
  </div>
</div>

  

<section className="consultation_b-section">
    <div className="consultation-box">
      <h3>Get Free Consultation Now!.</h3>
      <p>Let's create a powerful website that grows with your business</p>
      <button className="consult-btn">Consult Now →</button>
    </div>
  </section> */}
<FaqAndConsultation faqs={accordionData}/>
    </div>
  );
}

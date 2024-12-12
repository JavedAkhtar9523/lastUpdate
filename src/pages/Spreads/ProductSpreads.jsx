import React, { Fragment, useState } from "react";
import "./ProductSpreads.css";
import ambVideo from "../../Images/ambVideo.mp4";
import Video1 from "../../Images/Video1.mp4";
import cloudata1 from "../../Images/cloudata1.jpg"
const data1 = [
    {
      id: 1,
      imgSrc: cloudata1,
      title: "Unify access to all of your data",
      description: "Accelerate time to value with self-service access to NVIDIA AI microservices and other essential AI tools to. Simplify accelerated infrastructure configuration and provide the speed and scale of public cloud—while keeping your data private and more secure—with an end-to-end lifecycle software platform. ",
    },
    {
      id: 2,
      imgSrc: cloudata1,
      title: "Dynamic Job Portal",
      description: "Empower professionals and businesses with a seamless job-search experience.",
    },
    {
      id: 3,
      imgSrc:cloudata1,
      title: "Community Building",
      description: "Foster meaningful connections with like-minded professionals.",
    },
    {
      id: 4,
      imgSrc: cloudata1,
      title: "Social Integration",
      description: "Combine social media features with professional tools for an enhanced experience.",
    },
  ];
const ProductSpreads = () => {
    const [data, setData] = useState([
        {
          id: 1,
          imgSrc: cloudata1,
          title: 'Unify access to all of your data',
          description:
            'Accelerate time to value with self-service access to NVIDIA AI microservices and other essential AI tools to. Simplify accelerated infrastructure configuration and provide the speed and scale of public cloud—while keeping your data private and more secure—with an end-to-end lifecycle software platform.',
        },
        {
          id: 2,
          imgSrc: cloudata1,
          title: 'Dynamic Job Portal',
          description: 'Empower professionals and businesses with a seamless job-search experience.',
        },
        {
          id: 3,
          imgSrc: cloudata1,
          title: 'Community Building',
          description: 'Foster meaningful connections with like-minded professionals.',
        },
        {
          id: 4,
          imgSrc: cloudata1,
          title: 'Social Integration',
          description: 'Combine social media features with professional tools for an enhanced experience.',
        },
      ]);
   
      const toggleDescription = (id) => {
        setData(
          data.map((item) =>
            item.id === id ? { ...item, isExpanded: !item.isExpanded } : item
          )
        );
      };
  return (
    <Fragment>
      <div className="video-hero">
        <video
          autoPlay
          loop
          muted
          className="video-background"
        >
          <source src={ambVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-content">
          <h1>Where Opportunity Meets Community</h1>
          <p>
            We are excited to announce the upcoming launch of Topics Spreads, a
            groundbreaking platform that seamlessly integrates social media with a
            dynamic job portal. Designed for professionals, job seekers, and
            businesses, Topics Spreads is about more than just finding a job—it’s
            about building a community.
          </p>
        </div>
      </div>

      <section className="video-section">
      <div className="">
        <h2>New Things Coming Soon Spreads</h2>
        <div className="video-card">
          <video src={Video1} controls autoPlay loop muted className="video-player">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>

    <section className="features-spreads">
      <div>
        <h2>Features of Spreads</h2>
        <p>Tools monitor brand reputation by analyzing user sentiments and feedback across social platforms.</p>
        <div className="card-wrapper">
          {data1.map((item) => (
            <div className="spreads-card" key={item.id}>
              <div className="spreads-card-image">
                <img src={item.imgSrc} alt={item.title} />
              </div>
              <div className="spreads-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="arrow-round">→</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="wrapper-1">
        <div className="wrapper-12000">
            <h2>Spreads Use Cases</h2>
            <p>In the very near future, We ‘’ll be launching in the the India, ADD yOURIn the very near future, We ‘’ll be launching in the the India, ADD yOURIn the very near future,
                 We ‘’ll be launching in the the India, ADD yOUR</p>
                
                 <div className="card-wrapper">
                 {data.map((item) => (
            <div className="spreads-card" key={item.id}>
              <div className="spreads-card-image">
                <img src={item.imgSrc} alt={item.title} />
              </div>
              <div className="spreads-card-content">
                <h3>{item.title}</h3>
                <div className="read-more">
                  <p>{item.isExpanded ? item.description : `${item.description.slice(0, 100)}...`}</p>
                  <span
                    className="toggle-read-more"
                    onClick={() => toggleDescription(item.id)}
                  >
                    {item.isExpanded ? 'Read Less' : 'Read More'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    </section>

    <section className="logo-section">
  <div className="logo-card flex">
    <div className="logo-content">
      <h2>Spreads Use Cases</h2>
      <p>
        We are excited to announce the upcoming launch of Topics Spreads, a groundbreaking platform that seamlessly integrates social media with a dynamic job portal. Designed for professionals, job seekers, and businesses, Topics Spreads is about more than just finding a job—it’s about building a community.
      </p>
    </div>

    <div className="log-img">
      <img src="logo.png" alt="Logo" />
    </div>
  </div>
</section>

<section className="dreams-container">
  <div className="dreams-between">
  <div className="dreams-crd">
  <div className="card-1">
    <img src={cloudata1} alt="Card Image 1" />
  </div>
  <div className="card-1">
    <img src={cloudata1} alt="Card Image 2" />
  </div>
  <div className="card-1">
    <img src={cloudata1} alt="Card Image 3" />
  </div>
</div>

    <div className="dreams-content">
      <div className="text-content">
        <p>
          We can achieve anything with our commitment, hard work, and enthusiasm. But we have to build strong alliances.
        </p>
      </div>
      <div className="title-content">
        <h1>DREAMS</h1>
      </div>
    </div>
  </div>
</section>



    </Fragment>
  );
};

export default ProductSpreads;

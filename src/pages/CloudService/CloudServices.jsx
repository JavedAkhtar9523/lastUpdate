// Import image
import cloudServicesImage from "../../assets/cloud-services.jpg";
import cloudServicesImage2 from "../../assets/Cloud-2.jpg";
import HeroSection from "../../layouts/HeroSection";
import DevelopersTools from "../DevelopersTools/DevelopersTools";
import "./cloudService.css";
import { FaCloud } from "react-icons/fa";
import { PlusIcon, MinusIcon, ChevronRightIcon } from "lucide-react";
import CloudServicesAccordion from "./CloudServicesAccordion";

const developmentStages = [
  {
    title: "Cloud Infrastructure Setup",
    content:
      "We set up scalable and robust cloud infrastructures tailored to your business needs, ensuring high availability and fault tolerance.",
  },
  {
    title: "Seamless Migration",
    content:
      "Our expert team helps seamlessly migrate your legacy systems to the cloud with minimal downtime, ensuring business continuity.",
  },
  {
    title: "Optimized Performance",
    content:
      "We optimize cloud resources and architecture for performance, cost efficiency, and security, ensuring your systems are always running at their best.",
  },
  {
    title: "Continuous Monitoring & Support",
    content:
      "We provide 24/7 cloud monitoring and support services to quickly address any issues, keeping your business running smoothly at all times.",
  },
];

const CloudServices = () => {
  return (
    <>
      <section className="cloud-services-section">
        <HeroSection
          icon={<FaCloud />}
          bgImage={cloudServicesImage}
          title="Cloud Services"
          subtitle=" Unlock the power of the cloud to transform your business. Experience agility, scalability, and efficiency with our cutting-edge cloud solutions."
          overlayColor="rgba(0, 123, 255, 0.7)"
          textAlign="center"
        />

        {/* Features Section */}
        <div className="cloud-features">
          <div className="features-content">
            <h2>What We Offer</h2>
            <p>
              Our cloud services are designed to empower businesses by providing
              scalable, secure, and cost-effective solutions tailored to your
              specific needs. Whether you're looking to migrate to the cloud,
              improve your infrastructure, or optimize your current cloud
              environment, we have you covered.
            </p>
            <CloudServicesAccordion />
          </div>
          <div className="features-image-container">
            <img
              src={cloudServicesImage2}
              alt="Cloud Services"
              className="features-image"
            />
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="development-stages">
        <h2>Our Cloud Development Process</h2>
        <div className="stages-container">
          {developmentStages.map((stage, index) => (
            <div key={index} className="stage-card">
              <div className="stage-icon">
                <ChevronRightIcon size={32} />
              </div>
              <div className="stage-content">
                <h3>{stage.title}</h3>
                <p>{stage.content}</p>
              </div>
            </div>
          ))}
        </div>
        <br />
        <DevelopersTools />
      </section>
    </>
  );
};

export default CloudServices;

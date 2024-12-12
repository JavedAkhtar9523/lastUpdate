import React from "react";
import "./CloudSolutionsPage.css";
import cloud1 from "../../assets/CloudSolution1.jpeg";
import { CiCloudOn } from "react-icons/ci";
import FaqAndConsultation from "./Faq";
const faqs = [
  {
    question: "What is Cloud Computing in Business?",
    answer:
      "Cloud computing in business involves delivering computing services like servers, storage, and applications over the internet.",
  },
  {
    question: "Is Using the Cloud Safe?",
    answer:
      "Yes, cloud providers invest heavily in security, but businesses must also implement their own security measures.",
  },
  {
    question: "Is Cloud Reliability a Concern?",
    answer:
      "Cloud reliability depends on the provider. Most reputable providers offer high availability and disaster recovery options.",
  },
  {
    question: "Do You Need Internet to Access the Cloud?",
    answer:
      "Yes, an internet connection is typically required to access cloud services.",
  },
];
const CloudSolutionsPage = ({ faqs }) => {
  return (
    <div className="cloud-solutions">
      {/* Hero Section */}
      <section className="hero_cloud">
        <div className="hero-overlay">
          <h1>Cloud Solution</h1>
          <p>
            Start Designs is an emerging web development company that offers
            website development services. Our in-house team and professional web
            developers use new technologies.
          </p>
        </div>
      </section>

      {/* Cloud Computing Solutions Section */}
      <section className="cloud-computing">
        <h2>Cloud Computing Solutions</h2>
        <div className="content">
          <p>
            Our Custom Software Development services focus on creating
            applications uniquely designed for your business goals. Whether you
            need a web, mobile, or desktop application, we deliver solutions
            that integrate seamlessly into your operations.
          </p>
          <img src={cloud1} alt="Cloud Computing" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>The Benefits of Cloud Business Solutions</h2>
        <p style={{ color: "#eee" }}>
          With countless businesses now employing hybrid working models to allow
          employees to work both on-site and remotely, it is vital that your
          team can access what they need when they need it.
        </p>
        <div className="benefit-items">
          <div className="benefit-item">
            <h3>Cost Efficiency</h3>
            <p>
              Improve cost efficiency by reducing on-premises infrastructure and
              enabling pay-as-you-go models.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Boosted Productivity</h3>
            <p>
              Cloud-based solutions ensure that your team can work seamlessly
              across various locations.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Increased Security</h3>
            <p>
              Cloud providers offer advanced security measures to protect
              sensitive data.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Disaster Recovery</h3>
            <p>
              Ensure business continuity with automated data backups and
              disaster recovery solutions.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Document Control</h3>
            <p>
              Cloud solutions centralize data, ensuring your team can work
              efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Risk Reduction Section */}
      <section className="risk-reduction">
        <h2>Reduce risk exposure, increase business agility</h2>
        <div className="risk-items">
          <div className="risk-item riskItem1">
            <div className="riskItemIcon">
              <CiCloudOn size={20} className="icc" />
            </div>
            <p style={{ color: "#eee" }}>
              Cloud solutions help mitigate risks by ensuring your data is
              secure and always accessible.
            </p>
          </div>
          <div className="risk-item riskItem2">
            <div className="riskItemIcon">
              <CiCloudOn size={20} className="icc" />
            </div>
            <p style={{ color: "#eee" }}>
              Adopt advanced cloud technology for streamlined operations and
              optimized workflows.
            </p>
          </div>
          <div className="risk-item riskItem3">
            <div className="riskItemIcon">
              <CiCloudOn size={20} className="icc" />
            </div>
            <p style={{ color: "#eee" }}>
              Build scalable infrastructure that grows alongside your
              business.jdjhx hjhjz hhjdaHb hbhdsj bhjds
            </p>
          </div>
          <div className="risk-item riskItem4">
            <div className="riskItemIcon">
              <CiCloudOn size={20} className="icc" />
            </div>
            <p style={{ color: "#eee" }}>
              Build scalable infrastructure that grows alongside your
              business.jdjhx hjhjz hhjdaHb hbhdsj bhjds
            </p>
          </div>
        </div>
      </section>
      <section>
        <FaqAndConsultation faqs={faqs} />
      </section>
    </div>
  );
};

export default CloudSolutionsPage;

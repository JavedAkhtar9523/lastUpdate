import React from "react";
import HeroSection from "../../layouts/HeroSection";
import "./DevOpsSolutions.css";
import cloudServicesImage from "../../assets/devops-banner.png";
import aiImage from "../../assets/img-2.jpg";
import devImage1 from "../../assets/devops-tools.png";
import {
  FaCloud,
  FaDocker,
  FaServer,
  FaGithub,
  FaSlack,
  FaGitlab,
} from "react-icons/fa";
import {
  SiJenkins,
  SiKubernetes,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

const DevOpsSolutions = () => (
  <div>
    <HeroSection
      icon="⚙️"
      bgImage={cloudServicesImage}
      title="DevOps Solutions"
      overlayColor="rgba(0, 123, 255, 0.7)"
      textAlign="center"
      subtitle="Seamless integration and continuous delivery for faster, more efficient software development."
    />

    <div className="devops--content">
      <div className="devops--content-head">
        <div className="devops--image">
          <img
            src={devImage1}
            className="img-border"
            alt="DevOps Illustration"
          />
        </div>
        <div className="devops--text">
          <h2>What Is DevOps?</h2>
          <p>
            DevOps is a set of practices that combine software development (Dev)
            and IT operations (Ops), aiming to shorten the development lifecycle
            and provide continuous delivery of high-quality software. By
            fostering collaboration between development and operations teams,
            DevOps helps automate and improve the software delivery process.
          </p>
        </div>
      </div>
    </div>

    <div className="devops-section">
      <h2>Why Choose Our DevOps Solutions?</h2>
      <p>
        At <strong>[Your Company]</strong>, we provide end-to-end DevOps
        solutions designed to improve collaboration, increase the speed of
        software delivery, and ensure the stability and scalability of your
        systems. Our experts implement DevOps best practices and tools to help
        you achieve continuous integration and continuous delivery (CI/CD) with
        ease.
      </p>

      <h3>Key Benefits of DevOps</h3>
      <ul>
        <li>
          <strong>Faster Time to Market:</strong> Automate and streamline
          development workflows to accelerate delivery.
        </li>
        <li>
          <strong>Enhanced Collaboration:</strong> Foster collaboration between
          development and operations teams.
        </li>
        <li>
          <strong>Improved Quality:</strong> Continuous testing and integration
          ensure higher quality software.
        </li>
        <li>
          <strong>Scalability & Flexibility:</strong> Easily scale applications
          and infrastructure with cloud integration.
        </li>
        <li>
          <strong>Increased Security:</strong> Continuous monitoring and
          automated security checks enhance your system's security.
        </li>
      </ul>
    </div>

    <div className="ai-section">
      <div className="ai-card">
        <div className="ai-card-image">
          <img src={aiImage} alt="AI Technology" />
        </div>
        <div className="ai-card-content">
          <h3>AI Solutions</h3>
          <p>
            Harness the power of Artificial Intelligence to automate processes,
            improve decision-making, and drive innovation. Our AI solutions
            include machine learning, natural language processing, and
            predictive analytics.
          </p>
        </div>
      </div>
    </div>

    <div className="devops--content">
      <h3>Technologies We Use</h3>
      <p>
        Our DevOps solutions leverage a wide range of cutting-edge tools and
        technologies to deliver seamless integration and automation:
      </p>

      <div className="tech-cards-container">
        <div className="tech-card">
          <FaCloud className="tech-card-img" />
          <div className="tech-card-content">
            <h4>Cloud Platforms</h4>
            <p>AWS, Azure, Google Cloud</p>
          </div>
        </div>

        <div className="tech-card">
          <SiJenkins className="tech-card-img" />
          <div className="tech-card-content">
            <h4>CI/CD Tools</h4>
            <p>Jenkins, GitLab CI, CircleCI, Travis CI</p>
          </div>
        </div>

        <div className="tech-card">
          <FaDocker className="tech-card-img" />
          <div className="tech-card-content">
            <h4>Containerization</h4>
            <p>Docker, Kubernetes</p>
          </div>
        </div>

        <div className="tech-card">
          <SiTerraform className="tech-card-img" />
          <div className="tech-card-content">
            <h4>Infrastructure as Code</h4>
            <p>Terraform, Ansible, Chef, Puppet</p>
          </div>
        </div>

        <div className="tech-card">
          <SiPrometheus className="tech-card-img" />
          <div className="tech-card-content">
            <h4>Monitoring</h4>
            <p>Prometheus, Grafana, ELK Stack</p>
          </div>
        </div>

        <div className="tech-card">
          <FaGithub className="tech-card-img" />
          <div className="tech-card-content">
            <h4>Version Control</h4>
            <p>Git, GitHub, GitLab</p>
          </div>
        </div>

        <div className="tech-card">
          <FaSlack className="tech-card-img" />
          <div className="tech-card-content">
            <h4>Collaboration</h4>
            <p>Slack, Jira, Confluence</p>
          </div>
        </div>
      </div>
    </div>

    <div className="devops--content">
      <div className="landing-section">
        <h3>Case Studies</h3>
        <p>
          <strong>
            Example 1: Accelerating Software Delivery for a Retailer
          </strong>
          <br />
          By implementing CI/CD pipelines and automating testing and deployment,
          we helped a leading retailer reduce software deployment times by 50%,
          increasing their time-to-market and customer satisfaction.
        </p>
        <p>
          <strong>
            Example 2: Optimizing Cloud Infrastructure for a SaaS Provider
          </strong>
          <br />
          We assisted a SaaS provider in migrating their infrastructure to AWS,
          implementing auto-scaling and continuous monitoring, resulting in a
          30% reduction in operational costs.
        </p>

        <h3>Why Partner with Us?</h3>
        <p>
          Partnering with <strong>AmbiSpine Technologies</strong> means choosing
          a dedicated team of DevOps experts committed to improving your
          software development lifecycle. We bring years of experience in
          implementing successful DevOps solutions for businesses of all sizes,
          ensuring that your systems are more efficient, scalable, and secure.
        </p>

        <h3>Next Steps</h3>
        <p>
          Ready to transform your software delivery process with DevOps? Contact
          us today, and let's discuss how our DevOps solutions can help you
          achieve faster development cycles, higher-quality software, and
          improved operational efficiency.
        </p>
        <button className="cta-button">Get in Touch</button>
      </div>
    </div>

    <section className="project-section">
      <h2 className="section-title">Tell Us About Your Project</h2>
      <div className="form-container flex">
        <div className="form-wrapper">
          <h3 className="form-heading">
            Guaranteed response within one business day.
          </h3>
          <form className="project-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="form-button">
              Let's Get Started
            </button>
          </form>
        </div>

        <div className="info-wrapper">
          <h3 className="info-heading">What will happen next?</h3>
          <p>1. We’ll reach out to you within 24 hours.</p>
          <p>
            2. We’ll discuss your project, gather your requirements and business
            objectives, and develop a proposal accordingly.
          </p>
          <p>3. You can start a 15-day risk-free trial with us.</p>
        </div>
      </div>
    </section>
  </div>
);

export default DevOpsSolutions;

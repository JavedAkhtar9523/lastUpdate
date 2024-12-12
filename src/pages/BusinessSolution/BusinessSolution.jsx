import React, { useState, useEffect } from "react";
import "./BusinessSolutions.css";

const BusinessSolutionsPage = () => {
  const [activeTab, setActiveTab] = useState("digital");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceOfferings = [
    {
      id: "digital",
      title: "Digital Transformation",
      icon: "💻",
      subtitle: "Reimagine Your Business in the Digital Era",
      description:
        "Comprehensive digital strategy that integrates cutting-edge technologies, process optimization, and innovative business models.",
      keyPoints: [
        "Enterprise Architecture Redesign",
        "Cloud Migration Strategies",
        "AI & Machine Learning Integration",
        "Cybersecurity Enhancement",
        "Data-Driven Decision Making",
        "Digital Customer Experience",
      ],
      benefits: [
        "Accelerate Digital Adoption",
        "Enhance Operational Efficiency",
        "Create New Revenue Streams",
        "Improve Customer Experience",
        "Reduce Operational Costs",
        "Competitive Technological Edge",
      ],
    },
    {
      id: "strategy",
      title: "Strategic Consulting",
      icon: "🎯",
      subtitle: "Precision-Driven Business Planning",
      description:
        "Advanced strategic planning that combines deep market insights, competitive analysis, and data-driven decision-making.",
      keyPoints: [
        "Market Positioning Analysis",
        "Growth Strategy Development",
        "Organizational Transformation",
        "Performance Optimization",
        "Competitive Intelligence",
        "Change Management",
      ],
      benefits: [
        "Clear Strategic Direction",
        "Competitive Advantage",
        "Risk Mitigation",
        "Sustainable Growth",
        "Organizational Agility",
        "Strategic Resource Allocation",
      ],
    },
    {
      id: "innovation",
      title: "Innovation Management",
      icon: "🚀",
      subtitle: "Catalyst for Breakthrough Innovations",
      description:
        "Structured innovation framework that fosters creativity, identifies emerging opportunities, and accelerates breakthrough solutions.",
      keyPoints: [
        "Innovation Culture Design",
        "Technology Scouting",
        "Startup Ecosystem Engagement",
        "R&D Strategy Alignment",
        "Innovation Portfolio Management",
        "Emerging Technology Integration",
      ],
      benefits: [
        "Continuous Innovation",
        "Disruptive Thinking",
        "Talent Attraction",
        "Market Leadership",
        "Future-Proofing Business",
        "Accelerated Product Development",
      ],
    },
  ];

  const expandedClientTestimonials = [
    {
      name: "Michael Chen",
      company: "TechGlobal Enterprises",
      title: "Chief Technology Officer",
      quote:
        "Their digital transformation strategy was a game-changer. We increased operational efficiency by 40% and launched three new digital products.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Sarah Rodriguez",
      company: "FinanceInnovate",
      title: "Chief Strategy Officer",
      quote:
        "Exceptional strategic consulting that provided clear, actionable insights. Their approach helped us navigate complex market challenges.",
      rating: 5,
      image: "👩‍💼",
    },
    {
      name: "David Kim",
      company: "GlobalRetail Solutions",
      title: "Head of Innovation",
      quote:
        "Our innovation management process was completely transformed. We've seen a 60% increase in new product development speed.",
      rating: 5,
      image: "👨‍💻",
    },
  ];

  const expandedKeyAdvantages = [
    {
      icon: "🔒",
      title: "Secure & Compliant",
      description:
        "Enterprise-grade security and regulatory compliance across global standards",
      details:
        "ISO 27001 certified, GDPR compliant, advanced threat protection",
    },
    {
      icon: "🤝",
      title: "Collaborative Partnership",
      description:
        "Customized solutions with dedicated expert teams and continuous engagement",
      details:
        "Agile methodologies, weekly strategic reviews, personalized roadmaps",
    },
    {
      icon: "📊",
      title: "Data-Driven Approach",
      description:
        "Advanced analytics and actionable insights powered by cutting-edge technologies",
      details:
        "Machine learning models, predictive analytics, real-time dashboards",
    },
  ];
  return (
    <div className="business-solutions-platform">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Business Solution</h1>
          <p>
            Transform Your Digital Vision into Powerful Mobile Solutions with
            Think Web Hub.Start Designs is an emerging web development company
            that offers website development services. .
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Comprehensive Service Offerings</h2>
        <div className="services-tabs">
          {serviceOfferings.map((service) => (
            <button
              key={service.id}
              className={`service-tab ${
                activeTab === service.id ? "active" : ""
              }`}
              onClick={() => setActiveTab(service.id)}
            >
              <span className="service-icon">{service.icon}</span>
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Details */}
        <div className="service-details">
          {serviceOfferings
            .filter((s) => s.id === activeTab)
            .map((service) => (
              <div key={service.id} className="service-content">
                <h3>{service.subtitle}</h3>
                <p>{service.description}</p>

                <div className="service-breakdown">
                  <div className="key-points">
                    <h4>Key Capabilities</h4>
                    <ul>
                      {service.keyPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-benefits">
                    <h4>Anticipated Benefits</h4>
                    <ul>
                      {service.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Success Stories That Speak Volumes</h2>
        <div className="testimonial-grid">
          {expandedClientTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-avatar">{testimonial.image}</div>
              <p>"{testimonial.quote}"</p>
              <div className="testimonial-footer">
                <strong>{testimonial.name}</strong>
                <span>
                  {testimonial.title}, {testimonial.company}
                </span>
                <div className="rating">{"★".repeat(testimonial.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="advantages-section">
        <h2>Why Choose StrategySync</h2>
        <div className="advantages-grid">
          {expandedKeyAdvantages.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <div className="advantage-icon">{advantage.icon}</div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
              <div className="advantage-details">{advantage.details}</div>
            </div>
          ))}
        </div>
      </section>
      {/* New Industry Expertise Section */}
      <section className="industry-expertise-section">
        <h2>Industry Expertise</h2>
        <div className="industry-grid">
          {[
            "Technology",
            "Finance",
            "Healthcare",
            "Retail",
            "Manufacturing",
            "Energy",
          ].map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">🏢</div>
              <h3>{industry}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Section */}
      <section className="consultation_b-section">
        <div className="consultation-box">
          <h3>Get Free Consultation Now!.</h3>
          <p>Let's create a powerful website that grows with your business</p>
          <button className="consult-btn">Consult Now →</button>
        </div>
      </section>
    </div>
  );
};

export default BusinessSolutionsPage;

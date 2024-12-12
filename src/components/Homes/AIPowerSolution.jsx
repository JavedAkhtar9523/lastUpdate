import React, { useState, useEffect } from "react";

const AIPowerSolution = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const contentItems = [
    {
      title: "AI-Powered Customer Experience",
      content: `Our intelligent chatbots revolutionize customer interactions by providing 24/7 automated support.
      These AI assistants handle common queries instantly, learn from interactions to improve responses,
      and seamlessly escalate complex issues to human agents when needed. This results in faster
      response times, consistent service quality, and increased customer satisfaction.`,
    },
    {
      title: "Brand Reputation Intelligence",
      content: `Leverage advanced sentiment analysis tools to monitor and understand your brand's presence
      across social media platforms in real-time. Our AI algorithms process user comments, reviews,
      and mentions to provide actionable insights about brand perception, helping you make informed
      decisions and respond promptly to customer feedback.`,
    },
    {
      title: "Engagement Optimization",
      content: `Maximize your content's impact with our AI-driven timing optimization system. By analyzing
      historical engagement data, user activity patterns, and demographic behaviors, we determine
      the perfect posting schedule for your content. This strategic approach ensures maximum
      visibility and engagement across different time zones and user segments.`,
    },
    {
      title: "Smart Content Personalization",
      content: `Transform user experience with AI-powered content personalization. Our system analyzes
      user behavior, preferences, and interaction history to create tailored content feeds that
      resonate with individual users. This personalized approach significantly increases
      engagement rates, time spent on platform, and user retention.`,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === contentItems.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const styles = {
    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "20px",
      position: "relative",
    },
    slideContainer: {
      backgroundColor: "#f8f9fa",
      borderRadius: "10px",
      padding: "30px",
      minHeight: "300px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    title: {
      color: "#2c3e50",
      fontSize: "24px",
      marginBottom: "20px",
      fontWeight: "bold",
    },
    content: {
      color: "#495057",
      fontSize: "16px",
      lineHeight: "1.6",
    },
    dotsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginTop: "20px",
    },
    dot: {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      backgroundColor: "#dee2e6",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    activeDot: {
      backgroundColor: "#007bff",
      transform: "scale(1.2)",
    },
    fadeIn: {
      animation: "fadeIn 0.5s ease-in",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.slideContainer}>
        <h2 style={styles.title}>{contentItems[currentSlide].title}</h2>
        <p style={styles.content}>{contentItems[currentSlide].content}</p>
      </div>

      <div style={styles.dotsContainer}>
        {contentItems.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              ...styles.dot,
              ...(currentSlide === index ? styles.activeDot : {}),
            }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default AIPowerSolution;

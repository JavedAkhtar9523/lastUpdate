// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { IoIosSearch, IoMdClose } from "react-icons/io";
// import { IoGlobeOutline } from "react-icons/io5";
// import {
//   FaChevronDown,
//   FaBars,
//   FaLongArrowAltRight,
//   FaArrowRight,
// } from "react-icons/fa";
// import { IoMdArrowDropdown } from "react-icons/io";
// import logo from "../../Images/AmbiSpine_logo.png";
// import "./Header.css";
// import { useDispatch, useSelector } from "react-redux";
// import { setLanguage } from "../../redux/slices/languageSlice";
// import { ThemeToggle } from "../Theme/ThemeToggle";
// // import ThemeToggle from "./ThemeToggle";

// const Header = () => {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
//   const location = useLocation();

//   const dispatch = useDispatch();
//   const currentLanguage = useSelector(
//     (state) => state.language.currentLanguage
//   );

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//   // const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
//   // const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
//   const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);

//   const changeLanguage = (lang) => {
//     dispatch(setLanguage(lang));
//     setIsLanguageMenuOpen(false);
//   };
//   const [isPlatformHovered, setIsPlatformHovered] = useState(false);

//   const isHomeOrContact =
//     location.pathname === "/" ||
//     location.pathname === "/contact" ||
//     location.pathname === "/career" ||
//     location.pathname === "/aboutus" ||
//     location.pathname === "/product" ||
//     location.pathname === "/termsandprivacy";

//   return (
//     <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
//       <nav className="header__nav">
//         <Link to="/" className="header__logo">
//           <img
//             src={logo}
//             alt="AmbiSpine Logo"
//             className="header__logo-img"
//             width={500}
//           />
//           {/* <span className="header__logo-text">AMBISPINE</span> */}
//         </Link>

//         <div
//           className={`header__menu ${
//             isMobileMenuOpen ? "header__menu--open" : ""
//           }`}
//         >
//           <NavLink to="/" onClick={toggleMobileMenu}>
//             Home
//           </NavLink>

//           <ul className="dropdownUl">
//             <li className="dropdownLi">
//               <div className="nav-item dropdown">
//                 <Link to="/" className="nav-link">
//                   Who We Are <FaChevronDown />
//                 </Link>
//                 <div className="dropdown-menu">
//                   <div className="dropdown-content">
//                     <div className="about-section">
//                       <h3 style={{ color: "#333" }}>Who We are</h3>
//                       <hr />
//                       <h2>About Us</h2>
//                       <p style={{ color: "#fff" }}>
//                         As we step into a new era of innovation, solution is at
//                         the forefront of exploring the intersection of human
//                         ingenuity and technological advancements. Our mission is
//                         to empower individuals and organizations to harness the
//                         power of technology to shape a brighter future.
//                       </p>
//                       <Link to="/aboutus" className="explore-btn">
//                         Explore Now <FaArrowRight />
//                       </Link>
//                     </div>
//                     {/* <div className="services-section">
//                       <h3>View Services</h3>
//                       <hr />
//                       <ul>
//                         <li>
//                           <Link to="/platform">Platform</Link>
//                           <h3 className="platform-dropdown-wrapper">
//                             <Link
//                               to="/platform"
//                               className="platform-link"
//                               onClick={toggleMobileMenu}
//                             >
//                               Platform
//                               <div className="platform-dropdown">
//                                 <div className="platform-content">
//                                   <div className="platform-item">
//                                     <h4>Spread</h4>
//                                     <p>Coming Soon</p>
//                                   </div>
//                                   <div className="platform-item">
//                                     <h4>Ambispine Web Solution</h4>
//                                     <p>Coming Soon</p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </Link>
//                           </h3>
//                         </li>
//                         <li>
//                           <Link to="/career">Career</Link>
//                         </li>
//                       </ul>
//                     </div> */}
//                     <div className="services-section">
//                       <h3 style={{ color: "#605d5d" }}>View Services</h3>
//                       <hr />
//                       <ul className="dropdownUl">
//                         <li
//                           className="platform-dropdown-wrapper dropdownLi"
//                           onMouseEnter={() => setIsPlatformHovered(true)}
//                           onMouseLeave={() => setIsPlatformHovered(false)}
//                         >
//                           <Link to="/platform" onClick={toggleMobileMenu}>
//                             Platform <FaChevronDown size={13} />
//                           </Link>
//                           {isPlatformHovered && (
//                             <div className="platform-dropdown">
//                               <div className="platform-content">
//                                 <div className="platform-item">
//                                   <h4>
//                                     <Link to="/product">Spreads</Link>
//                                   </h4>
//                                   <p>Coming Soon</p>
//                                 </div>
//                                 <hr />
//                                 {/* <div className="platform-item">
//                                   <h4>
//                                     <Link to="/platform">
//                                       Ambispine Web Solution
//                                     </Link>
//                                   </h4>
//                                   <p>Coming Soon</p>
//                                 </div> */}
//                               </div>
//                             </div>
//                           )}
//                         </li>
//                         <li>
//                           <Link to="/career" onClick={toggleMobileMenu}>
//                             Career
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </li>
//           </ul>

//           {/* ======================== */}

//           <NavLink to="/product" onClick={toggleMobileMenu}>
//             Products
//           </NavLink>
//           <NavLink to="/career" onClick={toggleMobileMenu}>
//             Career
//           </NavLink>
//           <NavLink to="/contact" onClick={toggleMobileMenu}>
//             Contact
//           </NavLink>
//         </div>

//         <div className="header__actions">
//           <button onClick={toggleSearch} className="header__action-btn">
//             <IoIosSearch className="header__action-icon" />
//           </button>

//           <div className="header__language-dropdown">
//             <button className="header__action-btn">
//               <IoGlobeOutline className="header__action-icon" />
//               <span className="header__current-language">
//                 {currentLanguage.toUpperCase()}
//               </span>
//             </button>
//             <div className="header__language-menu">
//               <button
//                 onClick={() => changeLanguage("en")}
//                 className="header__language-option"
//               >
//                 EN
//               </button>
//               <button
//                 onClick={() => changeLanguage("hi")}
//                 className="header__language-option"
//               >
//                 HI
//               </button>
//             </div>
//           </div>
//           {/* <Link to="/signin" className="header__signin-btn">
//             Sign In
//           </Link> */}
//           {/* <Link to="/signin" className="header__signin-btn">
//             {currentLanguage === "en" ? "Sign In" : "साइन इन"}
//           </Link> */}
//           <ThemeToggle />
//           <button
//             onClick={toggleMobileMenu}
//             className="header__mobile-menu-btn"
//           >
//             <FaBars className="header__mobile-menu-icon" />
//           </button>
//         </div>
//       </nav>

//       {isSearchOpen && (
//         <div className="header__search">
//           <form className="header__search-form">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="header__search-input"
//             />
//             <button type="submit" className="header__search-submit">
//               <IoIosSearch className="header__search-icon" />
//             </button>
//           </form>
//         </div>
//       )}

//       {!isHomeOrContact && (
//         <div className="header__subnav">
//           <div className="header__subnav-content">
//             <NavLink to="/overview" className="header__subnav-link">
//               Overview
//             </NavLink>
//             <NavLink to="/platform" className="header__subnav-link">
//               Platform
//             </NavLink>
//             <NavLink to="/career" className="header__subnav-link">
//               Career
//             </NavLink>
//           </div>
//         </div>
//       )}
//       {/* <ThemeToggle /> */}
//     </header>
//   );
// };

// const NavLink = ({ to, children, onClick }) => {
//   const location = useLocation();
//   const isActive = location.pathname === to;

//   return (
//     <Link
//       to={to}
//       className={`header__nav-link ${
//         isActive ? "header__nav-link--active" : ""
//       }`}
//       onClick={onClick}
//     >
//       {children}
//     </Link>
//   );
// };

// export default Header;

// ---------------------------

// import React from "react";
// import { Link } from "react-router-dom";

// const Header = ({ isScrolled }) => {
//   return (
//     <header className={`header ${isScrolled ? "scrolled" : ""}`}>
//       <div className="header-container">
//         <div className="logo">
//           AMBI<span className="logo-dot">SPINE</span>
//         </div>
//         <nav className="nav-menu">
//           <Link to="/" className="nav-link">
//             Home
//           </Link>
//           <Link to="/service" className="nav-link">
//             Services
//           </Link>
//           <Link to="/aboutus" className="nav-link">
//             About Us
//           </Link>

//           <Link to="/career" className="nav-link">
//             Career
//           </Link>
//           <Link
//             to="/contact"
//             style={{ textDecoration: "none" }}
//             className="contact-btn"
//           >
//             Contact Us
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

// =============

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Header = ({ isScrolled }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const services = [
//     {
//       icon: "🌐",
//       title: "Web App Development",
//       description: "Custom web applications built with modern technologies",
//     },
//     {
//       icon: "⚡",
//       title: "Rails Upgrade",
//       description: "Upgrade and modernize your Rails applications",
//     },
//     {
//       icon: "🔌",
//       title: "API Development",
//       description: "Robust and scalable API solutions",
//     },
//     {
//       icon: "📱",
//       title: "Mobile App Development",
//       description: "Native and cross-platform mobile applications",
//     },
//     {
//       icon: "🎨",
//       title: "UI/UX Design Service",
//       description: "User-centered design and seamless experiences",
//     },
//     {
//       icon: "⚙️",
//       title: "DevOps",
//       description: "Streamline your development and deployment",
//     },
//     {
//       icon: "🔍",
//       title: "SEO Services",
//       description: "Optimize your digital presence",
//     },
//   ];

//   return (
//     <header className={`header ${isScrolled ? "scrolled" : ""}`}>
//       <div className="header-container">
//         <div className="logo">
//           AMBI<span className="logo-dot">SPINE</span>
//         </div>
//         <nav className="nav-menu">
//           <Link to="/" className="nav-link">
//             Home
//           </Link>
//           <div
//             className="nav-item-dropdown"
//             onMouseEnter={() => setIsDropdownOpen(true)}
//             onMouseLeave={() => setIsDropdownOpen(false)}
//           >
//             <Link to="/whatwedo" className="nav-link">
//               What We Do <span className="dropdown-arrow">▼</span>
//             </Link>
//             <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
//               {services.map((service, index) => (
//                 <Link
//                   to={`/services/${service.title
//                     .toLowerCase()
//                     .replace(/\s+/g, "-")}`}
//                   key={index}
//                   className="dropdown-item"
//                 >
//                   <span className="service-icon">{service.icon}</span>
//                   <div className="service-content">
//                     <h3 className="service-title">{service.title}</h3>
//                     <p className="service-description">{service.description}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <Link to="/service" className="nav-link">
//             Services
//           </Link>
//           <Link to="/aboutus" className="nav-link">
//             About Us
//           </Link>
//           <Link to="/career" className="nav-link">
//             Career
//           </Link>
//           <Link
//             to="/contact"
//             style={{ textDecoration: "none" }}
//             className="contact-btn"
//           >
//             Contact Us
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/AmbiSpine_logo.png";

const Header = ({ isScrolled }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    {
      icon: "🌐",
      title: "Web App Development",
      descriptions: "Custom web applications built with modern technologies",
      features: ["React", "Ruby on Rails", "Node.js"],
    },
    // {
    //   icon: "⚡",
    //   title: "Rails Upgrade",
    //   description: "Upgrade and modernize your Rails applications",
    //   features: ["Version Migration", "Performance", "Security"],
    // },
    // {
    //   icon: "🔌",
    //   title: "API Development",
    //   description: "Robust and scalable API solutions",
    //   features: ["RESTful", "GraphQL", "Microservices"],
    // },
    {
      icon: "📱",
      title: "Mobile App Development",
      descriptions: "Native and cross-platform mobile applications",
      features: ["iOS", "Android", "React Native"],
    },
    {
      icon: "🎨",
      title: "Web Designing Solution",
      descriptions: "Elegant and user-friendly web design",
      features: ["Wireframing", "Prototyping", "User Testing"],
    },
    {
      icon: "💼",
      title: "Business Solution",
      descriptions: "Comprehensive business strategy and support",
      features: ["Wireframing", "Prototyping", "User Testing"],
    },
    {
      icon: "☁️",
      title: "Cloud Solution",
      descriptions: "Cloud infrastructure and migration services",
      features: ["Wireframing", "Prototyping", "User Testing"],
    },
    {
      icon: "📊",
      title: "Digital Marketing Solution",
      descriptions: "Comprehensive digital marketing strategies",
      features: ["Wireframing", "Prototyping", "User Testing"],
    },
  ];
  // const services = [
  //   {
  //     icon: "💻",
  //     title: "Web App Development",
  //     description: "Custom web solutions using modern technologies",
  //     link: "/services/web-app",
  //   },
  //   {
  //     icon: "📱",
  //     title: "Mobile App Development",
  //     description: "Native and cross-platform mobile applications",
  //     link: "/services/mobile-app",
  //   },
  //   {
  //     icon: "🌐",
  //     title: "API Development",
  //     description: "Robust and scalable API solutions",
  //     link: "/services/api",
  //   },
  //   {
  //     icon: "🎨",
  //     title: "Web Designing Solution",
  //     description: "Elegant and user-friendly web design",
  //     link: "/services/web-design",
  //   },
  //   {
  //     icon: "💼",
  //     title: "Business Solution",
  //     description: "Comprehensive business strategy and support",
  //     link: "/services/business",
  //   },
  //   {
  //     icon: "☁️",
  //     title: "Cloud Solution",
  //     description: "Cloud infrastructure and migration services",
  //     link: "/services/cloud",
  //   },
  //   {
  //     icon: "📊",
  //     title: "Digital Marketing Solution",
  //     description: "Comprehensive digital marketing strategies",
  //     link: "/services/digital-marketing",
  //   },
  // ];
  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* <div className="logo">
          AMBI<span className="logo-dot">SPINE</span>
        </div> */}
        <Link to="/" className="header__logo">
          <img src={logo} alt="AmbiSpine Logo" className="header__logo-img" />
          {/* Uncomment below if you want to show text next to logo */}
          {/* <span className="header__logo-text">AMBISPINE</span> */}
          {/* AMBI<span className="logo-dot">SPINE</span> */}
        </Link>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <div
            className="nav-item-dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link to="/services" className="nav-link with-arrow">
              Services
              <span
                className={`dropdown-arrow ${isDropdownOpen ? "open" : ""}`}
              >
                ▼
              </span>
            </Link>

            <div className={`dropdown-mega ${isDropdownOpen ? "show" : ""}`}>
              <div className="dropdown-grid">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={`/services/${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    // to="/webdev"
                    className="service-card"
                  >
                    <span className="service-icon">{service.icon}</span>
                    <div className="service-content">
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-descriptions">
                        {service.descriptions}
                      </p>
                      <div className="feature-tagss">
                        {service.features.map((feature, idx) => (
                          <span key={idx} className="feature-tag">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="dropdown-footer">
                <p>Need a custom solution?</p>
                <button
                  style={{
                    padding: "8px 27px",
                    borderRadius: "8px",
                    outline: "none",
                  }}
                >
                  <Link to="/product" className="contact-link">
                    Visist our product →
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {/* <Link to="/service" className="nav-link">
            Services
          </Link> */}
          <Link to="/aboutus" className="nav-link">
            About Us
          </Link>
          <Link to="/career" className="nav-link">
            Career
          </Link>
          <Link
            to="/contact"
            className="contact-btn"
            style={{ textDecoration: "none" }}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

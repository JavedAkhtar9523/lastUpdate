import "./App.css";
import About from "./components/About/About";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Platform from "./components/Platform/Platform";
import Contact from "./components/Contacts/Contact";
import Career from "./components/Career/Career";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhatsappIcon from "./components/Home/WhatsppIcon";
import TermsAndPrivacyPage from "./components/TermsPrivacy/TermsAndPrivacyPage";
import { ThemeProviders } from "./components/Theme/ThemeProvider";
import "./components/Theme/theme.css";
import { createContext, useState, useEffect } from "react";

import Dashboard from "./layouts/dashboard";
import Team from "./components/Admin/Team";
import ProfileView from "./components/Admin/Profileview";
import ResetPassword from "./components/Admin/ResetPassword";
import Geography from "./pages/Geography";
import Line from "./pages/Line";
import Bar from "./pages/Bar";
import Pie from "./pages/Pie";
import Form from "./components/Admin/Form";
import ContactInformation from "./components/Admin/Contact";
import Invoice from "./components/Admin/Inovice";
import CalendarComponent from "./layouts/Calendar/Calender";
import Faq from "./components/Admin/Faq/Faq";
import AdminLayout from "./layouts/AdminLayout";
import NotFound from "./layouts/NotFound";
import JobForm from "./components/Admin/JobForm";
import JobManagement from "./components/Admin/Job/JobManagement";
import FeedbackInformation from "./components/Admin/FeedbackInformatio";
import TeamForm from "./components/Admin/TeamForm";
import EmployeeDataGrid from "./components/Admin/EmployeeTable";
import EmployeeForm from "./components/Admin/EmployeeForm";
import EmployeeInvoiceForm from "./components/Admin/InvoiceForm";
import HomeUpdated from "./components/Home/HomeUpdated";
import ServicePage from "./components/Service/ServicePage";
import ChangePassword from "./components/Admin/ChangePassword";
import { useSelector } from "react-redux";
import MobileAppDevelopmentPage from "./pages/mobileapp/MobileApp";
import ResponsiveWebDesign from "./pages/ResponsiveWeb/ResponsiveWebDesign";
import WebDevelopmentPage from "./pages/webapp/WebApp";
import CloudServices from "./pages/CloudService/CloudServices";
import CustomSoftwareDevelopment from "./pages/CustomSoftwareDevelopment/CustomSoftwareDevelopment";
import AiMl from "./pages/DataAnalytics/AiMl";
import DataAnalytics from "./pages/DataAnalytics/DataAnalytics";
import EnterpriseSolutions from "./pages/EnterpriseSolutions/EnterpriseSolutions";
import DevOpsSolutions from "./pages/CloudService/DevOpsSolutions";
import DigitalMarketingService from "./pages/DigitalMarketingService/DigitalMarketingService";
import CareerTable from "./components/Admin/CareerTable";
import CreateWebsite from "./pages/CreateWebsite/CreateWebsite";
import IphoneApp from "./pages/iPhoneApp/iPhoneApp";
import AndroidDevelopment from "./pages/AndroidApp/AndroidDevelopment";
import ContentWritingService from "./pages/ContentWriting/ContentWritingService";
import SearchEngine from "./pages/SearchEngine/SearchEngine";
import BusinessSolution from "./pages/BusinessSolutions/BusinessSolution";
import CloudMigration from "./pages/CloudMigration/CloudMigration";
import BusinessSolutionsPage from "./pages/BusinessSolution/BusinessSolution";
import CloudSolutionsPage from "./components/Hero/CloudSolution";
import MobileAppDevelopment from "./pages/mobileapps/MobileApp";
import ProductSpreads from "./pages/Spreads/ProductSpreads";
import HybridApp from "./pages/HybridApp/HybridApp";
import Hero from "./components/Hero/Hero";

export const MyContext = createContext();

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/invoice-form" element={<EmployeeInvoiceForm />} />
    <Route path="/team" element={<Team />} />
    <Route path="/career-view" element={<CareerTable />} />
    <Route path="/contacts" element={<ContactInformation />} />
    <Route path="/invoices" element={<Invoice />} />
    <Route path="/form" element={<Form />} />
    <Route path="/emp-view" element={<EmployeeDataGrid />} />
    <Route path="/emp-form" element={<EmployeeForm />} />
    <Route path="/team-form" element={<TeamForm />} />
    <Route path="/job-view" element={<JobManagement />} />
    <Route path="/feedback-view" element={<FeedbackInformation />} />
    <Route path="/job-form" element={<JobForm />} />
    <Route path="/calendar" element={<CalendarComponent />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="/bar" element={<Bar />} />
    <Route path="/pie" element={<Pie />} />
    <Route path="/line" element={<Line />} />
    <Route path="/geography" element={<Geography />} />
    <Route path="/profile" element={<ProfileView />} />
    <Route path="/change-password" element={<ChangePassword />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<HomeUpdated />} />
    <Route path="/services" element={<ServicePage />} />
    <Route
      path="/services/website-app-development"
      element={<CreateWebsite />}
    />
    <Route path="/services/ios-app-development" element={<IphoneApp />} />
    <Route
      path="/services/mobile-solution"
      element={<MobileAppDevelopment />}
    />
    <Route
      path="/services/android-app-development"
      element={<AndroidDevelopment />}
    />
    <Route path="/services/hybrid-app-development" element={<HybridApp />} />
    <Route
      path="/services/software-development-services"
      element={<CustomSoftwareDevelopment />}
    />
    <Route
      path="/services/content-management-system"
      element={<ContentWritingService />}
    />
    <Route path="/services/seo-service" element={<SearchEngine />} />
    <Route path="/services/business-solution" element={<BusinessSolution />} />
    <Route
      path="/services/cloud-solution-and-data-migration"
      element={<CloudMigration />}
    />
    <Route path="/aboutus" element={<About />} />
    <Route path="/product" element={<ProductSpreads />} />
    <Route path="/platform" element={<Platform />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/career" element={<Career />} />
    <Route path="/termsandprivacy" element={<TermsAndPrivacyPage />} />
    <Route
      path="/services/mobile-app-development"
      element={<MobileAppDevelopmentPage />}
    />
    <Route
      path="/services/web-designe-solution"
      element={<ResponsiveWebDesign />}
    />
    <Route
      path="/services/responsive-web-designing"
      element={<ResponsiveWebDesign />}
    />
    <Route path="/services/website-development" element={<Hero />} />
    <Route path="/services/cloud-solution" element={<CloudSolutionsPage />} />
    <Route
      path="/services/digital-marketing-solution"
      element={<DigitalMarketingService />}
    />
    <Route
      path="/services/web-designing-solution"
      element={<EnterpriseSolutions />}
    />
    <Route
      path="/custom-software-development"
      element={<CustomSoftwareDevelopment />}
    />
    <Route path="/enterprise-solutions" element={<EnterpriseSolutions />} />
    <Route path="/cloud-services" element={<CloudServices />} />
    <Route path="/data-analytics" element={<DataAnalytics />} />
    <Route path="/ai-ml" element={<AiMl />} />
    <Route
      path="/services/digital-marketing-services"
      element={<DigitalMarketingService />}
    />
    <Route path="/devops-solutions" element={<DevOpsSolutions />} />
    <Route
      path="/services/bussiness-solution"
      element={<BusinessSolutionsPage />}
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

function App() {
  const [theme, colorMode] = useMode();
  const [isLogin, setIsLogin] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    isAuthenticated,
    error: authError,
    loading: authLoading,
  } = useSelector((state) => state.auth);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MyContext.Provider value={{ isLogin, setIsLogin }}>
      <ToastContainer />
      <BrowserRouter>
        {isLogin ? (
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <AdminLayout>
                <AdminRoutes />
              </AdminLayout>
            </ThemeProvider>
          </ColorModeContext.Provider>
        ) : (
          <ThemeProviders>
            <Header isScrolled={isScrolled} />
            <WhatsappIcon />
            <PublicRoutes />
            <Footer />
          </ThemeProviders>
        )}
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;

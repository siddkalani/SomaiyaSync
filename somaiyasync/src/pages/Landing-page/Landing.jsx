import LNavbar from "./components/LNavbar/LNavbar";
import HeroSection from "./components/HeroSection/HeroSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import Workflow from "./components/Workflow/Workflow";
import Footer from "./components/Footer/Footer";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import "./landing.css"; // Import your CSS file

const Landing = () => {
  return (
    <>
    <div className="landing-all-main">
      <LNavbar />
      <div className="landing-content">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
      </div>
    </>
  );
};

export default Landing;

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import OtherFeatures from "../components/OtherFeatures";
import ExperienceSection from "../components/ExperienceSection";
import PremiumSection from "../components/PremiumSection";
import Testimonials from "../components/Testimonials";
import LatestBlogs from "../components/Blogs";
import ReadyToStartSection from "../components/Secondlastsection";
import FooterSection from "../components/Footer";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="min-h-screen bg-[#F2F3F7]">
      {/* <Navbar/> */}
      <Hero />
      <Features />
      <OtherFeatures />
      <ExperienceSection />
      <PremiumSection />
      <Testimonials />
      <LatestBlogs/>
      <ReadyToStartSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

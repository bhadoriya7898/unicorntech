import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Demo from "./pages/Demo";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ⭐ Smooth scrolling for #features-section and other hashes
function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<div><ContactUs /></div>} />
        <Route path="/demo" element={<div><Demo /></div>} />
      </Routes>


      <ScrollToHashElement />

      <Footer />
    </>
  );
}

export default App;

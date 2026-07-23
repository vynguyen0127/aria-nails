import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function ScrollAndRevealOnRoute() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refreshHard();
  }, [location.pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <BrowserRouter>
      <ScrollAndRevealOnRoute />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

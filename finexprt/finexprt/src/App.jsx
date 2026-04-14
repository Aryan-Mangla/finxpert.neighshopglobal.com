import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Features from "./components/Features";
import Products from "./components/Products";
import Calculator from "./components/Calculator";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import LeadForm from "./components/LeadForm";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <Products />
        <Calculator />
        <Blog />
        <Testimonials />
        <FAQ />
        <LeadForm />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

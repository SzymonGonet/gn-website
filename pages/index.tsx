import type { NextPage } from "next";
import AboutSection from "../views/AboutSection";
import TechnologiesSection from "../views/TechnologiesSection";
import ProductsSection from "../views/ProductsSection";
import ContactSection from "../views/ContactSection";
import HomeSection from "../views/HomeSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HomeSection />
      <AboutSection />
      <TechnologiesSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;

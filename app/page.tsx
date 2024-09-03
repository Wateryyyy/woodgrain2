import Image from "next/image";
import Logo from "../public/assets/images/logo.png";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <NavBar />
      <HeroSection />
      <ProjectsSection />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}


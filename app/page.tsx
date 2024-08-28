import Image from "next/image";
import Logo from "../public/assets/images/logo.png";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ProjectsSection />
    </>
  );
}

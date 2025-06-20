"use client";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import HomeImageComponent from "@/components/project-video";
import RecentWork from "@/components/recent-work";
import TransformBrands from "@/components/transform-brands";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Page() {
  return (
    <ParallaxProvider>
      <div className="">
        <Header />
        <Home />
        <HomeImageComponent />
        <TransformBrands />
        <RecentWork />
      </div>
      <div className="bg-black py-20 min-h-screen">
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

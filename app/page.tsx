"use client";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import HomeVideosComponent from "@/components/project-video";
import RecentWork from "@/components/recent-work";
import TransformBrands from "@/components/transform-brands";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Page() {
  return (
    <ParallaxProvider>
      <div className="container mx-auto px-4 sm:px-6 lg:px-35">
        <Header />
        <Home />
        <HomeVideosComponent />
        <TransformBrands />
        <RecentWork />
      </div>
      <div className="bg-black py-20 min-h-screen">
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

import Header from "@/components/Header";
import Home from "@/components/Home";
import HomeVideosComponent from "@/components/project-video";
import RecentWork from "@/components/recent-work";
import TransformBrands from "@/components/transform-brands";

export default function Page() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-35">
      <Header />
      <Home />
      <HomeVideosComponent />
      <TransformBrands />
      <RecentWork />
    </div>
  );
}

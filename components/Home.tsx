"use client";
import React, { useState, useEffect, useRef } from "react";
import { MoveDown } from "lucide-react";
import HomeVideosComponent from "./project-video";
import { Parallax } from "react-scroll-parallax";
const useTypewriter = (text: String, speed = 1000) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!text) return;

    setDisplayedText("");
    setIsDone(false);

    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) {
        clearInterval(intervalId);
        setIsDone(true);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);
  return [displayedText, isDone];
};

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const fullText =
    "Hi, I'm Kyson — Creative Director & Product Designer for founders, startups, and next-gen brands.";
  const [animatedText, isTypingDone] = useTypewriter(fullText, 50);

  return (
    <Parallax onEnter={() => setIsVisible(true)}>
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="min-h-[70vh]">
          <div className="relative">
            <div className="p-7 mt-20">
              <p className="text-7xl h-96">
                {" "}
                {animatedText}
                {!isTypingDone && <span className="ml-2 animate-pulse"></span>}
              </p>
            </div>
            <div className="w-100 absolute mr-5 right-30 -bottom-20 text-xl">
              <p className="mb-4">
                I recently led design at{" "}
                <span className="bg-black text-white px-3 rounded-full">
                  Rivian
                </span>{" "}
                for 5 years. I bring a decade+ of experience transforming
                brands, creating digital products, and telling stories people
                believe in.
              </p>
              <MoveDown size={80} className="text-orange-600" />
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default Home;

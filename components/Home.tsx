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
    "Hi, I’m Ash - I Design Products That Makes Sense To Real People.";
  const [animatedText, isTypingDone] = useTypewriter(fullText, 50);

  return (
    <Parallax onEnter={() => setIsVisible(true)}>
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="min-h-[70vh]">
          <div className="">
            <div className="p-7 my-20">
              <p className="text-7xl">
                {" "}
                {"H" + animatedText}
                {!isTypingDone && <span className="ml-2 animate-pulse"></span>}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-120 text-xl">
                <p className="mb-4">
                  I bring over 5 years of{" "}
                  <span className="bg-black text-white px-3 rounded-full">
                    experience
                  </span>{" "}
                  transforming brands & creating digital products that make
                  people feel understood, not just impressed.
                </p>
                <MoveDown size={80} className="text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default Home;

"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Background from "../Background";
import ImageCard from "./ImageCard";
import LeftCard from "./LeftCard";
import MyValues from "./MyValues";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // 애니메이션이 시작되면 관찰 종료
          }
        });
      },
      { threshold: 0.3 } // 30% 보이면 트리거
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={sectionRef}
      id="aboutSection"
      className="z-10 text-white flex justify-center items-center py-[7vh] px-2 relative w-full bg-black overflow-hidden"
    >
      <motion.div
        className=""
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="flex justify-center text-4xl font-bold">About</h1>
        <div className="flex lg:gap-[2vw] flex-col lg:flex-row w-full mt-[6vh]">
          <LeftCard />
          <div className="lg:items-center flex flex-col">
            <ImageCard />
          </div>
        </div>
        <MyValues />
      </motion.div>
      <Background bgColor={"bg-red-500"} />
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Background from "../Background";
import { handleScroll } from "../Navbar";

export default function HeroSection() {
  const [loading, setLoading] = useState(true);

  // 로딩 완료를 시뮬레이션하는 useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section
        id="heroSection"
        className="z-10 flex items-center justify-center lg:justify-start relative w-full h-[100vh] bg-black overflow-hidden gap-24"
      >
        <Image
          alt="HeroSection"
          src="/hero.svg"
          width={400}
          height={700}
          className="hidden  lg:block h-screen w-[30vw] object-cover opacity-50 hover:opacity-100 transition-opacity duration-1000"
          draggable="false"
        />
        {loading ? (
          <div className="h-full w-[30vw] flex items-center justify-center">
            <div className="h-[70px] flex mb-[15vh] w-full bg-gray-700 rounded-md animate-pulse"></div>
          </div>
        ) : (
          <motion.h1
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex mb-[15vh] flex-row h-[70px] items-center text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white"
          >
            <TypeAnimation
              sequence={[
                "라이브러리 호환성을 중요시하는",
                3000,
                "Front-End 신민호입니다.",
                3000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
              style={{ whiteSpace: "pre-line" }}
              cursor={false} // 기본 커서 제거
            />
            {/* 깜박이는 마지막 글자 */}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.5,
              }}
              className="pb-[10px] pl-1"
            >
              |
            </motion.span>

            <FaAnglesDown
              onClick={() => handleScroll("#aboutSection")}
              className="animate-bounce-slow cursor-pointer absolute hidden lg:block bottom-0 mb-[15vh] ml-[13vw] w-[50px] h-[50px] text-white"
            />
          </motion.h1>
        )}

        <Background bgColor={"bg-blue-500"} />
      </section>
    </>
  );
}

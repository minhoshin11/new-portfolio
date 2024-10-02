"use client";
import { FaAnglesDown } from "react-icons/fa6";

export default function ScrollButton() {
  const scrollDown = () => {
    const windowHeight = window.innerHeight; // 100vh 구하기
    window.scrollBy({
      top: windowHeight, // 100vh만큼 스크롤
      behavior: "smooth", // 부드러운 스크롤
    });
  };

  return (
    <FaAnglesDown
      onClick={scrollDown}
      className="animate-bounce-slow cursor-pointer absolute bottom-0 mb-[15vh] w-[50px] h-[50px] text-white"
    />
  );
}

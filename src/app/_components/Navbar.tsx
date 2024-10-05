"use client";
import { useEffect, useState } from "react";

export const handleScroll = (id: string) => {
  const section = document.querySelector(id);
  if (section) {
    const navbarHeight = 60; // 네브바의 높이
    const sectionTop = section.getBoundingClientRect().top + window.scrollY; // 페이지 상단에서의 위치 계산

    // 스크롤 애니메이션
    window.scrollTo({
      top: sectionTop - navbarHeight,
      behavior: "smooth",
    });
  }
};

// 섹션의 위치를 감지하는 함수
const getSectionPosition = (id: string, navbarHeight: number): number => {
  const section = document.querySelector(id) as HTMLElement | null;
  return section ? section.offsetTop - navbarHeight : 0;
};

export default function Navbar() {
  const [minhoShinColor, setMinhoShinColor] = useState("text-white");

  // 스크롤할 때 섹션에 따라 Minho Shin의 색상을 변경하는 함수
  const updateMinhoShinColor = () => {
    const navbarHeight = 60;
    const scrollPosition = window.scrollY + navbarHeight;

    const heroSectionTop = getSectionPosition("#heroSection", navbarHeight);
    const aboutSectionTop = getSectionPosition("#aboutSection", navbarHeight);
    const projectSectionTop = getSectionPosition(
      "#projectSection",
      navbarHeight
    );

    if (scrollPosition === navbarHeight) {
      // 페이지 맨 위에 있을 때 흰색으로
      setMinhoShinColor("text-white");
    } else if (
      scrollPosition >= heroSectionTop &&
      scrollPosition < aboutSectionTop
    ) {
      setMinhoShinColor("text-blue-500");
    } else if (
      scrollPosition >= aboutSectionTop &&
      scrollPosition < projectSectionTop
    ) {
      setMinhoShinColor("text-red-500");
    } else if (scrollPosition >= projectSectionTop) {
      setMinhoShinColor("text-purple-500");
    }
  };

  useEffect(() => {
    // 스크롤 이벤트 등록
    window.addEventListener("scroll", updateMinhoShinColor);
    return () => {
      // 컴포넌트가 언마운트될 때 스크롤 이벤트 제거
      window.removeEventListener("scroll", updateMinhoShinColor);
    };
  }, []);

  return (
    <nav className="z-20 flex h-[60px] items-center py-4 px-4 sm:px-8 justify-between text-white fixed mx-auto top-0 left-0 right-0 bg-[#121212] bg-opacity-90 border-b border-[#33353F]">
      <a
        onClick={() => handleScroll("#heroSection")} // 클릭 이벤트 추가
        className={`text-2xl font-semibold ${minhoShinColor} hover:text-red-500 transition-colors duration-500 cursor-pointer`}
      >
        Minho Shin
      </a>
      <div className="md:block md:w-auto">
        <ul className="flex gap-[20px] md:gap-0 p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
          <li
            onClick={() => handleScroll("#aboutSection")}
            className="block cursor-pointer text-white/70 md:text-xl md:p-0 hover:text-white hover:bg-white/10 md:hover:bg-transparent text-center hover:scale-110 transition-all transform"
          >
            About
          </li>
          <li
            onClick={() => handleScroll("#projectSection")}
            className="block cursor-pointer text-white/70 md:text-xl md:p-0 hover:text-white hover:bg-white/10 md:hover:bg-transparent text-center hover:scale-110 transition-all transform"
          >
            Project
          </li>
        </ul>
      </div>
    </nav>
  );
}

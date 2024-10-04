"use client";

import { projectData } from "@/data/Projects";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Background from "../Background";
import Card from "./component/Card";

export default function ProjectSection() {
  const [select, setSelect] = useState("All");
  const [selectedProjects, setSelectedProjects] = useState(
    [...projectData].sort((a, b) => b.id - a.id) // 초기 상태를 최신순으로 설정
  );
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // 선택된 태그에 따라 프로젝트를 필터링하는 함수
  const filterProjects = (tag: string) => {
    setSelect(tag); // 선택된 태그 업데이트

    if (tag === "All") {
      setSelectedProjects([...projectData].sort((a, b) => b.id - a.id)); // 'All'이면 모든 프로젝트를 최신순으로 정렬
    } else {
      const filtered = projectData.filter((project) =>
        project.tag.includes(tag)
      );
      setSelectedProjects([...filtered].sort((a, b) => b.id - a.id)); // 태그에 맞는 프로젝트만 최신순으로 상태에 저장
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
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
      id="projectSection"
      className="font-medium z-10 text-white flex items-center flex-col relative w-full gap-10 py-7 pb-[25vh] bg-black overflow-hidden"
    >
      <motion.h1
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold pt-[2vh]"
      >
        Project
      </motion.h1>

      {/* 태그 선택 버튼 */}
      <div className="flex flex-row gap-[4vw] font-sans text-2xl mt-[6vh]">
        {["All", "next.js", "react"].map((tag, index) => (
          <motion.h3
            key={tag}
            onClick={() => filterProjects(tag)} // 태그 클릭 시 필터링
            className={`border hover:bg-gray-800 border-gray-400 px-7 py-2 rounded-2xl cursor-pointer ${
              select === tag ? "bg-gray-700" : ""
            }`}
            variants={fadeIn}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"} // 애니메이션 설정
            transition={{ duration: 0.5, delay: index * 0.2 }} // 각 버튼마다 지연 시간 적용
            whileHover="hover"
            whileTap="active"
          >
            {tag}
          </motion.h3>
        ))}
      </div>

      {/* 필터링된 프로젝트 렌더링 */}

      <motion.div
        className={`flex items-center ${
          selectedProjects.length <= 3
            ? "justify-center flex-row"
            : "sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex-col"
        } gap-4 justify-items-center sm:px-[5vw]`}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {selectedProjects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </motion.div>

      {/* Background 컴포넌트를 한 번만 렌더링 */}
      <Background bgColor={"bg-purple-500"} />
    </section>
  );
}

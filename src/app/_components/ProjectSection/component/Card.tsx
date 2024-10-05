"use client";

import { ProjectType } from "@/data/Projects";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type CardProps = {
  project: ProjectType;
};

export default function Card({ project }: CardProps) {
  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
        className="border-gray-500 border-4 relative w-[80vw] sm:w-[45vw] md:w-[28vw] 2xl:w-[20vw] h-[30vh] perspective-[1000px] rounded-3xl overflow-hidden shadow-3xl"
      >
        {/* 카드 컨테이너 */}
        <div className="w-full h-full transition-all duration-500 transform-style-preserve-3d hover:opacity-100 group">
          {/* 카드 앞면 */}
          <div className=" bg-white absolute w-full h-full rounded-lg">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20" // 호버 시 오퍼시티 0.2
            />
          </div>

          {/* 카드 뒷면 */}
          <div className="text-xl absolute w-full h-full pt-4 px-4 bg-black text-white opacity-0 group-hover:opacity-85 transition-opacity duration-500 flex flex-col justify-between items-center text-center overflow-hidden rounded-lg">
            <div className="overflow-y-auto flex flex-col h-full w-full gap-3 py-2 px-2">
              <h2 className="text-2xl">{project.title}</h2>{" "}
              {/* 글자 크기 키움 */}
              <p>{project.subtitle}</p> {/* 프로젝트 링크 */}
              <h3 className="font-bold text-base">{project.period}</h3>{" "}
              {/* 글자 크기 키움 */}
              <ul className="flex flex-col gap-1 text-xl">
                {project.url.github && (
                  <li>
                    <a
                      href={project.url.github}
                      className="text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                )}
                {project.url.video && (
                  <li>
                    <a
                      href={project.url.video}
                      className="text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      영상
                    </a>
                  </li>
                )}
                {project.url.site && (
                  <li>
                    <a
                      href={project.url.site}
                      className="text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      배포주소
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <Link
          href={`/project/${project.id}`}
          className="absolute bottom-2 right-2 p-3 rounded-full bg-violet-400 text-white text-sm hover:text-black transition-colors duration-500"
        >
          보러가기
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}

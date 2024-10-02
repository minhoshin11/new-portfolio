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
        exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }} // 사라지는 애니메이션
        className="relative w-[80vw] sm:w-[45vw] md:w-[30vw] lg:w-[20vw] h-[30vh] perspective-[1000px]"
      >
        {/* 카드 컨테이너 */}
        <div className="w-full h-full transition-all duration-500 transform-style-preserve-3d hover:opacity-100">
          {/* 카드 앞면 */}
          <div className="bg-white absolute w-full h-full ">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-50"
            />
          </div>

          {/* 카드 뒷면 - 호버 시 나타나는 텍스트 */}
          <div className="absolute w-full h-full p-4 bg-white text-black opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between items-center text-center overflow-hidden">
            <div className="overflow-y-scroll h-full w-full">
              <h2 className="text-lg font-bold">{project.title}</h2>
              <p className="text-sm mt-2">{project.subtitle}</p>
              <p className="text-sm mt-1">{`기간: ${project.period}`}</p>
              <p className="text-sm mt-1">{`역할: ${project.role}`}</p>

              {/* 사용 스택 */}
              <div className="mt-2">
                <h3 className="font-bold text-sm">사용 스택:</h3>
                <ul className="text-xs mt-1">
                  {project.stacks.map((tech: string, index: number) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>

              {/* 프로젝트 링크 */}
              <div className="mt-2">
                <h3 className="font-bold text-sm">프로젝트 링크:</h3>
                <ul className="flex flex-col gap-2 text-xs my-2">
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
        </div>

        <Link
          href={`/project/${project.id}`}
          // target="_blank"
          className="absolute bottom-2 right-2 p-3 rounded-2xl bg-violet-400 text-white text-sm hover:text-black transition-colors duration-500"
        >
          보러가기
        </Link>
      </motion.div>
      )
    </AnimatePresence>
  );
}

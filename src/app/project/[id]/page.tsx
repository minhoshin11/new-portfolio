"use client";
import Background from "@/app/_components/Background";
import Footer from "@/app/_components/Footer";
import ImageCarousel from "@/app/_components/ProjectSection/component/ImageCarousel";
import { projectData } from "@/data/Projects";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BsPencilSquare } from "react-icons/bs";
import { FaCamera, FaGithub } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { MdOutlineArrowBack, MdPeopleAlt } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

export default function Page() {
  const { id } = useParams();
  const project = projectData.find((proj) => proj.id === Number(id));

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="z-10 p-10 flex flex-col  relative w-full bg-black overflow-hidden "
      >
        <Link href="/#projectSection" className="flex w-[50px] h-[50px]">
          <MdOutlineArrowBack className="flex w-[50px] h-[50px] hover:text-blue-400 transition-colors duration-300" />
        </Link>

        <div className="flex w-full items-center justify-center flex-col mt-[5vh] sm:mt-[0] sm:mb-[3vh] gap-2">
          <h1 className="text-5xl font-bold">{project?.title}</h1>
          <h3 className="text-2xl font-medium">{project?.subtitle}</h3>
        </div>
        {/* 상세내역들 */}
        <div className="flex flex-col lg:flex-row flex-start w-full lg:mx-[3vw] py-[3vh] gap-14 px-1">
          <ImageCarousel project={project} />
          <div className="flex flex-col justify-start gap-4 items-start lg:mx-0 mx-[5vw]">
            <h4 className="w-[150px] border border-blue-400 bg-blue-800 font-bold text-lg rounded-3xl flex justify-center p-1">
              {project?.division}
            </h4>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-2xl text-blue-500">목표</p>
              <p className="flex gap-2 items-center text-xl font-semibold">
                <FiTarget className="hidden md:block" /> {project?.purpose}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-2xl text-blue-500">기간</p>
              <p className="flex gap-2 items-center text-xl font-semibold">
                <SlCalender className="hidden md:block" /> {project?.period}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-2xl text-blue-500">인원</p>
              <p className="flex gap-2 items-center text-xl font-semibold">
                <MdPeopleAlt className="hidden md:block" /> {project?.members}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-bold text-2xl text-blue-500 ">Stack</p>
              <div className="flex flex-wrap gap-2">
                {project?.stacks.map((stack, i) => {
                  return (
                    <li
                      key={i}
                      className="border flex rounded-2xl px-[10px] py-[5px] bg-blue-900 border-blue-500 font-semibold"
                    >
                      {stack}
                    </li>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-2xl text-blue-500 ">프로젝트 역할</p>

              <ul className="flex gap-2 flex-wrap">
                {project?.role.map((item, index) => {
                  return (
                    <li
                      className="border flex rounded-2xl px-[10px] py-[5px] bg-blue-900 border-blue-500 font-semibold"
                      key={index}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="my-1 flex gap-2 flex-col">
              <h3 className="text-blue-500 font-bold text-2xl">문제 및 해결</h3>
              {project?.solving.map((item, index) => (
                <div key={index} className="ml-2 mb-4">
                  <p className="font-semibold text-lg">
                    <span className="text-red-500">문제 - </span> {item.problem}
                  </p>
                  <p className="font-semibold text-lg">
                    <span className="text-green-500">해결 - </span> {item.solve}
                  </p>
                </div>
              ))}
            </div>
            {/* 링크박스 */}
            <div className="flex flex-col gap-2 pb-[20vh]">
              <p className="font-bold text-2xl text-blue-500">Link</p>
              <div className="flex gap-8">
                <Link target="_blank" href={`${project?.url.Retrospective}`}>
                  <BsPencilSquare className="w-[40px] h-[40px]" />
                </Link>
                <Link target="_blank" href={`${project?.url.video}`}>
                  <FaCamera className="w-[40px] h-[40px]" />
                </Link>
                <Link target="_blank" href={`${project?.url.github}`}>
                  <FaGithub className="w-[40px] h-[40px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Background bgColor="bg-blue-500" />
      </motion.section>
      <Footer />
    </>
  );
}

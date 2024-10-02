"use client";
import { mainImageUrl, subImageUrl } from "@/data/About";
import Image from "next/image";
import Link from "next/link";
import { RxGithubLogo } from "react-icons/rx";
import { SiBloglovin } from "react-icons/si";

export default function ImageCard() {
  return (
    <section>
      <div className="flex  flex-col gap-11 justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-4xl ">Main</p>
          <div className="flex flex-row rounded-2xl border bg-gray-100">
            {Object.entries(mainImageUrl).map(([key, src]) => {
              return (
                <div key={key} className="p-2 ">
                  <Image
                    width={100}
                    height={100}
                    src={src}
                    alt={`${key} 이미지`} // alt 텍스트는 각 이미지에 따라 다르게 설정
                    className=" text-white  p-1"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-4xl ">Familiar</p>
          <div className="flex flex-row rounded-2xl border bg-gray-100">
            {Object.entries(subImageUrl).map(([key, src]) => {
              return (
                <div key={key} className="p-2 ">
                  <Image
                    width={100}
                    height={100}
                    src={src}
                    alt={`${key} 이미지`} // alt 텍스트는 각 이미지에 따라 다르게 설정
                    className="text-white p-1"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-4xl ">Click</p>
          <div className="flex flex-row items-center justify-center p-2 gap-[10vw] rounded-2xl border bg-gray-100">
            <Link
              href="https://github.com/minhoshin11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxGithubLogo className="text-black w-[60px] h-[60px] md:w-20 md:h-20 hover:text-gray-500 transition-colors duration-500" />
            </Link>
            <Link
              href="https://dailycoding777.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiBloglovin className="text-black w-[60px] h-[60px] md:w-20 md:h-20 hover:text-red-400 transition-colors duration-500" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

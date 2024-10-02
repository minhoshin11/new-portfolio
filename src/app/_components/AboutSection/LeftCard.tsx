"use client";
import { myData } from "@/data/About";
import Image from "next/image";
import { FaHome, FaRegAddressCard } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdCastForEducation } from "react-icons/md";
import CopyNumber from "./CopyNumber";

export default function LeftCard() {
  return (
    <div className="flex mb-[10vh] sm:mb-0 mt-[48px] items-center flex-col ">
      <div className="flex gap-[30px] flex-col sm:flex-row sm:gap-4 lg:flex-col 2xl:flex-col">
        <div className="gap-[5vh] md:gap-0 relative w-[200px] h-[250px] overflow-hidden rounded-2xl">
          <Image
            src="/me.svg"
            alt="이미지"
            fill={true}
            priority={true}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 200px"
          />
        </div>
        <div className="font-semibold text-2xl flex flex-col justify-center gap-[10px] text-bold">
          <div className="text-white flex mb-2 gap-2 flex-col">
            <p className="flex flex-row gap-2 items-center text-center">
              <FaRegAddressCard />
              {myData.name}
            </p>

            <p className="flex flex-row gap-2 items-center text-center">
              <LiaBirthdayCakeSolid /> {myData.birth}
            </p>
            <p className="flex flex-row gap-2 items-center text-center">
              <FaHome />
              {myData.address}
            </p>
            <p className="flex flex-row gap-2 items-center text-center">
              <MdCastForEducation />
              {myData.education}
            </p>
            <p className="flex flex-row gap-2 items-center text-center mb-1">
              <IoPhonePortraitOutline />
              {myData.phone}
            </p>
            <div className="w-full">
              <CopyNumber type="Email" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

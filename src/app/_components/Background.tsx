"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { generateRandomMovement, starVariants } from "./HeroSection/Functions";

// 별의 개수
const stars = Array.from({ length: 50 });

// 별 스타일 타입 정의
type StarStyle = {
  width: string;
  height: string;
  top: string;
  left: string;
};

export default function Background({ bgColor }: { bgColor: string }) {
  // 별 스타일을 저장할 state
  const [starStyles, setStarStyles] = useState<StarStyle[]>([]);

  useEffect(() => {
    // 랜덤 스타일 생성
    const styles: StarStyle[] = stars.map(() => ({
      width: `${Math.random() * 3 + 2}px`,
      height: `${Math.random() * 3 + 2}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setStarStyles(styles);
  }, []);

  return (
    <>
      {starStyles.map((style, i) => {
        const randomMovement = generateRandomMovement(); // 각각의 별에 랜덤한 이동값을 부여
        return (
          <motion.div
            key={i}
            custom={randomMovement} // custom 값을 명시적으로 전달
            className={`absolute rounded-full ${bgColor} z-[-1]`}
            style={style}
            variants={starVariants}
            initial="initial"
            animate="animate"
          />
        );
      })}
    </>
  );
}

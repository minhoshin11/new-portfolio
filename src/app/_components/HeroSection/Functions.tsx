import { Variants } from "framer-motion";

// 랜덤한 x, y 위치와 이동 범위를 생성하는 함수
export const generateRandomMovement = () => {
  return {
    xMove: Math.random() * 200 - 100, // -100에서 100 사이의 x 이동
    yMove: Math.random() * 200 - 100, // -100에서 100 사이의 y 이동
  };
};

// Variants 타입을 명확히 정의
export const starVariants: Variants = {
  initial: { opacity: 0 },
  animate: (custom: { xMove: number; yMove: number }) => ({
    opacity: [0, 1, 0],
    x: [0, custom.xMove],
    y: [0, custom.yMove],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror", // 부드러운 반복
    },
  }),
};

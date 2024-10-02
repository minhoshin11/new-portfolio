export type MyDataType = {
  name: string;
  birth: string;
  address: string;
  education: string;
  email: string;
  phone: string;
};

export const myData: MyDataType = {
  name: "신민호",
  birth: "1997.06.13",
  address: "서울시 마포구",
  education: "단양고등학교",
  email: "tlsalsgh777@naver.com",
  phone: "01022377592",
};
//기술스택
type MainImageUrlType = {
  react: string;
  firebase: string;
  github: string;
  js: string;
  nextjs: string;
  tailwind: string;
  typescript: string;
  cssmodules: string;
};

export const mainImageUrl: MainImageUrlType = {
  js: "/stack/javascript-color.svg",
  typescript: "/stack/typescript-color.svg",
  cssmodules: "/stack/cssmodules-color.svg",
  react: "/stack/react-color.svg",
  nextjs: "/stack/nextdotjs-color.svg",
  github: "/stack/github-color.svg",
  tailwind: "/stack/tailwindcss-color.svg",
  firebase: "/stack/firebase-color.svg",
};
//서브 스택
type SubImageUrlType = {
  storybook: string;
  slack: string;
  discord: string;
  git: string;
  mongodb: string;
  figma: string;
  tsnode: string;
  node: string;
};

export const subImageUrl: SubImageUrlType = {
  node: "/stack/nodedotjs-color.svg",
  tsnode: "/stack/tsnode-color.svg",
  storybook: "/stack/storybook-color.svg",
  mongodb: "/stack/mongodb-color.svg",
  figma: "/stack/figma-color.svg",
  git: "/stack/git-color.svg",
  discord: "/stack/discord-color.svg",
  slack: "/stack/slack-color.svg",
};

//MyValues
export const myValues = [
  {
    title: "무엇을 해야하는지",
    detail:
      "필수적인 요소,불필요한 요소,필수적이지 않지만 하고 싶은 요소 등을 나눕니다.",
  },
  {
    title: "라이브러리 호환성",
    detail: `신기술이 무조건 좋을 수 없기에 숫자로 되어있는 버전을 확인해 프로젝트에 도입합니다.`,
  },
  {
    title: "이 코드는 돈을 벌어오는가?",
    detail:
      "무조건적인 클린코드보다 상업적 목적에 맞는지,사용자의 편의를 위하는지가 더 중요합니다.",
  },
];

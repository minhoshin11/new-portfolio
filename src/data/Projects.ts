export type ProjectType = {
  id: number;
  thumbnail: string;
  title: string;
  subtitle: string;
  division: string;
  purpose: string;
  period: string;
  members: string;
  stacks: string[];
  role: string[];
  solving: { problem: string; solve: string }[];
  url: {
    Retrospective: string | null;
    github: string | null;
    video?: string | null;
    site?: string | null;
  };
  slideImg: string[];
  tag: string[];
};

export const projectData: ProjectType[] = [
  {
    id: 1,
    thumbnail: "https://ifh.cc/g/GVPJAD.jpg",
    title: "Landing",
    subtitle: "한국인과 한국에 사는 외국인의 커뮤니티",
    purpose: "외국인의 한국생활 정착을 목표",
    period: "2024.30.26 ~ 2024.04.26",
    role: [
      "project build",
      "로그인",
      "메인페이지",
      "모임생성",
      "게시글/일정 등록",
      "게시글 상세보기",
    ],
    division: "Team Project",
    members: "기획 1명,Front 3명, Back 3명",
    stacks: [
      "Typescript",
      "React",
      "Axios",
      "CSS3",
      "Styled Components",
      "Amazon EC2",
    ],
    url: {
      Retrospective: "https://dailycoding777.tistory.com/21",
      github: "https://github.com/OZ-Coding-School/oz_01_collabo-005",
      video: "https://www.youtube.com/watch?v=Pt6Pm0DsJaI",
    },

    slideImg: [
      "https://ifh.cc/g/GVPJAD.jpg",
      "https://ifh.cc/g/yFmfGy.png",
      "https://ifh.cc/g/WXkPcX.jpg",
      "https://ifh.cc/g/HGOc5A.jpg",
      "https://ifh.cc/g/hlxSWP.jpg",
      "https://ifh.cc/g/gpZXTA.jpg",
    ],
    solving: [
      {
        problem: "이것이 문제였고",
        solve: "이걸 고쳤습니다",
      },
      { problem: "이게 문제2", solve: "이게 문제해결2" },
    ],
    tag: ["All", "react"],
  },
  {
    id: 2,
    thumbnail: "https://ifh.cc/g/j2GSv4.jpg", // 실제 이미지 경로를 입력하세요
    title: "Cook-Bap",
    subtitle: "1인가구를 위한 요리 커뮤니티",
    purpose: "자취인,1인가구 등 남는 식재료를 이용한 레시피 공유 사이트",
    period: "2024.05.02~2024.05.31",
    role: [
      "Project Build",
      "JWT를 사용한 로그인",
      "카카오 로그인",
      "게시판댓글 CRUD",
      "채팅",
      "axios 설정,로딩",
    ],
    division: "Team Project",
    members: "Front 4명 , Back 3명",
    stacks: [
      "Typescript",
      "React",
      "Axios",
      "SocketIo",
      "Styled-components",
      "CSS-modules",
      "NGINX",
    ],
    url: {
      Retrospective: "https://dailycoding777.tistory.com/22",
      github: "https://github.com/OZ-Coding-School/oz_01_main-004-FE",
      video: "https://www.youtube.com/watch?v=033BFU8h00Q",
    },

    slideImg: [
      "https://ifh.cc/g/j2GSv4.jpg",
      "https://ifh.cc/g/zcyH5s.png",
      "https://ifh.cc/g/YQ2TpF.jpg",
      "https://ifh.cc/g/D4WYoJ.jpg",
      "https://ifh.cc/g/z1nlcN.jpg",
      "https://ifh.cc/g/sbOxDw.jpg",
      "https://ifh.cc/g/XLn3bH.jpg",
    ],
    solving: [
      {
        problem: "이것이 문제였고",
        solve: "이걸 고쳤습니다",
      },
      { problem: "이게 문제2", solve: "이게 문제해결2" },
    ],
    tag: ["All", "react"],
  },
  // {
  //   id: 3,
  //   thumbnail: "/coding.jpg", // 실제 이미지 경로를 입력하세요
  //   title: "Portfolio Website",
  //   subtitle: "나중에 블로그 ㄱ",
  //   purpose: "이게 내 플젝 목표",
  //   period: "2023.12.24 - 2023.12.31",
  //   role: [""] ,
  //   division: "Solo Project",
  //   members: "1인",
  //   stacks: [
  //     "Typescript",
  //     "Tailwind-css",
  //     "Next.js",
  //     "React",
  //     "Framer-motion",
  //     "Vercel",
  //     "Figma",
  //   ],
  //   url: {
  //     Retrospective: "대충 암거나",
  //     github: "https://github.com/ko9612/portfolio_website",
  //     video: null,
  //   },

  //   slideImg: [
  //     "path/to/portfolio_slide2.jpg",
  //     "path/to/portfolio_slide3.jpg",
  //     "path/to/portfolio_slide4.jpg",
  //     "path/to/portfolio_slide5.jpg",
  //     "path/to/portfolio_slide6.jpg",
  //   ],
  //   solving: [
  //     {
  //       problem: "이것이 문제였고",
  //       solve: "이걸 고쳤습니다",
  //     },
  //     { problem: "이게 문제2", solve: "이게 문제해결2" },
  //   ],
  //   tag: ["All", "next.js"],
  // },
  {
    id: 4,
    thumbnail: "https://ifh.cc/g/T4jdjC.jpg", // 실제 이미지 경로를 입력하세요
    title: "Flaw Detector",
    subtitle: "코드 취약점 솔루션",
    purpose: "작성한 코드의 보안취약점을 AI llama3를 통해 분석 및 솔루션 제공",
    period: "2024.08.05 - 진행중",
    role: [
      "웹크롤링 구현",
      "크롤링 번역",
      "검색기능",
      "client-server firebase 연동",
      "검사페이지 북마크",
    ],
    division: "Solo Project",
    members: "Front 5명",
    stacks: [
      "Typescript",
      "Tailwind-css",
      "Next.js",
      "Firebase",
      "lamma 3",
      "Framer-motion",
      "Storybook",
      "Google-Translate",
      "dotenv",
      "pupeteer",
    ],
    url: {
      Retrospective: "대충 암거나",
      github: "https://github.com/hyeonji1125/sfacspace-06-project",
      site: "https://sfacspace-06-project.vercel.app/",
    },

    slideImg: [
      "https://ifh.cc/g/T4jdjC.jpg", //메인
      "https://ifh.cc/g/8JxW7l.jpg", //다크모드
      "https://ifh.cc/g/5Ox7hO.jpg", //라이브러리1
      "https://ifh.cc/g/XqCw6D.jpg", // 라이브러리2
      "https://ifh.cc/g/rh9oDW.jpg", //로그인
      "https://ifh.cc/g/nFaQxQ.jpg", //테스트0
      "https://ifh.cc/g/1NXJgw.jpg", //테스트1
      "https://ifh.cc/g/MSFATb.jpg", //테스트2
      "https://ifh.cc/g/AS9r6j.jpg", //테스트3
      "https://ifh.cc/g/Zykthg.jpg", //search1
      "https://ifh.cc/g/lh0gN8.jpg", //search2
    ],
    solving: [
      {
        problem: "이것이 문제였고",
        solve: "이걸 고쳤습니다",
      },
      { problem: "이게 문제2", solve: "이게 문제해결2" },
    ],
    tag: ["All", "next.js"],
  },
];

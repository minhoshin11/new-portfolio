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
    Retrospective?: string | null;
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
    period: "2024.03.30 ~ 2024.04.26",
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
        problem:
          "로그인,로그아웃의 상태가 즉각적으로 네브바에 반영이 안되는 문제",
        solve: "contextAPI를 사용해 로그인상태를 전역적으로 관리",
      },
      {
        problem:
          "폴더구조가 직관적이지 않아 컴포넌트를 찾는 시간을 상당히 할애",
        solve: "Apis,Components,Context,Pages 등 직관적으로 폴더를 나눔",
      },
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
        problem: "netlify 배포 불가오류",
        solve: "검색 -> netlify.toml 필요 -> 틀에 맞춰 작성",
      },
      {
        problem: "async처리된 axios함수의 Refresh-Token 무한 Get요청",
        solve: "Refresh-Token 기한마저 끝일 때 로그아웃 로직 구현",
      },
    ],
    tag: ["All", "react"],
  },
  {
    id: 3,
    thumbnail: "https://ifh.cc/g/s9y3cT.jpg", // 실제 이미지 경로를 입력하세요
    title: "Portfolio-frist",
    subtitle: "처음으로 만드는 포트폴리오",
    purpose: "내가 어떤사람인지 알리기 위함",
    period: "2024.06.03 - 2024.06.17",
    role: ["모든 부분"],
    division: "Solo Project",
    members: "1인",
    stacks: ["React", "Typescript", "CSS-Modules", "React-icons", "netlify"],
    url: {
      site: "https://minhoshin.netlify.app/",
      github: "https://github.com/minhoshin11/portfolio",
    },

    slideImg: [
      "https://ifh.cc/g/s9y3cT.jpg",
      "https://ifh.cc/g/SJdnG3.jpg",
      "https://ifh.cc/g/F6oX9n.jpg",
      "https://ifh.cc/g/J4WgLo.jpg",
      "https://ifh.cc/g/s6SZdA.jpg",
    ],
    solving: [
      {
        problem: "기획,디자인에 대한 어려움",
        solve: "피그마를 활용해 초안을 구성하고 코딩",
      },
    ],
    tag: ["All", "react"],
  },
  {
    id: 5,
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
    division: "Team Project",
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
      Retrospective: "https://dailycoding777.tistory.com/62",
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
        problem: " SPA사이트 게시글주소가 변하지 않아 웹크롤링 불가",
        solve: "라이브러리 cheerio->pupeteer로 변경 후 사용",
      },
      {
        problem: "node.js를 이용해 크롤링 번역 했을 때 403, Syntax 에러 발생",
        solve: "콘솔확인 -> env리딩문제 -> undefined인 것을 확인, dotenv 사용",
      },
      {
        problem: "북마크 클릭 시 페이지 리렌더링 (이벤트 버블링1)",
        solve: "event.stopPropagation()라는 메소드를 사용하여 해결",
      },
      {
        problem: "북마크목록버튼 더블클릭(이벤트 버블링2)",
        solve:
          "여백 클릭하면 목록을 닫는 기능 때문에 생긴문제 -> debounce를 적용",
      },
    ],
    tag: ["All", "next.js"],
  },
  {
    id: 6,
    thumbnail: "https://ifh.cc/g/3jkHSV.jpg", // 실제 이미지 경로를 입력하세요
    title: "New Portfolio(반응형)",
    subtitle: "두번째로 만드는 포트폴리오",
    purpose: "어떤 기기에서도 볼 수 있는 포트폴리오",
    period: "2024.09.24 - 진행중",
    role: ["모든 부분"],
    division: "Solo Project",
    members: "Front 1명",
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
      Retrospective: "https://dailycoding777.tistory.com/63",
      github: "https://github.com/minhoshin11/new-portfolio",
      site: "https://www.shinminho.com/",
    },

    slideImg: [
      "https://ifh.cc/g/3jkHSV.jpg",
      "https://ifh.cc/g/qYhsVn.jpg",
      "https://ifh.cc/g/n2G6N0.jpg",
      "https://ifh.cc/g/PjT4Vq.jpg",
      "https://ifh.cc/g/5D9HAv.jpg",
    ],
    solving: [
      {
        problem: "도메인 구매 후 https 사용불가",
        solve:
          "AWS Certificate Manager에서 구매한 사이트 주소로 ssl인증서 발급",
      },
    ],
    tag: ["All", "next.js"],
  },
];

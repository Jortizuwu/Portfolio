import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  IoMdGitBranch,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoSass,
} from "react-icons/io";

export const bio = [
  { age: "1999", descrition: "Bron in Monteria, Colombia." },
  { age: "2017", descrition: "High school graduate." },
  { age: "2018 to present", descrition: "College Admission." },
];

export const social = [
  {
    name: "@Jortizuwu",
    ico: <IoLogoGithub />,
    url: "https://github.com/Jortizuwu",
  },
  {
    name: "@OrtozJose",
    ico: <IoLogoTwitter />,
    url: "https://twitter.com/OrtozJose",
  },
  {
    name: "@jojo_owu",
    ico: <IoLogoInstagram />,
    url: "https://www.instagram.com/jojo_owu/",
  },
];

export const skills = [
  {
    name: "JavaScript",
    ico: <IoLogoJavascript className="ml-2" />,
  },
  {
    name: "Css",
    ico: <IoLogoCss3 className="ml-2" />,
  },
  {
    name: "HTML",
    ico: <IoLogoHtml5 className="ml-2" />,
  },
  {
    name: "React",
    ico: "",
  },
  {
    name: "Nexjs",
    ico: "",
  },
  {
    name: "TailWind css",
    ico: "",
  },
  {
    name: "Boostrap",
    ico: "",
  },
  {
    name: "Sass",
    ico: <IoLogoSass className="ml-2" />,
  },
  {
    name: "Git",
    ico: <IoMdGitBranch className="ml-2" />,
  },
  {
    name: "GitHub",
    ico: <IoLogoGithub className="ml-2" />,
  },
];

export const postInfo = [
  {
    id: "youtube",
    title: "whater app",
    descrition: "Lorem Ipsum is simply",
    img: "/card.png",
    url: "https://github.com/vercel/next.js/tree/canary/examples/dynamic-routing/pages/post/%5Bid%5D",
  },
  {
    id: "youtube2",
    title: "whater app 2",
    descrition: "Lorem Ipsum is simply",
    img: "/card.png",
    url: "https://github.com/vercel/next.js/tree/canary/examples/dynamic-routing/pages/post/%5Bid%5D",
  },
];

export const worksInfo = [
  {
    id: "whaterapp",
    title: "whater app",
    descrition:
      "Sinple application to know the clina in any part of the world, thanks to the whaterApi api.",
    img: "/images/works/watherhome.jpeg",
    platform: "web",
    stack: "React, context-api",
    moreImg: [
      "/images/works/watherhome.jpeg",
      "/images/works/watherhomeresp.jpeg",
      "/images/works/watherinfo.jpeg",
    ],
    date: "2021",
    webUrl: "https://my-weatherapp-jojouwu.herokuapp.com/",
    codeUrl: "https://github.com/Jortizuwu/wheater-app",
  },
  {
    id: "quizcountry",
    title: "Quiz country",
    descrition:
      "Quiz of capitals of cuidades, conctada to the api country PD: the api changed its policies, working on it uwu",
    img: "/images/works/quizhome.jpeg",
    platform: "web",
    stack: "React, context-api",
    moreImg: ["/images/works/quizhome.jpeg"],
    date: "2021",
    webUrl: "https://quizcountryjojouwu.herokuapp.com/",
    codeUrl: "https://github.com/Jortizuwu/country_quiz",
  },
  {
    id: "catwiki",
    title: "Cat wiki",
    descrition:
      "Application that shows you the information of various breeds of cats",
    img: "/images/works/cathome.jpeg",
    platform: "web",
    stack: "React, context-api",
    moreImg: [
      "/images/works/cathome.jpeg",
      "/images/works/catinfo.jpeg",
      "/images/works/catfav.jpeg",
      "/images/works/catmobileinfo.jpeg",
      "/images/works/catresp.jpeg",
    ],
    date: "2021",
    webUrl: "https://catwiki-jojouwu.herokuapp.com/",
    codeUrl: "https://github.com/Jortizuwu/catwiki",
  },
  {
    id: "rockpapersiccisor",
    title: "rock paper scissors",
    descrition:
      "application of the polular set of rock, paper, scissors, made in nexjs, the application has a server created with nodejs, and a database of no sql, nongodb",
    img: "/images/works/paperockdfull.jpeg",
    platform: "web",
    stack: "Nexjs, Nodejs, MongoDB",
    moreImg: [
      "/images/works/paperockdfull.jpeg",
      "/images/works/rockpaperdra.jpeg",
      "/images/works/rockuserwin.jpeg",
      "/images/works/rpsmobile.jpeg",
      "/images/works/rpstop.jpeg",
    ],
    date: "2021",
    webUrl: "https://rockpaperscissors-six.vercel.app/",
    codeUrl: "https://github.com/Jortizuwu/Rock-Paper-Scissors",
    colaborardor: {
      name: "Roberto Berrocal",
      gitProfileUrl: "https://github.com/R-Berrocal",
    },
  },
];

import clevisScreenshot from "../assets/clevis_screenshot.png";
import grappaScreenshot from "../assets/grappa_screenshot.png";
import volcaScreenshot from "../assets/volca_screenshot.png";
import quizlyScreenshot from "../assets/quizly_screenshot.png";

type ProjectItem = {
  name: string;
  link: string;
  image?: string;
  description: string;
};

export const projects: ProjectItem[] = [
  {
    name: "Grappa",
    link: "https://grappa.app",
    image: grappaScreenshot,
    description: `Grappa is an invoicing platform directed to distillers to easily manage their invoices and keeping track of excise duty taxes.`,
  },
  {
    name: "Clevis",
    link: "https://clevis.app",
    image: clevisScreenshot,
    description: `Clevis is a SaaS solution where users can easily compose apps by combining a set of provided steps. The solution 
    focuses especially on make it it easier to use the new AI solutions as Chat GPT and combine them with other data sources
    and processing to create apps with real business value.`,
  },

  {
    name: "Volca",
    link: "https://volca.io",
    image: volcaScreenshot,
    description: `Volca is a SaaS boilerplate that allows you to speed up time to market of your SaaS project by providing common functionality
    in SaaS solutions such as authentication, payments and more. It also provides infrastructure configured in AWS CDK to easily deploy the project
    to the cloud.`,
  },
  {
    name: "Quizly",
    link: "https://quizlyapp.com",
    image: quizlyScreenshot,
    description: `Quizly is the game where you can challenge your friends to professionally made quizes, with different 
    scoring modes, question and answering types!

    This project consists of several different applications, like a cross-platform react native app for playing the game, 
    an API that stores quizes and provides matchmaking, an API that allows admins to easily create new quizes and 
    a dockerized game server managing the games with websockets.`,
  },
];

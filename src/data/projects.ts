import clevisScreenshot from "../assets/clevis_screenshot.png";
import grappaScreenshot from "../assets/grappa_screenshot.png";
import volcaScreenshot from "../assets/volca_screenshot.png";
import quizlyScreenshot from "../assets/quizly_screenshot.png";
import andyScreenshot from "../assets/andy_screenshot.webp";
import ratepilotScreenshot from "../assets/ratepilot_screenshot.webp";

type ProjectItem = {
  name: string;
  link?: string;
  image?: string;
  description: string;
};

export const projects: ProjectItem[] = [
  {
    name: "Andy - your AI stylist",
    link: "https://andy.style",
    image: andyScreenshot,
    description: `Andy is an AI stylist for the wardrobe you already own. You photograph your clothes, it catalogs
    each piece automatically and suggests outfits based on your taste, the weather and where you're headed.
    Built end to end as a Bun monorepo: a React Native / Expo app, an Elysia API, an Astro marketing site, and
    a Gemini-powered tool-calling agent that assembles outfits from your real wardrobe. Available on the App
    Store and Google Play.`,
  },
  {
    name: "RatePilot",
    link: "https://ratepilot.se",
    image: ratepilotScreenshot,
    description: `RatePilot tracks Swedish mortgage rates and the Riksbank policy rate over time, making it
    easy to compare lenders instead of digging through PDFs and bank websites. It pulls from the Riksbank's
    API, scraped lender rates and Finansinspektionen's published averages, all run as scheduled jobs writing
    to plain data files in git, no database or servers required.`,
  },
  {
    name: "Grappa",
    image: grappaScreenshot,
    description: `Grappa is an invoicing platform directed to distillers to easily manage their invoices and keeping track of excise duty taxes.`,
  },
  {
    name: "Clevis",
    image: clevisScreenshot,
    description: `Clevis is a SaaS solution where users can easily compose apps by combining a set of provided steps. The solution 
    focuses especially on make it it easier to use the new AI solutions as Chat GPT and combine them with other data sources
    and processing to create apps with real business value.`,
  },

  {
    name: "Volca",
    image: volcaScreenshot,
    description: `Volca is a SaaS boilerplate that allows you to speed up time to market of your SaaS project by providing common functionality
    in SaaS solutions such as authentication, payments and more. It also provides infrastructure configured in AWS CDK to easily deploy the project
    to the cloud.`,
  },
  {
    name: "Quizly",
    image: quizlyScreenshot,
    description: `Quizly is the game where you can challenge your friends to professionally made quizes, with different 
    scoring modes, question and answering types!

    This project consists of several different applications, like a cross-platform react native app for playing the game, 
    an API that stores quizes and provides matchmaking, an API that allows admins to easily create new quizes and 
    a dockerized game server managing the games with websockets.`,
  },
];

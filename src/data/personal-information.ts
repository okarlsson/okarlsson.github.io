import profilePicture from "../assets/oskar_profile.jpg";

type PersonalInformation = {
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
  linkedIn?: string;
  github?: string;
  usps: string[];
  mission: string;
  about: string;
};

export const personalInformation: PersonalInformation = {
  firstName: "Oskar",
  lastName: "Karlsson",
  email: "oskarkarlsson1993@gmail.com",
  linkedIn: "https://linkedin.com/in/oskar-karlsson/",
  github: "https://github.com/okarlsson",
  profilePicture,
  usps: [
    "a Software Engineer",
    "a Freelancer",
    "a Startup Founder",
    "a Software Architect",
  ],
  mission:
    "On a mission to create awesome products by leveraging my competence as a full stack developer and experience from a wide variety of companies and projects.",
  about: `
    I'm a full stack developer who loves to tackle new challenges and learn different tools and techniques. 
  
    During my years in the industry I've worked with a multitude of different technologies ranging from frontend applications 
    and native apps, to backend applications, databases, cloud and DevOps.

    I've worked with a wide range of different companies, from implementing the first minimum viable product with a start-up to 
    building on large enterprise systems serving thousands of users. During this time I've encountered a lot of different 
    programming languages, tools, frameworks and ways of working, which has turned me into a very versatile software engineer.`,
};

import klarnaImage from "../assets/klarna.svg";
import teliaImage from "../assets/telia.svg";
import golferSwedenImage from "../assets/golfer_sweden.png";
import capgeminiImage from "../assets/capgemini.svg";
import weknowitImage from "../assets/weknowit.webp";

type ExperienceItem = {
  company: string;
  link?: string;
  role: string;
  image?: string;
  start: Date;
  end?: Date;
  description: string;
  tags: {
    category: string;
    tags: string[];
  }[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Relera Consulting",
    role: "Freelance Software Engineer",
    start: new Date(2020, 2, 1),
    description: `Relera Consulting is my own consulting company that I started to be able to work as a freelance developer. 
      Starting my own company has been a fun experience and has lead to a lot of knowledge about how to manage finances, contracts, sales and more!`,
    tags: [],
  },
  {
    company: "Klarna",
    link: "https://klarna.se",
    role: "Consulting Senior Software Engineer",
    start: new Date(2021, 10, 1),
    end: new Date(2023, 5, 1),
    image: klarnaImage,
    description: `
          At Klarna I took part in a project to implement the next generation of customer authentication to create a central location
          where users could sign in instead of the multiple current solutions.

          The work consisted of both managing requirements such as writing RFCs to discover potential solutions and actual implementation of the service. 
          There were a lot of challenges and learnings in having to communicate and collaborate with a large number of teams all relying on the authentication solution.

          On the technology side the solution was implemented as a containerised microservice and deployed on AWS. 
`,
    tags: [
      {
        category: "Technologies",
        tags: [
          "node.js",
          "TypeScript",
          "Golang",
          "Java",
          "OIDC",
          "React",
          "REST",
          "GraphQL",
          "PostgreSQL",
          "Redis",
          "Docker",
        ],
      },
      {
        category: "Cloud Services",
        tags: [
          "ECS",
          "RDS",
          "ElastiCache",
          "S3",
          "CloudFront",
          "Route53",
          "IAM",
          "VPC",
        ],
      },
      { category: "Other Services", tags: ["Jenkins"] },
    ],
  },
  {
    company: "Telia Company",
    link: "https://teliacompany.com",
    role: "Consulting Lead Developer",
    start: new Date(2021, 1, 1),
    end: new Date(2021, 10, 1),
    image: teliaImage,
    description: `
    After one year in in the project I started as the lead developer in the team. In addition to writing code on a 
    daily basis I am also responsible for the development efforts, assisting the product manager in technical decisions 
    and planning the architecture.
`,
    tags: [],
  },
  {
    company: "Telia Company",
    link: "https://teliacompany.com",
    role: "Consulting Senior Software Engineer",
    start: new Date(2020, 1, 1),
    end: new Date(2021, 1, 1),
    image: teliaImage,
    description: `
    I got contracted as a senior software engineer at Telia to work within a project for 
    Customer Identity and Access Management (CIAM).

    I like to work on all sides of our application so some days I work on our frontend applications built with React, 
    some days working on our identity provider built with node.js running in AWS Lambdas, some days configuring our 
    infrastructure with CloudFormation or Terraform, some days working on our CI/CD pipelines with GitHub actions and 
    some days working on our micro services built with Golang running in AWS Lambda.

    After getting up to speed and working in the team for a while I was the driving force for replacing the licensed 
    identity provider that was used with an open source alternative, which ended up giving us a lot more flexibility and 
    reducing cost in licensing. It was a great way to learn how the OIDC protocol works by implementing an OIDC Provider 
    from scratch.
`,
    tags: [
      {
        category: "Technologies",
        tags: [
          "node.js",
          "TypeScript",
          "Go",
          "OIDC",
          "SAML",
          "React",
          "REST",
          "GraphQL",
          "NoSQL",
          "PostgreSQL",
          "Docker",
          "Terraform",
          "ElasticSearch",
        ],
      },
      {
        category: "Cloud Services",
        tags: [
          "Cognito",
          "Lambda",
          "RDS",
          "DynamoDB",
          "SQS",
          "SNS",
          "S3",
          "CloudFront",
          "Route53",
          "API Gateway",
          "IAM",
          "VPC",
          "GitHub Actions",
          "Concourse",
        ],
      },
    ],
  },
  {
    company: "Golfer Sweden",
    link: "https://golfersweden.com/",
    role: "CTO",
    start: new Date(2019, 3, 1),
    end: new Date(2020, 1, 1),
    image: golferSwedenImage,
    description: `
    After my initial time at Golfer Sweden as a software engineer I advanced to the role as CTO, which meant taking responsibility 
    for development and planning of all applications and services, while still actively writing code.
`,
    tags: [],
  },
  {
    company: "Golfer Sweden",
    link: "https://golfersweden.com/",
    role: "Software Engineer",
    start: new Date(2018, 1, 1),
    end: new Date(2019, 5, 1),
    image: golferSwedenImage,
    description: `
    I joined Golfer Sweden as a full stack developer in an early start up phase to help them implement Swedens official 
    booking application for tee times. The application was licensed by the Swedish Golf Federation and published on 
    App Store and Google Play under the name "Min Golf Bokning".

    During my time here I had to work with a wide variety of technologies, such as implementing a cross platform mobile 
    application in React Native, manage cloud infrastructure in AWS and build APIs used by the client facing mobile 
    applications as well as web based admin applications.

    Since we were a small team it was important to be able to solve any issue you can encounter when providing a system 
    with over a hundred thousand users, as well as understanding requirements and helping to scale the business.
`,
    tags: [
      {
        category: "Technologies",
        tags: [
          "React Native",
          "Angular",
          "C#",
          ".NET Core",
          "node.js",
          "REST",
          "PostgreSQL",
          "OIDC",
          "SOAP",
          "GraphQL",
          "Serverless Framework",
        ],
      },
      {
        category: "Cloud Services",
        tags: [
          "Cognito",
          "Elastic Beanstalk",
          "VPC",
          "Lambda",
          "CloudFront",
          "Route53",
          "S3",
          "SNS",
          "SQS",
          "RDS",
          "IAM",
          "CodeBuild",
          "CodePipeline",
        ],
      },
    ],
  },
  {
    company: "Capgemini",
    link: "https://golfersweden.com/",
    role: "Software Engineer",
    start: new Date(2016, 9, 1),
    end: new Date(2017, 12, 1),
    image: capgeminiImage,
    description: `Capgemini was my first full time employment out of university. During my time here I mainly worked in a project for 
    the Swedish tax authority, where we built a new system for processing tax data for individuals.

    The system was implemented with Java Enterprise Edition, had requirements to handle large amounts of data and to be 
    robust and thoroughly tested. It was important to understand complex use cases and tax rules to be able to translate them into 
    technical solutions.
`,
    tags: [
      {
        category: "Technologies",
        tags: ["Java EE", "ClearCase", "REST", "SQL", "AngularJS"],
      },
    ],
  },
  {
    company: "We Know IT",
    link: "https://www.weknowit.se/",
    role: "Software Developer",
    start: new Date(2016, 1, 1),
    end: new Date(2016, 8, 1),
    image: weknowitImage,
    description: ` I was hired at We Know IT as a part time consultant during my studies at Linköpings University, where I 
    developed websites with Wordpress, built websites using PHP and helped customers with general IT issues such as 
    fixing network issues at home.
`,
    tags: [
      {
        category: "Technologies",
        tags: ["PHP", "Wordpress"],
      },
    ],
  },
];

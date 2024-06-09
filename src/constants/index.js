import {
    khtube,
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    shopify,
    carrent,
    muzamil,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "CMS Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: reactjs,
      iconBg: "#383E56",
      date: "OCT 2022 - DEC 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Back End Developer",
      company_name: "Tesla",
      icon: mongodb,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Feb 2022",
      points: [
        "Developing and maintaining server-side applications using Node.js, Express, and other related technologies.",
        "Collaborating with cross-functional teams including front-end developers, designers, product managers, and other stakeholders to create high-quality products.",
        "Designing and implementing RESTful APIs and ensuring they are secure, efficient, and well-documented.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Implementing database schemas, writing efficient queries, and managing data integrity using SQL and NoSQL databases.",
        "Ensuring the scalability and performance of server-side applications through performance tuning and optimization.",
        "Maintaining and improving the CI/CD pipeline for smooth deployment and integration processes.",
        "Writing unit and integration tests to ensure the reliability and robustness of the backend services."
      ],
    },
    {
      title: "CMS Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining websites and web applications using popular CMS platforms such as WordPress, Drupal, or Joomla, along with related technologies.",
        "Collaborating with cross-functional teams including designers, content creators, product managers, and other developers to create high-quality, content-rich products.",
        "Implementing responsive design and ensuring cross-browser compatibility across all CMS-powered sites.",
        "Participating in code reviews and providing constructive feedback to other developers to ensure code quality and best practices.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: nodejs,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Mr.Jamil",
      designation: "CEO",
      company: "JJK Brothers",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Full Stack App",
      description:
        "Web-based platform that allows users to search, book, and manage data from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Youtube Clone",
      description:
        "Web based clone application of Youtube that enables users to search for videos, view followers and subcribers, and watch add free videos.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Material UI",
          color: "green-text-gradient",
        },
        {
          name: "Rapid Api",
          color: "pink-text-gradient",
        },
      ],
      image: khtube,
      source_code_link: "https://github.com/muzamilpukhtun/Youtube-clone",
    },
    {
      name: "Landing Page",
      description:
        "A comprehensive Landing Page that allows users to showcase their skills and interests.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Vite",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/muzamilpukhtun/Proj1",
    },
    {
      name: "Portfolio Page",
      description:
        "A comprehensive Portfolio that allows users to showcase their skills and interests and make portfolio.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Vite",
          color: "pink-text-gradient",
        },
      ],
      image: muzamil,
      source_code_link: "https://github.com/muzamilpukhtun/muzamilkhan",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
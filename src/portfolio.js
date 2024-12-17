/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  // isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ahmed Raza's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  // og: {
  //   title: "Ahmed Raza Portfolio",
  //   type: "website",
  //   url: "http://ahmedraza.com/",
  // },
};

//Home Page
const greeting = {
  title: "Ahmed Raza",
  logo_name: "AhmedRaza",
  nickname: "Ahmed",
  subTitle:
    "A passionate individual who excels in developing end-to-end solutions, creating sustainable and scalable software systems for impactful outcomes.",
  resumeLink:
    "https://drive.google.com/file/d/1ywXyLKyzVcft3shoOCXAyKvBLIYOZRQi/view?usp=drive_link",
  portfolio_repository: "https://github.com/ahmad5373",
  githubProfile: "https://github.com/ahmad5373",
};


const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/ahmad5373",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ahmed-raza-690ba4241/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ahmedwebstech@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/ahmedraza550",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100082336095552",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ahmed_raza4959/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building RESTful APIs using Node.js and Express",
        "⚡ Implementing authentication and authorization mechanisms for web applications",
        "⚡ Integrating databases such as MongoDB and MySQL with Node.js applications",
        "⚡ Designing and developing scalable server-side applications using Nest.js",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Nest.js",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: {
            color: "#E0234E",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
      ],
    },
    {
      title: "Frontend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing interactive and responsive user interfaces using React.js",
        "⚡ Managing application state efficiently with Redux",
        "⚡ Implementing client-side routing for single-page applications",
      ],
      softwareSkills: [
        {
          skillName: "React.js",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },
  ],
};
  
// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/Ahmed-Raza/",
    },
    {
      siteName: "FreeCodeCamp",
      iconifyClassname: "simple-icons:freecodecamp",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.freecodecamp.org/certification/AhmedRaza123/javascript-algorithms-and-data-structures",
    },
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#0062e4",
      },
      profileLink: "https://www.coursera.org/learn/node-js/home/week/1?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "RPI & Information Technology",
      subtitle: "DAE. in Computer Information Technology",
      logo_path: "Logo-RPI.png",
      alt_name: "RPI Rawalpindi",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering (Computer Information Technology) subjects like C++ OOP, Algorithms, DBMS, etc.",
        "⚡ During my degree, I actively participated in various coding competitions, honing my problem-solving skills and gaining practical experience in software development.",
        "⚡ I collaborated on several projects with classmates, applying theoretical knowledge to real-world scenarios and enhancing my ability to work in a team environment.",
      ],
      website_link: "https://rpi.com.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Developing Cloud Apps with Node.js and React",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/3a22a51dbfb64f72072bd7cc01faabff",
      alt_name: "Stanford University",
      color_code: "#1F70C199",
    },
    {
      title: "Algorithms-&-Data-Structures",
      subtitle: "- Quincy Larson",
      logo_path: "free_code_camp.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/AhmedRaza123/javascript-algorithms-and-data-structures",
      alt_name: "FreeCodeCamp",
      color_code: "#323754",
    },
   
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Professional Work and Contributions",
  description:
  "I've worked as a Software Engineer at startups and established companies, helping develop scalable software solutions. My focus lies in frontend and backend technologies like JavaScript, Node.js, React.js, Express, MongoDB, and MySQL. I've also been active in open-source communities, organizing events and supporting initiatives for collaboration and innovation.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          "title": "Full Stack MERN Developer",
          "company": "Duseca Software",
          "company_url": "https://duseca.com/",
          "logo_path": "duseca_logo.png",
          "duration": "October 2024 - Present",
          "location": "IJP Road Rawalpindi",
          "description": "As a Full Stack MERN Developer, I am responsible for designing and implementing dynamic, responsive, and high-performing web applications. I have been focusing on both frontend and backend development, utilizing MongoDB, Express.js, React.js, and Node.js to create scalable and maintainable solutions. I work closely with the team to build robust RESTful APIs and integrate them into the frontend, ensuring seamless user experiences. My role also includes enhancing the performance of applications, collaborating with cross-functional teams, and continuously learning about the latest industry trends to apply best practices in development.",
          "color": "#4CAF50"
        },
        {
          title: "Junior MERN/MEAN Developer",
          company: "Coder Crew",
          company_url: "https://www.codercrew.xyz/",
          logo_path: "coder_crew_logo.jpg",
          duration: "April 2024 - September 2024",
          location: "Gulberg III, Lahore, Punjab",
          description:
            "As a Junior MERN/MEAN Developer at Coder Crew, I have focused on honing my skills in full-stack web development. I am proficient in JavaScript and have hands-on experience with Node.js, Express.js, and MongoDB for backend development. On the frontend, I have worked with React.js to build responsive and user-friendly interfaces, leveraging libraries like Tailwind CSS for efficient styling. My experience includes collaborating on website projects, where I've contributed to the development of RESTful APIs that are both efficient and scalable. I am eager to continue learning and growing as a developer, with a particular interest in leveraging my automation skills to streamline processes and enhance project efficiency.",
          color: "#0879bf",
        },
        {
          title: "Backend Node Engineer II",
          company: "BXTrack Solutions",
          company_url: "https://bxtrack.com/",
          logo_path: "bxtrack_logo.png",
          duration: "May 2023 - March 2024",
          location: "Satellite Town, Rawalpindi",
          description:
            "As a Backend Engineer at Bxtrack, I specialize in Node.js development, crafting powerful solutions with technologies like JavaScript, Node js Express.js, MongoDB, Nest.js, Prisma, Electron, Puppeteer, React.js, and Tailwind CSS. With my expertise, I've played a key role in delivering successful website projects. I excel in building efficient and scalable RESTful APIs, ensuring smooth operation and high performance. Additionally, I have a ability for automation, especially in creating scraping solutions that streamline processes",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer Internship",
          company: "SRB.",
          logo_path: "srb_logo.png",
          duration: "Feb 2023 - April 2023",
          location: "Saddar, Rawalpindi",
          description:
            "My web development internship covered the basics of HTML/CSS and JavaScript for interactive features. I also gained hands-on experience with backend technologies like Node.js, Express, and MySQL. This internship sparked my passion for building dynamic and user-friendly web applications.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "My Projects",
  description:
    "My projects showcase my expertise in JavaScript,  Node.js, Nest.js  React.js, and Express. I specialize in developing innovative web applications by leveraging the latest technology tools and deploying them using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ahmed_raza.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you any kind of query and  project related Discussion.",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Tench Bhatta Saddar, Dist.Rawalpind,Punjab Pakistan",
    locality: "Rawalpindi",
    country: "Pakistan",
    region: "punjab",
    postalCode: "45600",
    streetAddress: "Street# 22",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place//@33.58424,73.0306853,16z/data=!4m2!3m1!4b1?entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  // publications,
  contactPageData,
};

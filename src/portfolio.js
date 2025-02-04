/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Quan's Portfolio",
  description:
    "An enthusiastic individual dedicated to contributing to comprehensive product development, with a focus on crafting sustainable and scalable social and technical systems that make a meaningful impact.",
  og: {
    title: "Quan Nguyen Portfolio",
    type: "website",
    url: "http://QuanNguyen.com/",
  },
};

//Home Page
const greeting = {
  title: "Quan H. Nguyen",
  logo_name: "QuanNguyen",
  nickname: "quanzer",
  subTitle:
    "An enthusiastic individual dedicated to contributing to comprehensive product development, with a focus on crafting sustainable and scalable social and technical systems that make a meaningful impact.",
  resumeLink:
    "https://drive.google.com/file/d/1y4Y_jSOoh4etYCvuY5TR1COArimU_Irl/view?usp=sharing",
  portfolio_repository: "https://github.com/Quanzer/portfolio",
  githubProfile: "https://github.com/Quanzer",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Quanzer",
  // linkedin: "https://www.linkedin.com/in/Quan-Nguyen-88710b138/",
  // gmail: "19qhnguyen2@gmail.com",
  // gitlab: "https://gitlab.com/19qhnguyen2",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/Quan_1919",
  // instagram: "https://www.instagram.com/layman_brother/"
  {
    name: "Gmail",
    link: "mailto:19qhnguyen2@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Github",
    link: "https://github.com/Quanzer",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/Quanzer/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/c/qrizma",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },

  {
    name: "Twitter",
    link: "https://twitter.com/quanzxr",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
];

const skills = {
  data: [
    {
      title: "Front-end and Design",
      fileName: "DataScienceImg",
      skills: [
        "➤  Developing user friendly highly scalable models for statistical use cases",
        "➤  Experience of working with UX/UI design and optimizing user interactions",
        "➤  Creating complex animations and interactive components to enhance user experience",
      ],
      softwareSkills: [
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
        {
          skillName: "Adobe PhotoShop",
          fontAwesomeClassname: "logos-adobe-photoshop",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "Figma",
          fontAwesomeClassname: "logos-figma",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "➤  Building responsive website front end using React",
        "➤  Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "➤  Creating application backend in Node and Express",
      ],
      softwareSkills: [
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

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos-nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "➤  Experience working on multiple cloud platforms",
        "➤  Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "➤  Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "➤  Designing highly attractive user interface for mobile and web applications",
        "➤  Customizing logo designs and building logos from scratch",
        "➤  Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe PS",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#0055F2",
          },
        },
        {
          skillName: "Cinema4D",
          fontAwesomeClassname: "simple-icons:cinema4d",
          style: {
            color: "#222222",
          },
        },

        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "California State University, Long Beach",
      subtitle: "B.S. in Computer Science",
      logo_path: "csulb.png",
      alt_name: "CSULB",
      duration: "2022 - 2024",
      descriptions: [
        "➤  I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "➤  Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "➤  I was elected as ACM's BeachHacks president for 2023-2024 and lead the development of BeachMuse in 2023",
      ],
      website_link: "https://www.csulb.edu/",
    },
    {
      title: "Irvine Valley College",
      subtitle: "A.S. in Computer Science",
      logo_path: "IVC.png",
      alt_name: "IVC",
      duration: "2019 - 2021",
      descriptions: [
        "➤  Achieved 3.7 GPA through the college's Honors Program",
        "➤  During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.ivc.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "Along with my work experience, I have been actively involved in volunteer roles that have honed my skills in software development and project management. I served as the Director of a Hackathon at my university, California State University, Long Beach (CSULB), where I managed both logistical and creative aspects, attracting volunteers and over 100 participants. Additionally, I am a developer for the Association of Computing Machinery (ACM) at CSULB, where I work on various projects, translating designs and animations from Figma into functional websites and application",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer / MES Consultant",
          company: "Andea",
          company_url: "https://www.andea.com/",
          logo_path: "ANDEA.png",
          duration: "Nov 2024 - Present",
          location: "Brea, California",
          description: "Designing, developing, and deploying MES software.",
          color: "#71a73f",
        },
        {
          title: "Lego Robotics Coding Instructor",
          company: "Whizara",
          company_url: "https://www.whizara.com/",
          logo_path: "whizara.png",
          duration: "Oct 2024 - Nov 2024",
          location: "Long Beach Beach, California",
          description:
            "I delivered engaging coding and computer science lessons to K-12 students, tailored to different skill levels using platforms like Canvas and Zoom, while managing classroom dynamics, providing personalized feedback, maintaining student records on the Whizara platform, and utilizing tools like Canva and Zoom to create interactive learning experiences that ensured student engagement and comprehension.",
          color: "#c94848",
        },
        {
          title: "Data Entry Clerk",
          company: "Carbide Systems",
          company_url: "https://www.carbidesystems.net/",
          logo_path: "precision_tools.jpg",
          duration: "Mar 2021 - Aug 2021",
          location: "Huntington Beach, California",
          description:
            "I leveraged HTML/CSS and spreadsheet skills for website design and efficient data entry. Additionally, I designed and implemented a new SQL-like database system, resulting in a 50% increase in work efficiency for managing customer order details. I also conducted thorough assessments of the UPS customer informational database to ensure precise shipment and billing processes for customer orders.",
          color: "#0879bf",
        },
      ],
    },

    {
      title: "Volunteerships",
      experiences: [
        {
          title: "ACM Executive - BeachHacks Director",
          company: "Association for Computing Machinery: CSULB",
          company_url: "https://csulb.acm.org/",
          logo_path: "acm.png",
          duration: "Jul 2023 - Feb 2024",
          location: "Long Beach, California",
          description:
            "As the Executive Director of BeachHacks, a subsidiary event of the Association of Computing Machinery (ACM) at California State University, Long Beach (CSULB), I led the planning and execution of the hackathon, collaborating closely with ACM Executive Officers. I demonstrated strong leadership skills by recruiting and organizing a dynamic team, streamlining event operations for optimal efficiency, and ensuring a successful and impactful event.",
          color: "#000000",
        },
        {
          title: "Full Stack Developer",
          company: "Association for Computing Machinery: CSULB",
          company_url: "https://csulb.acm.org/",
          logo_path: "acm.png",
          duration: "Aug 2022 - May 2023",
          location: "Long Beach, California",
          description:
            "Spearheaded the development of a full-stack music listening web application using React, Node, Express, and Spotify’s Web API, enabling real-time collaborative playlist creation, while coordinating with designers and project managers to set project direction and delegate tasks.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects utilize a wide range of the latest technological tools. My most valuable experience involves creating full-stack and React-based applications, integrating APIs, and deploying them as web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_Quan.png",
    description:
      "I am available on LinkedIn and email for any inquiries. Feel free to reach out—I typically reply within 24 hours. I’d be happy to assist you with React, JS, Python, SQL, frontend and backend development, API integration, deployment, and any coding projects. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.QuanNguyen.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
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
  publicationsHeader,
  publications,
  contactPageData,
};

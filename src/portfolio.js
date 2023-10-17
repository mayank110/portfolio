/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mayank Kaushik",
  title: "Hi!! there ",
  subTitle: emoji( 

      `
       I'm a full-stack developer with a focus on backend development 🚀 interested in System Design, Architecture, developer productivity, doing things "right", and writing things down.
       Equipped with a diverse and promising skill set. 
     `
     //   👨‍💻 Software Developer
    //   ☕ Loves coffee
    //   🌱 I’m currently learning: Google Cloud
    //   💬 Ask me about: System Design, Third Party Integrations, DBMS, Python, GO
  ),
  resumeLink:
    "https://drive.google.com/file/d/1IAen2W7FRptiFoVf4OXXQtwQTmzRbMEn/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Recognized for the ability to adeptly discern, prioritize, design, and overcome challenges spanning products and engineering domains. 
// Exhibits a proactive and punctual approach, consistently steering projects from their conceptualization through to successful production deployment.
// Experienced and results-oriented full-stack engineer with a focus on backend development 🚀, boasting nearly 8 years of expertise, particularly in dynamic startup settings.
    // Equipped with a diverse and promising skill set. 
// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mayank110",
  linkedin: "https://www.linkedin.com/in/mayank-kaushik-867818108/",
  gmail: "mayank.p.kaushik@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DEVELOPER WHO LOVES TO DESIGN SYSTEMS AND DRIVE PROJECTS FROM INCEPTION TO PRODUCTION",
  skills: [
    emoji(
      "⚡ Crafting scalable and efficient system architectures."
    ),
    emoji("⚡ Expertise in Python, GoLang, and Kotlin for building robust applications."),
    emoji(
      "⚡ Building web applications using Flask, Django, and ReactJS."
    ),
    emoji(
      "⚡ Deploying and managing applications on AWS and GCP."
    ),
    emoji(
      "⚡ Logging to ensure application health and performance on DataDog."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fa-brands fa-golang"
    },
    {
      skillName: "Postgresql",
      fontAwesomeClassname: "fa-solid fa-database"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fa-brands fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fa-brands fa-github"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rajasthan Technical University",
      logo: require("./assets/images/rtu_logo.jpeg"),
      subHeader: "B.Tech in Information Technology",
      duration: "June 2012 - June 2016",
      desc: "Completed 4 year program with Honours ",
      descBullets: [
        "Achieved the top position at the Aarohan Tech Fest",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "System Design, HLD, LLD", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "C2FO",
      companylogo: require("./assets/images/c2fo_2.png"),
      date: "March 2022 – Present",
      desc: "Engaged with diverse technologies as needed by the product requirements.",
      descBullets: [
        "Architected and coded a Generic Payment Writer system in Golang",
        "Code level Optimisation and moved deployment process from frenzy to ADO",
        "Done Frontend work in Funder tool (React and GraphQL",
        "Architecture design and migration of the legacy client onboarding for Capital",
        "Finance by third party integration with security and cost analysis (Kotlin)",
        "Optimised Legacy Views and implemented Redis cache in Capital Finance",
      ]
    },
    {
      role: "Team Lead",
      company: "Gobolt Logistics",
      companylogo: require("./assets/images/gob_logo.png"),
      date: "Dec 2020 – March 2022",
      desc: "Led a team of 4 engineers",
      descBullets: [
        "Designed the architecture and Coded Bay Management (Python)",
        "Worked on SO/STO/PO,Freight Orders and Auction Management (Python)",
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Knowlarity Communications",
      companylogo: require("./assets/images/know_logo.jpeg"),
      date: "June 2020 – Dec 2020",
      descBullets: [
        "Worked on C2C",
        "Worked on Knowlus,, KRM (Python-Django).",
      ]
    },
    {
      role: "Team Lead",
      company: "CollegeDunia",
      companylogo: require("./assets/images/cd_logo.png"),
      date: "June 2018 – June 20120",
      desc: "Led a team of 4 engineers",
      descBullets: [
        "Revitalized Frizza: Engineered a turnaround from nonprofitable to a revenue generating flagship, solidifying its role as a key product in the portfolio",
        "Designed the architecture of KickCash(FLASK)",
        "Shifted complete system from legacy provider to AWS and done third party integrations",

      ]
    },
    {
      role: "Associate Software Engineer",
      company: "InfoBeans",
      companylogo: require("./assets/images/inb_logo.jpeg"),
      date: "June 2016 – June 2018",
      desc: "Led a team of 4 engineers",
      descBullets: [
        "Joined as Fresher, started work on fivestaralliance(Hotel Management)",
        "Did Database migration for 13 year old client by writing own scripts",
        "Introduced Angular2 in organisation and build a complete project"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/c2fo_logo.png"),
      projectName: "Dynamic Supplier Finance",
      projectDesc: "Revamped the DSF and created a universal payment file writer for all banks of different geo, handling design and coding.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://c2fo.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/frizza.jpeg"),
      projectName: "Frizza",
      projectDesc: "Revitalized Frizza: Engineered a turnaround from nonprofitable to a revenue generating flagship, solidifying its role as a key product in the portfolio",
      footerLink: [
        {
          name: "Visit App",
          url: "https://play.google.com/store/search?q=frizza&c=apps&hl=en-IN"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "add data",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Project talk, job openings, or just a 'hi'—my inbox welcomes all!",
  number: "+91-7790834131",
  email_address: "mayank.p.kaushik@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "mayank_pkaushik", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};

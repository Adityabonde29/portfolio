const navLinks = [
    {
      id: 1,
      name: "Projects",
      type: "finder",
    },
    {
      id: 3,
      name: "Contact",
      type: "contact",
    },
    {
      id: 4,
      name: "Resume",
      type: "resume",
    },
  ];
  
  const navIcons = [
    {
      id: 1,
      img: "/icons/wifi.svg",
    },
    {
      id: 2,
      img: "/icons/search.svg",
    },
    {
      id: 3,
      img: "/icons/user.svg",
    },
    {
      id: 4,
      img: "/icons/mode.svg",
    },
  ];
  
  const dockApps = [
    {
      id: "finder",
      name: "Portfolio", // was "Finder"
      icon: "finder.png",
      canOpen: true,
    },
    {
      id: "safari",
      name: "Articles", // was "Safari"
      icon: "safari.png",
      canOpen: true,
    },
    {
      id: "photos",
      name: "Gallery", // was "Photos"
      icon: "photos.png",
      canOpen: true,
    },
    {
      id: "contact",
      name: "Contact", // or "Get in touch"
      icon: "contact.png",
      canOpen: true,
    },
    {
      id: "terminal",
      name: "Skills", // was "Terminal"
      icon: "terminal.png",
      canOpen: true,
    },
    {
      id: "trash",
      name: "Archive", // was "Trash"
      icon: "trash.png",
      canOpen: false,
    },
  ];
  
  const blogPosts = [
    {
      id: 1,
      date: "Nov 28, 2025",
      title:
        "AI Is My Assistant, Not My Brain.",
      image: "/images/blog1.jpg",
      link: "https://medium.com/@aditya.bonde29/ai-is-my-assistant-not-my-brain-1b40936482ac",
    },
    // {
    //   id: 2,
    //   date: "Aug 28, 2025",
    //   title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    //   image: "/images/blog2.png",
    //   link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    // },
    // {
    //   id: 3,
    //   date: "Aug 15, 2025",
    //   title: "The Ultimate Guide to Mastering GSAP Animations",
    //   image: "/images/blog3.png",
    //   link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    // },
  ];
  
  const techStack = [
    {
      category: "Languages",
      items: ["C#", "Java", "TypeScript"],
    },
    {
      category: "Frontend",
      items: ["React", "Angular" , "Tailwind", "Bootstrap"],
    },
    {
      category: "Backend",
      items: [".NET 8", "Spring Boot"],
    },
    {
      category: "Familiar with",
      items: [ "JWT", "AuthGuard" , "SolidWorks" ],
    },
    {
      category: "Database",
      items: ["PostgreSQL"],
    },
    {
      category: "Dev Tools",
      items: ["Git", "GitHub", "Jira","Postman"],
    },
    {
      category: "Concepts",
      items: ["REST APIs", "DSA", "OS", "DBMS", "OOPs"],
    },
  ];
  
  const socials = [
    {
      id: 1,
      text: "Github",
      icon: "/icons/github.svg",
      bg: "#f4656b",
      link: "https://github.com/Adityabonde29",
    },
    {
      id: 2,
      text: "Platform",
      icon: "/icons/atom.svg",
      bg: "#4bcb63",
      link: "",
    },
    {
      id: 3,
      text: "Twitter/X",
      icon: "/icons/twitter.svg",
      bg: "#ff866b",
      link: "",
    },
    {
      id: 4,
      text: "LinkedIn",
      icon: "/icons/linkedin.svg",
      bg: "#05b6f6",
      link: "https://www.linkedin.com/in/adityabonde/",
    },
  ];
  
  const photosLinks = [
    {
      id: 1,
      icon: "/icons/gicon1.svg",
      title: "Library",
    },
    {
      id: 2,
      icon: "/icons/gicon2.svg",
      title: "Memories",
    },
    {
      id: 3,
      icon: "/icons/file.svg",
      title: "Places",
    },
    {
      id: 4,
      icon: "/icons/gicon4.svg",
      title: "People",
    },
    {
      id: 5,
      icon: "/icons/gicon5.svg",
      title: "Favorites",
    },
  ];
  
  const gallery = [
    {
      id: 1,
      img: "/images/gal1.jpeg",
    },
    {
      id: 2,
      img: "/images/gal2.jpeg",
    },
    {
      id: 3,
      img: "/images/gal3.jpeg",
    },
    {
      id: 4,
      img: "/images/gal4.jpeg",
    },
  ];
  
  export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
  };
  
  const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
      // ▶ Project 1
      {
        id: 5,
        name: "Trainig Hub Website Application",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-10 left-5", // icon position inside Finder
        windowPosition: "top-[5vh] left-5", // optional: Finder window position
        children: [
          {
            id: 1,
            name: "Trainig Hub.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            description: [
              "TrainingHub is a comprehensive training management system designed to streamline the process of listing, requesting, and managing training sessions.",
              "The project utilizes Angular for the frontend and .NET Entity Framework Core for the backend, with JWT tokens and AuthGuard for secure authentication and authorization.",
              "Developed a .NET Entity Framework Core backend, boosting data processing efficiency by 40% through optimized queries, better database indexing, and asynchronous programming.",
              "Optimized data handling, reducing response times by 30% and raising user satisfaction by 25%.",
            ],
          },
          {
            id: 2,
            name: "TrainingHub.com",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://github.com/Adityabonde29/TrainingHub",
            position: "top-10 right-20",
          },
          {
            id: 4,
            name: "Training Hub.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 right-80",
            imageUrl: "/images/project-1.png",
          },
          // {
          //   id: 5,
          //   name: "Design.fig",
          //   icon: "/images/plain.png",
          //   kind: "file",
          //   fileType: "fig",
          //   href: "https://google.com",
          //   position: "top-60 right-20",
          // },
        ],
      },
  
      // ▶ Project 2
      {
        id: 6,
        name: "GTA 6 Inspired UI Recreation",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-52 right-80",
        windowPosition: "top-[20vh] left-7",
        children: [
          {
            id: 1,
            name: "GTA 6 Inspired UI Recreation.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 right-10",
            description: [
              "A GTA 6 inspired landing page UI built as a frontend design experiment.",
              "Developed using React and Tailwind CSS with GSAP for smooth animations and interactions.",
              "Focused on layout recreation, typography matching, visual storytelling, and motion design.",
              "This project showcases my ability to replicate real-world designs and build visually engaging web UIs."
            ],
          },
          {
            id: 2,
            name: "GTA-6.com",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://adityabonde29.github.io/React---GTA-6/",
            position: "top-20 left-20",
          },
          {
            id: 4,
            name: "GTA 6 Inspired UI Recreation.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/project-2.png",
          },
          // {
          //   id: 5,
          //   name: "Design.fig",
          //   icon: "/images/plain.png",
          //   kind: "file",
          //   fileType: "fig",
          //   href: "https://google.com",
          //   position: "top-60 left-5",
          // },
        ],
      },
  
      // ▶ Project 3
      {
        id: 7,
        name: "AQYASA E-Commerce Platform (In Progress🚧)",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-10 left-80",
        windowPosition: "top-[33vh] left-7",
        children: [
          {
            id: 1,
            name: "AQYASA_About.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            description: [
              "AQYASA is a modern fashion e-commerce platform currently under active development.",
              "The frontend is built using React and Tailwind CSS with a strong focus on design, performance.",
              "Multiple UI libraries including shadcn/ui, Acernity UI, Skiper UI, and Remix Icons are used to create a rich and interactive user experience.",
              "GSAP powers smooth animations while a Java-based backend is in progress to handle authentication, products, and order management."
            ],
          },
          {
            id: 2,
            name: "Status: 🚧 In Progress",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://github.com/Adityabonde29",
            position: "top-10 right-20",
          },
          {
            id: 4,
            name: "Progress_1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 right-90",
            imageUrl: "/images/project-3.png",
          },
          {
            id: 5,
            name: "Progress_2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 right-50",
            imageUrl: "/images/project-3-2.png",
          },
          {
            id: 6,
            name: "Progress_3.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-50 right-15",
            imageUrl: "/images/project-3-3.png",
          },
          // {
          //   id: 5,
          //   name: "Design.fig",
          //   icon: "/images/plain.png",
          //   kind: "file",
          //   fileType: "fig",
          //   href: "https://google.com",
          //   position: "top-60 right-20",
          // },
        ],
      },
    ],
  };
  
  const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "me.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-10 left-5",
        imageUrl: "/images/aditya.jpeg",
      },
      {
        id: 2,
        name: "casual-me.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-28 right-72",
        imageUrl: "/images/aditya-2.jpeg",
      },
      {
        id: 3,
        name: "conference-me.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-52 left-80",
        imageUrl: "/images/aditya-3.jpeg",
      },
      {
        id: 4,
        name: "about-me.txt",
        icon: "/images/txt.png",
        kind: "file",
        fileType: "txt",
        position: "top-60 left-5",
        subtitle: "Meet the Developer Behind the Code",
        image: "/images/aditya.jpeg",
        description: [
          "Hey! I'm Aditya 👋 — a full-stack developer who loves building clean, reliable, and scalable web applications.",
          "I work mainly with Angular, React, and .NET, focusing on systems that not only work—but work beautifully and efficiently.",
          "I care deeply about writing maintainable code, crafting good user experiences, and making sure performance isn't an afterthought.",
          "When I'm not coding, you'll usually find me optimizing queries, polishing UI details, or learning the next thing that’ll make me a better developer 😄",
        ],        
      },
    ],
  };
  
  const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "Resume.pdf",
        icon: "/images/pdf.png",
        kind: "file",
        fileType: "pdf",
        // you can add `href` if you want to open a hosted resume
        // href: "/your/resume/path.pdf",
      },
    ],
  };
  
  const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "trash1.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-10 left-10",
        imageUrl: "/images/trash-1.png",
      },
      {
        id: 2,
        name: "trash2.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-40 left-80",
        imageUrl: "/images/trash-2.png",
      },
    ],
  };
  
  export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
  };
  
  const INITIAL_Z_INDEX = 1000;
  
  const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  };
  
  export { INITIAL_Z_INDEX, WINDOW_CONFIG };
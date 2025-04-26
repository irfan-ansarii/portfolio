import { Github, Globe, Linkedin } from "lucide-react";
import {
  SiDocker,
  SiExpress,
  SiGithub,
  SiInstagram,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShopify,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
  SiX,
} from "@icons-pack/react-simple-icons";

export const DATA = {
  navbar: [
    {
      label: "About",
      href: "/#about",
    },
    {
      label: "Work",
      href: "/#work",
    },
    {
      label: "Education",
      href: "/#education",
    },
    {
      label: "Skills",
      href: "/#skills",
    },
    {
      label: "Projects",
      href: "/#projects",
    },
    {
      label: "Contact",
      href: "/#contact",
    },
  ],
  name: "Irfan Ansari",
  initials: "IA",
  url: "https://irfanansari.vercel.app",
  location: "New Delhi - India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Building powerful applications with precision and passion, from front-end finesse to back-end brilliance.",
  summary:
    "Full Stack Developer with expertise in building scalable web applications, intuitive interfaces, and efficient back-end solutions. Strong problem-solving abilities, keen attention to detail, and a track record of delivering projects on time. Skilled at collaborating with cross-functional teams to achieve project goals.",
  avatarUrl: "/me.jpg",
  skills: [
    {
      icon: SiReact,
      name: "React",
      href: "https://react.dev",
      color: "#00d8ff",
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      href: "https://nextjs.org",
      color: "#26313b",
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
      href: "https:// www.typescriptlang.org",
      color: "#3178c6",
    },
    {
      icon: SiNodedotjs,
      name: "Node.js",
      href: "https://nodejs.org",
      color: "#215732",
    },
    {
      icon: SiExpress,
      name: "Express",
      href: "https://expressjs.com",
      color: "#002663",
    },
    {
      icon: SiPrisma,
      name: "Prisma",
      href: "https://www.prisma.io",
      color: "#5A67D9",
    },
    {
      icon: SiPostgresql,
      name: "PostgreSQL",
      href: "https://www.postgresql.org",
      color: "#346892",
    },
    {
      icon: SiDocker,
      name: "Docker",
      href: "https://www.docker.com",
      color: "#0db7ed",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind",
      href: "https://tailwindcss.com",
      color: "#00BCFF",
    },
    { icon: SiPhp, name: "PHP", href: "https://www.php.net", color: "#8892be" },
    {
      icon: SiWordpress,
      name: "WordPress",
      href: "https://wordpress.org",
      color: "#21759b",
    },
    {
      icon: SiShopify,
      name: "Shopify",
      href: "https://rwww.shopify.com",
      color: "#96bf48",
    },
  ],

  work: [
    {
      company: "Goldys Nestt",
      title: "Full-Stack Developer",
      logoUrl: "/goldys.png",
      start: "2022",
      end: "Present",
      description: `- Design, develop, and optimize high-performance full-stack web applications, ensuring scalability and smooth user experiences.
        \n- Collaborate with cross-functional teams to craft innovative features, from concept to deployment, aligning with business objectives.
        \n- Deliver custom solutions that address unique business challenges and project goals, driving value and efficiency.
        \n- Oversee website infrastructure, proactively monitoring uptime and swiftly resolving technical issues to maintain seamless operation.
        \n- Contribute to team growth through active participation in code reviews, architectural discussions, and knowledge sharing, fostering a collaborative culture.
        \n- Lead the charge on innovation, staying ahead of industry trends and integrating cutting-edge technologies to continuously improve development practices.
      `,
    },
    {
      company: "DigiAcai",
      title: "Freelance Developer (Remote)",
      logoUrl: "/digiacai.png",
      start: "2022",
      end: undefined,
      description: `- Developed custom Shopify and WordPress websites tailored to client branding and functional requirements.​
          \n- Built and customized themes, plugins, and third-party integrations to enhance eCommerce and CMS functionality.​
          \n- Collaborated with designers and project managers to deliver responsive, SEO-friendly, and conversion-optimized websites.​
          \n- Handled website migrations, performance optimization, and cross-browser testing to ensure seamless user experiences.​
          \n- Provided ongoing technical support and maintenance to ensure smooth website operation.​
          \n- Worked directly with clients to understand business needs, suggest improvements, and deliver high-quality solutions on time.​
          \n- Integrated Google Analytics custom events to track user interactions, such as button clicks and form submissions, enabling data-driven insights
      `,
    },
    {
      company: "Matrix",
      title: "Full-Stack Developer (Remote)",
      logoUrl: "/matrix.png",
      start: "2018",
      end: "2021",
      description: `- Developed custom Shopify and WordPress websites tailored to client branding and functional requirements.
        \n- Built and customized themes, plugins, and third-party integrations to enhance eCommerce and CMS functionality.
        \n- Collaborated with designers and project managers to deliver responsive, SEO-friendly, and conversion-optimized websites.
        \n- Handled website migrations, performance optimization, and cross-browser testing.
        \n- Provided ongoing technical support and maintenance to ensure smooth website operation.
        \n- Worked directly with clients to understand business needs, suggest improvements, and deliver high-quality solutions on time.
      `,
    },
  ],
  education: [
    {
      school: "Sikkim Manipal University",
      href: "https://smu.edu.in/",
      degree: "Bachelor of Computer Applications - BCA",
      description:
        "Computer/Information Technology Administration and Management",
      logoUrl: "/smu.png",
      start: "2018",
      end: "2022",
    },
    {
      school: "Learn Code Online",
      href: "https://learncodeonline.in/",
      degree:
        "Hands-on API Development Training – React.js, Express.js, and MongoDB",
      description:
        "Gained hands-on experience building RESTful APIs with Express.js, MongoDB, and React.js, focusing on user authentication, CRUD operations, and state management.",
      logoUrl: "/lco.png",
      start: "2022",
      end: undefined,
    },
    {
      school: "Udemy",
      href: "https://www.udemy.com/",
      degree: "Building Database-Driven Web Applications with PHP & MySQL",
      description:
        "Mastered developing dynamic web applications using PHP and MySQL, with a focus on backend logic and database operations.",
      logoUrl: "/udemy.png",
      start: "2021",
      end: undefined,
    },
    {
      school: "Udemy",
      href: "https://www.udemy.com/",
      degree: "Advanced React E-Commerce Development",
      description:
        "Mastered building high-performance e-commerce sites with React, including seamless integration with Shopify for enhanced functionality.",
      logoUrl: "/udemy.png",
      start: "2021",
      end: undefined,
    },
    {
      school: "Oxford Software Institute",
      href: "https://www.oxfordinstitute.in/",
      degree: "C, C++, and Java Programming",
      description:
        "Developed a solid foundation in object-oriented programming (OOP) and algorithms using C, C++, and Java.",
      logoUrl: "/oxford.png",
      start: "2017",
      end: undefined,
    },
  ],
  projects: [
    {
      title: "Beachwear E-Commerce Website",
      href: "https://shopminis.in",
      active: true,
      description:
        "Developed a vibrant, vacation-inspired fashion ecommerce store. Focused on creating a fast, mobile-first, visually appealing experience with optimized checkout and global shipping capabilities.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Web Component",
        "Embla",
        "Razorpay",
        "Metafields & Metaobjects",
        "Liquid",
        "Shopify",
      ],
      links: [
        {
          type: "Website",
          href: "https://shopminis.in",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/minis.png",
    },
    {
      title: "Workflow Management App",
      href: "https://goldys.vercel.app",
      active: true,
      description:
        "Developed a fully custom web app built with Next.js, Drizzle ORM, and PostgreSQL — designed to streamline operations, manage workflows, and improve team productivity.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Drizzle",
        "TailwindCSS",
        "Shadcn UI",
        "React Query",
        "Hono.js",
        "Razorpay",
        "Resend",
        "Confetti",
        "Webhook",
        "Shopify",
        "Shiprocket",
      ],
      links: [
        {
          type: "Website",
          href: "https://goldys.vercel.app",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/gn-app.png",
    },
    {
      title: "SEO Agency Website",
      href: "https://digiacai.com/",
      active: true,
      description:
        "Created a high-converting website for an SEO agency targeting D2C brands. Prioritized fast loading, SEO best practices, mobile responsiveness, and a clean, professional design.",
      technologies: [
        "WordPress",
        "PHP",
        "MySQL",
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
      ],
      links: [
        {
          type: "Website",
          href: "https://digiacai.com/",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/digiacai_web.png",
    },
    {
      title: "SEO & E-Commerce Consultant Portfolio",
      href: "https://nehaagarwal.in/",
      active: true,
      description:
        "Designed a personal branding website for a digital marketing consultant. Integrated blog management, workshops/events listing, and lead generation forms, all optimized for search engines.",
      technologies: [
        "WordPress",
        "PHP",
        "MySQL",
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
      ],
      links: [
        {
          type: "Website",
          href: "https://nehaagarwal.in/",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/neha.png",
    },
    {
      title: "Dental Service Website",
      href: "https://saugasmilesdental.com",
      active: true,
      description:
        "Developed a local SEO-optimized dental clinic website. Included service pages, online appointment booking, and a friendly, welcoming design focused on building patient trust.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "jQuery",
        "Elementor",
        "Bootstrap",
        "Font Awesome",
        "SMTP",
        "Php",
        "Wordpress",
      ],
      links: [
        {
          type: "Website",
          href: "https://saugasmilesdental.com",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/ssd.png",
    },
    {
      title: "Streamlined Link Management Web App",
      href: "https://url-shortner-client-eight.vercel.app/",
      active: true,
      description:
        "Developed a sleek and minimal URL shortener application that allows users to generate short URLs. The app features real-time redirection and analytics tracking.",
      technologies: [
        "Next.js",
        "Express.js",
        "Drizzle ORM",
        "PostgreSQL",
        "TypeScript",
        "REST API",
        "NanoID",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://url-shortner-client-eight.vercel.app/",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/link.png",
    },
    {
      title: "High-End Interior Design Website",
      href: "https://thedesignatelier.com",
      active: true,
      description:
        "Developed a high-end portfolio website for an interior design studio. Focused on showcasing projects with elegant layouts, strong branding, and a premium client experience.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "jQuery",
        "Php",
        "GSAP",
        "Bootstrap",
        "Font Awesome",
        "SMTP",
        "Wordpress",
      ],
      links: [
        {
          type: "Website",
          href: "https://thedesignatelier.com",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/tda.png",
    },
    {
      title: "Fashion E-Commerce Website",
      href: "https://prernaghoshlabel.in",
      active: true,
      description:
        "Built a fashion e-commerce site for a luxury label specializing in co-ord sets, sarees, and dresses. Integrated discount offers, seasonal collections, and a seamless mobile shopping experience.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Web Component",
        "Flickity",
        "Razorpay",
        "Metafields & Metaobjects",
        "Photoswipe",
        "Liquid",
        "Shopify",
      ],
      links: [
        {
          type: "Website",
          href: "https://prernaghoshlabel.in",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/pgl.png",
    },
    {
      title: "Comprehensive Dental Services Website",
      href: "https://cbdentistry.ca",
      active: true,
      description:
        "Developed a comprehensive dental clinic website with service pages, online appointment booking, and local SEO optimization for enhanced visibility and patient engagement.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "jQuery",
        "Bootstrap",
        "WPBakery",
        "Font Awesome",
        "SMTP",
        "Php",
        "Wordpress",
      ],
      links: [
        {
          type: "Website",
          href: "https://cbdentistry.ca",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/cb.png",
    },
    {
      title: "Sustainable Fashion E-Commerce Website",
      href: "https://theclothingfactory.in",
      active: true,
      description:
        "Built a modern online store for a fashion brand offering a wide range of apparel and accessories. Focused on delivering a smooth shopping experience, fast performance, and responsive design across all devices.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Web Component",
        "Flickity",
        "Razorpay",
        "Metafields",
        "Metaobjects",
        "Photoswipe",
        "Liquid",
        "Shopify",
      ],
      links: [
        {
          type: "Website",
          href: "https://theclothingfactory.in",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/tcf.png",
    },
    {
      title: "Spline Iteractive 3D Animation",
      href: "https://spline-animation.vercel.app",
      active: true,
      description:
        "Created a 3D interactive animation website to deliver immersive experiences, combining advanced frontend development and seamless performance.",
      technologies: [
        "React.js",
        "Next.js",
        "Typescript",
        "Three.js",
        "Vercel",
        "Spline",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://spline-animation.vercel.app",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/spline.png",
    },
    {
      title: "Elegant Ethnic Wear E-Commerce Website",
      href: "https://goldysnestt.com",
      active: true,
      description:
        "Built an elegant e-commerce store for a homegrown ethnic wear brand. Highlighted festive and summer collections, ensuring smooth checkout, fast browsing, and mobile-first responsiveness.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Web Component",
        "Flickity",
        "Razorpay",
        "Metafields",
        "Metaobjects",
        "Photoswipe",
        "Liquid",
        "Shopify",
      ],
      links: [
        {
          type: "Website",
          href: "https://goldysnestt.com",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/gn.png",
    },
    {
      title: "Digital Portfolio for a Visionary Entrepreneur",
      href: "https://priyankagill.com",
      active: true,
      description:
        "Designed a modern personal brand website for an entrepreneur and content creator. Integrated blogs, podcast highlights, and a gallery of designer features, focused on storytelling and SEO.",
      technologies: [
        "HTML",
        "CSS",
        "Animate.css",
        "Javascript",
        "jQuery",
        "Bootstrap",
        "Font Awesome",
        "Php",
        "ACF",
        "Metabox",
        "Kirki",
        "Wordpress",
      ],
      links: [
        {
          type: "Website",
          href: "https://priyankagill.com",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/pg.png",
    },
    {
      title: "Personal Portfolio",
      href: "https://irfanansari.vercel.app/",
      active: true,
      description:
        "Designed and developed a dynamic personal portfolio to showcase my skills, projects, and professional journey. The website is my digital resume, highlighting my expertise in full-stack development.",
      technologies: [
        "Next.js",
        "Typescript",
        "React",
        "Vercel",
        "PostgreSQL",
        "TailwindCSS",
        "MagicUI",
      ],
      links: [
        {
          type: "Website",
          href: "https://irfanansari.vercel.app/",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/portfolio.png",
    },
  ],
  contact: [
    {
      name: "Instagram",
      url: "https://instagram.com/",
      icon: SiInstagram,
    },
    {
      name: "X",
      url: "https://x.com/",
      icon: SiX,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/irfan-ansarii/",
      icon: SiGithub,
    },
  ],
} as const;

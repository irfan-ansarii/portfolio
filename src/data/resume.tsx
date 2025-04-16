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
  SiDrizzle,
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
    { icon: SiReact, name: "React", href: "https://react.dev" },
    { icon: SiNextdotjs, name: "Next.js", href: "https://nextjs.org" },
    {
      icon: SiTypescript,
      name: "TypeScript",
      href: "https:// www.typescriptlang.org",
    },
    { icon: SiNodedotjs, name: "Node.js", href: "https://nodejs.org" },
    { icon: SiExpress, name: "Express", href: "https://expressjs.com" },
    { icon: SiPrisma, name: "Prisma", href: "https://www.prisma.io" },
    {
      icon: SiPostgresql,
      name: "PostgreSQL",
      href: "https://www.postgresql.org",
    },
    { icon: SiDocker, name: "Docker", href: "https://www.docker.com" },
    { icon: SiTailwindcss, name: "Tailwind", href: "https://tailwindcss.com" },
    { icon: SiPhp, name: "PHP", href: "https://www.php.net" },
    { icon: SiWordpress, name: "WordPress", href: "https://wordpress.org" },
    { icon: SiShopify, name: "Shopify", href: "https://rwww.shopify.com" },
  ],

  work: [
    {
      company: "Goldys Nestt",
      title: "Full-Stack Developer",
      logoUrl: "/goldys.png",
      start: "2021",
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
      company: "Digiacai",
      title: "Freelance Developer",
      logoUrl: "/digiacai.png",
      start: "2022",
      end: undefined,
      description: `- Built and customized Shopify and WordPress websites as part of a remote development team.
        \n- Implemented responsive designs, custom features, and third-party integrations.
        \n- Collaborated with cross-functional teams to understand client requirements and deliver high-quality, optimized results.
        \n- Handled performance tuning, bug fixes, and ongoing site maintenance.
      `,
    },
    {
      company: "Matrix",
      title: "Full-Stack Developer",
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
      title: "Shopminis",
      href: "https://shopminis.in",
      active: true,
      description:
        "Developed a stylish, responsive eCommerce platform for Shop Minis, a homegrown Indian brand specializing in vacation apparel. The site offers seamless navigation and showcases their latest collections, enhancing the online shopping experience.",
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
      title: "Business & Workflow Management App",
      href: "https://goldys.vercel.app",
      active: true,
      description:
        "A fully custom web app built with Next.js, Drizzle ORM, and PostgreSQL — designed to streamline operations, manage workflows, and improve team productivity with a clean UI and robust backend architecture.",
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
      title: "Sauga Smiles Dental",
      href: "https://saugasmilesdental.com",
      active: true,
      description:
        "Developed a modern, responsive wordpress website for Sauga Smiles Dental, showcasing their comprehensive dental services and facilitating easy appointment bookings to enhance patient engagement.",
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
      title: "The Design Atelier",
      href: "https://thedesignatelier.com",
      active: true,
      description:
        "Crafted a refined, responsive Wordpress website for The Design Atelier, an award-winning interior design firm, to showcase their timeless residential and boutique commercial projects, emphasizing elegance and user-friendly navigation.",
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
      title: "Prerna Ghosh Label",
      href: "https://prernaghoshlabel.in",
      active: true,
      description:
        "Developed a stylish, responsive Shopify eCommerce website for Prerna Ghosh Label, a contemporary fashion brand, facilitating seamless browsing and shopping experiences for their handcrafted, made-to-order collections.",
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
      title: "Central Burlington Dental Care",
      href: "https://cbdentistry.ca",
      active: true,
      description:
        "Developed a responsive, SEO-optimized website for Central Burlington Dental Care, featuring intuitive navigation, streamlined appointment booking, and an integrated Google Reviews widget to showcase patient feedback and build trust.",
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
      title: "The Clothing Factory",
      href: "https://theclothingfactory.in",
      active: true,
      description:
        "Built a dynamic, fashion-forward Shopify eCommerce store for The Clothing Factory, featuring responsive design, seamless shopping experience, and integrated seasonal collections to showcase their trendy apparel.",
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
      title: "Spline",
      href: "https://spline-animation.vercel.app",
      active: true,
      description:
        "Developed an interactive 3D animation experience using Spline, highlighting the platform's capabilities in creating browser-based animations with intuitive design and collaborative features.",
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
      title: "Goldys Nestt",
      href: "https://goldysnestt.com",
      active: true,
      description:
        "Developed a responsive eCommerce platform for Goldy's Nestt, a ethnic wear brand, featuring seamless navigation, integrated collections, and secure shopping to enhance user engagement and sales.",
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
      title: "Priyanka Gill",
      href: "https://priyankagill.com",
      active: true,
      description:
        "Designed and developed a custom WordPress theme from scratch for Priyanka Gill's personal website, ensuring a responsive, SEO-optimized platform that effectively showcases her entrepreneurial journey, blog, and media features.",
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

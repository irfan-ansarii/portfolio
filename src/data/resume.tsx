import {
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import {
  SiDocker,
  SiExpress,
  SiGithub,
  SiInstagram,
  SiLiquibase,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShopify,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
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
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Building powerful applications with precision and passion, from front-end finesse to back-end brilliance.",
  summary:
    "Full Stack Developer with expertise in building scalable web applications, intuitive interfaces, and efficient back-end solutions. Strong problem-solving abilities, keen attention to detail, and a track record of delivering projects on time. Skilled at collaborating with cross-functional teams to achieve project goals.",
  avatarUrl: "/me.png",
  skills: [
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiExpress, name: "Express" },
    { icon: SiPrisma, name: "Prisma" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiPhp, name: "PHP" },
    { icon: SiWordpress, name: "WordPress" },
    { icon: SiShopify, name: "Shopify" },
  ],

  work: [
    {
      company: "Goldys Nestt",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Full-Stack Developer",
      logoUrl: "/goldys.png",
      start: "May 2021",
      end: "Oct 2022",
      description: `- Developed a custom inventory and POS management system using Next.js, Hono.js, ShadCN, PostgreSQL, and Drizzle ORM, resulting in an 80% improvement in processing speed.
      \n- Managed and optimized a high-performance Shopify site, enhancing conversion rates by 25% through implementing new features.
      \n- Collaborated with marketing and design teams to enhance functionality, driving a 15% increase in user engagement..
`,
    },
    {
      company: "DigiAcai Pvt. Ltd.",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Wordpress & Shopify Developer",
      logoUrl: "/digiacai.png",
      start: "January 2021",
      end: "April 2021",
      description: `- Managed and optimized 15+ client websites on WordPress and Shopify, boosting website load speed by 40%.
      \n- Designed and implemented new features to align with client goals, achieving a 90% satisfaction rate.
      \n- Enhanced user experience through responsive designs, resulting in a 20% increase in website traffic.
`,
    },
    {
      company: "Priyanka Gill",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Wordpress Developer",
      logoUrl: "/pg.png",
      start: "January 2019",
      end: "April 2019",
      description: `- Built WordPress sites from the ground up, including custom theme development, delivering high-performance websites.
      \n- Designed and developed React-based websites tailored to specific requirements.
      \n- Optimized SEO, driving a significant increase in organic traffic.
`,
    },
  ],
  education: [
    {
      school: "Sikkim Manipal University",
      href: "https://buildspace.so",
      degree: "Bachelor of Computer Applications - BCA",
      description:
        "Computer/Information Technology Administration and Management",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Learn Code Online",
      href: "https://uwaterloo.ca",
      degree: "Pro Backend Developer Course - Express.js",
      description: "Completed 40+ hours of hands-on API development training.",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Udemy",
      href: "https://wlu.ca",
      degree: "React Ecommerce Site Development",
      description: "Mastered advanced React and Shopify integration.",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Oxford Software Institute",
      href: "https://ibo.org",
      degree: "C, C++, Java",
      description: "Gained a strong foundation in object-oriented programming.",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  contact: [
    {
      name: "Email",
      url: "#",
      icon: SiInstagram,
    },
    {
      name: "X",
      url: "https://dub.sh/dillion-twitter",
      icon: SiX,
    },
    {
      name: "LinkedIn",
      url: "https://dub.sh/dillion-linkedin",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://dub.sh/dillion-github",
      icon: SiGithub,
    },
  ],
} as const;

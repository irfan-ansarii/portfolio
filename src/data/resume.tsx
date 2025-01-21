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
    "Full-Stack developer with 7 years of experience in development and management of web applications. A team player known for collaborative efforts, I possess the confidence to grasp project requirements, design solutions that align with specific needs, and consistently deliver optimal outcomes",
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
      company: "Minis LLP",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Full-Stack Developer",
      logoUrl: "/minis.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "- Maintain and enhance the functionality, performance, and security of the company’s website.\n - Develop and implement new software solutions based on the company’s requirements and business objectives.\n - Collaborate with cross-functional teams to gather requirements and deliver tailored web-based applications.\n - Ensure seamless integration between front-end and back-end systems for an optimized user experience. \n - Debug, troubleshoot, and resolve technical issues to maintain system reliability. \n - Stay updated with industry trends and technologies to suggest improvements and innovative solutions. \n - Document development process, codebases, and application changes for future reference.",
    },
    {
      company: "DigiAcai Pvt. Ltd.",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Full-Stack Developer",
      logoUrl: "/digiacai.png",
      start: "January 2021",
      end: "April 2021",
      description:
        "- Enhanced the company's website, optimizing speed and ensuring a superior user experience.\n - Added engaging elements, making the website user-friendly and exciting.\n - Collaborated effectively with teams to meet client needs and implement improvements on both Shopify and WordPress websites.\n - Demonstrated proficiency in both WordPress and Shopify, tailoring solutions for each project's unique requirements.\n - Delivered high-quality results for successful client projects.",
    },
    {
      company: "Priyanka Gill",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Full-Stack Developer",
      logoUrl: "/pg.png",
      start: "January 2019",
      end: "April 2019",
      description:
        "- Led end-to-end dynamic WordPress site development. \n - Crafted custom theme matching branding and functions.\n - Collaborated with design team on appealing, user-friendly design.\n - Efficiently coordinated across design, dev, and SEO teams.",
    },
    {
      company: "Goldys Nestt",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Full-Stack Developer",
      logoUrl: "/goldys.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "- Maintain and enhance the functionality, performance, and security of the company’s website.\n - Develop and implement new software solutions based on the company’s requirements and business objectives.\n - Collaborate with cross-functional teams to gather requirements and deliver tailored web-based applications.\n - Ensure seamless integration between front-end and back-end systems for an optimized user experience. \n - Debug, troubleshoot, and resolve technical issues to maintain system reliability. \n - Stay updated with industry trends and technologies to suggest improvements and innovative solutions. \n - Document development process, codebases, and application changes for future reference.",
    },
  ],
  education: [
    {
      school: "Sikkim Manipal University",
      href: "https://buildspace.so",
      degree: "Bachelor of Computer Application",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Learn Code Online",
      href: "https://uwaterloo.ca",
      degree: "Pro Backend Developer Course",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Udemy",
      href: "https://wlu.ca",
      degree: "React Ecommerce Site Development",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Oxford Software Institute",
      href: "https://ibo.org",
      degree: "C, C++, Java",
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

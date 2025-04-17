import React from "react";
import BlurFade from "@/components/magicui/blur-fade";

const Footer = () => {
  return (
    <BlurFade delay={0.2}>
      <section id="space" className="container">
        <div className="border-x h-20 border-t flex items-center justify-between px-4 md:px-8">
          <span className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} - Irfan Ansari
          </span>
          <span className="text-xs text-muted-foreground">
            Built with &nbsp;
            <a
              href="https://nextjs.org/"
              target="_blank"
              className="text-primary"
            >
              Next.js
            </a>
          </span>
        </div>
      </section>
    </BlurFade>
  );
};

export default Footer;

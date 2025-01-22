import React from "react";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

const AboutSection = () => {
  return (
    <section id="about" className="container">
      <div className="border-x border-t p-4 sm:p-8">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">About</h2>

          <Markdown className="prose max-w-full text-pretty font-sans dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from "react";
import { DATA } from "@/data/resume";

import FlickeringGrid from "@/components/magicui/flickering-grid";
import ContactForm from "@/components/contact-form";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";

const BLUR_FADE_DELAY = 0.05;

const ContactSection = () => {
  return (
    <BlurFade delay={0.5}>
      <section id="contact" className="container">
        <SectionHeading
          badge="contact"
          heading="Let's connect"
          subheading="Have a question, project idea, or just want to say hello?
                  I am always open to discussing new projects, creative
                  ideas, or opportunities to be part of your vision. Do reach
                  out to me and I will be happy to connect."
          fadeDelay={BLUR_FADE_DELAY * 13}
        />

        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <ContactForm />
        </BlurFade>
        <div className="grid grid-cols-4 border-x border-t divide-x">
          {DATA.contact.map((con, id) => (
            <BlurFade key={con.name} delay={BLUR_FADE_DELAY * 14 + id * 0.05}>
              <Link
                key={con.name}
                href={con.url}
                target="_blank"
                className="px-4 py-4 relative group flex items-center justify-center  aspect-square sm:aspect-auto overflow-hidden group"
              >
                <span
                  className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-150 transition duration-300"
                  style={{
                    background: con.gradient,

                    borderRadius: "16px",
                  }}
                />
                <div
                  className={`transition duration-300 text-primary ${con.color}`}
                >
                  <con.icon className="size-5" />
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </section>
    </BlurFade>
  );
};

export default ContactSection;

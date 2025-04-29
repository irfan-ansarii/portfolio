import React from "react";
import { DATA } from "@/data/resume";

import FlickeringGrid from "@/components/magicui/flickering-grid";
import ContactForm from "@/components/contact-form";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.05;

const ContactSection = () => {
  return (
    <BlurFade delay={0.5}>
      <section id="contact" className="container">
        <div className="border-x border-t overflow-hidden relative">
          <BlurFade delay={BLUR_FADE_DELAY * 13} className="p-2 py-6 md:p-8">
            <h2 className="text-sm text-muted-foreground text-center mb-4 sm:mb-6 text-balance font-semibold tracking-tigh uppercase">
              contact
            </h2>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-full w-full bg-gradient-to-t from-background dark:from-background -z-10 from-50%"></div>
            <FlickeringGrid
              className="w-full h-full -z-20 absolute inset-0 size-full"
              squareSize={4}
              gridGap={6}
              color="#60A5FA"
              maxOpacity={0.5}
              flickerChance={0.1}
            />
            <span className="absolute inset-0 backdrop-blur-3xl bg-background/60 -z-10"></span>

            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full ">
              <div className="space-y-3">
                <h2 className="text-xl font-bold tracking-tighter sm:text-3xl">
                  Get in touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground prose">
                  Have a question, project idea, or just want to say hello?
                  I&apos;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your vision. Do reach
                  out to me and I&apos;ll be happy to connect.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>

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

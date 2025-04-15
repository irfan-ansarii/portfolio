import React from "react";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { ExternalLink } from "lucide-react";
import FlickeringGrid from "@/components/magicui/flickering-grid";
import ContactForm from "@/components/contact-form";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.05;
const ContactSection = () => {
  return (
    <section id="contact" className="container">
      <div className="border-x border-t overflow-hidden relative">
        <BlurFade delay={BLUR_FADE_DELAY * 13} className="p-2 py-6 md:p-8">
          <h2 className="text-sm text-muted-foreground text-center mb-6 text-balance font-semibold tracking-tigh uppercase">
            contact
          </h2>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-full w-full bg-gradient-to-t from-background dark:from-background -z-10 from-50%"></div>
          <FlickeringGrid
            className="w-full h-full -z-20 absolute inset-0 size-full"
            color="#262626"
          />

          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full ">
            <div className="space-y-3">
              <h2 className="text-xl font-bold tracking-tighter sm:text-3xl">
                Stay Connected
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground prose">
                Want to chat? Just shoot me a dm &nbsp;
                <Link
                  // href={DATA.contact[0].url}
                  href="#"
                  className="text-indigo-500 hover:underline"
                >
                  with a direct question on twitter &nbsp;
                </Link>
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </div>
        </BlurFade>
      </div>
      <div className="grid grid-cols-4 border-x border-t divide-x">
        {DATA.contact.map((con, id) => (
          <BlurFade key={con.name} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
            <a
              key={con.name}
              href={con.url}
              target="_blank"
              className="px-8 py-12 relative group flex justify-center"
            >
              <div className="opacity-20 transition-opacity">
                <con.icon className="size-10" />
              </div>
              <div className="absolute inset-0 bottom-0 group-hover:opacity-100 backdrop-blur-2xl opacity-0 bg-secondary/80 transition-opacity flex items-center justify-center">
                <ExternalLink className="size-5" />
              </div>
            </a>
          </BlurFade>
        ))}
      </div>
      <BlurFade delay={BLUR_FADE_DELAY * 14}>
        <ContactForm />
      </BlurFade>
    </section>
  );
};

export default ContactSection;

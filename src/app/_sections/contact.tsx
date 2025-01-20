import React from "react";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import FlickeringGrid from "@/components/magicui/flickering-grid";

const BLUR_FADE_DELAY = 0.18;
const ContactSection = () => {
  return (
    <section id="contact" className="container">
      <div className="border-x border-t overflow-hidden relative p-2 py-6 md:p-8">
        <h2 className="text-sm text-muted-foreground text-center mb-6 text-balance font-semibold tracking-tigh uppercase">
          contact
        </h2>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-full w-full bg-gradient-to-t from-background dark:from-background -z-10 from-50%"></div>
        <FlickeringGrid
          className="w-full h-full -z-20 absolute inset-0 size-full"
          color="#262626"
        />
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full ">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Stay Connected
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact[0].url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
      <div className="grid grid-cols-4 border-x border-t divide-x">
        {DATA.contact.map((con, idx) => (
          <a href="#" className="px-8 py-12 relative group flex justify-center">
            <div className="opacity-10 group-hover:opacity-100 transition-opacity">
              <con.icon className="size-16" />
            </div>
            <div className="absolute inset-0 bottom-0 group-hover:opacity-50 opacity-0 bg-muted/80 transition-opacity">
              <div className="flex justify-between p-4 mt-auto">
                <span>{con.name}</span>
                <span>
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;

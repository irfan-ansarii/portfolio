"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { CheckCircle, Loader, SendHorizonal, X } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

import BlurFade from "./magicui/blur-fade";
import { Input } from "./ui/input";
import { sendEmail } from "@/lib/utils";

const values = { email: "", message: "" };

const ContactForm = () => {
  const [value, setValue] = useState(values);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const disabled = !value.message || !value.email || loading;

  const handleSubmit = async (v: FormEvent<HTMLFormElement>) => {
    sendGAEvent("event", "contact_form", {
      category: "Contact",
      label: value.email,
    });

    if (typeof window !== "undefined")
      window.localStorage.setItem("form-submitted", "true");

    v.preventDefault();
    setLoading(true);

    const message = `
    <p>Email: ${value.email}</p>
    <p>Email: ${value.message}</p>
    `;

    try {
      await sendEmail({ message });

      setSuccess(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setValue(values);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const submit = window.localStorage.getItem("form-submitted");
      if (submit === "true") setSuccess(true);
    }
  }, []);
  return (
    <div className="border-x border-t p-4 sm:p-8 relative">
      <div className="max-w-md mx-auto bg-background">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 relative bg-background"
        >
          {success && (
            <span className="absolute inset-0 bg-background/50"></span>
          )}
          <Input
            value={value.email}
            onChange={(e) => setValue({ ...value, email: e.target.value })}
            type="email"
            name="email"
            placeholder="Email*"
            className="py-3 bg-background transition duration-300 text-xs"
            id="move"
          />

          <Input
            value={value.message}
            onChange={(e) => setValue({ ...value, message: e.target.value })}
            type="text"
            name="message"
            placeholder="Type here..."
            className="py-3 bg-background transition duration-300 text-xs"
          />

          <button
            className={`flex w-full py-3 bg-secondary outline-none transition duration-300 justify-center items-center group text-xs hover:bg-secondary/70 disabled:opacity-80 `}
            disabled={disabled}
          >
            {loading ? (
              <Loader className="size-4 animate-spin" />
            ) : (
              <span className="relative">
                <SendHorizonal className="size-3.5 absolute left-full opacity-0 group-disabled:opacity-0 transition duration-300 group-hover:opacity-100 transform group-hover:translate-x-2" />
                Send
              </span>
            )}
          </button>
        </form>
        {success && (
          <BlurFade
            delay={0}
            inView
            className="flex items-start py-3 px-4 mt-2 text-xs text-green-700 bg-green-100 dark:bg-green-950/60"
          >
            <CheckCircle className="shrink-0 inline size-4 me-2" />
            <span className="sr-only">Info</span>
            <div className="pr-4">
              <p className="font-semibold">Thankyou for you message,</p>
              <p>I will get back to you soon!</p>
            </div>
            <button
              className="absolute text-muted-foreground opacity-50 hover:opacity-80 transition-opacity inset-y-0 right-4"
              onClick={() => {
                setSuccess(false);
                window.localStorage.removeItem("form-submitted");
              }}
            >
              <X className="size-4 " />
            </button>
          </BlurFade>
        )}
      </div>
    </div>
  );
};

export default ContactForm;

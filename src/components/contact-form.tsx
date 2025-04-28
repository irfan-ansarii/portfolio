"use client";
import React, { FormEvent, useState } from "react";
import { CheckCircle, Loader, Send, TriangleAlert, X } from "lucide-react";

import BlurFade from "./magicui/blur-fade";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const disabled = !message || loading;

  const handleSubmit = (v: FormEvent<HTMLFormElement>): void => {
    v.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setMessage("");
    }, 1000);
  };

  return (
    <div
      className="border-x border-t relative p-4 sm:p-8 bg-gradient-to-b from-secondary to-transparent"
      // onMouseEnter={() => setShowAlert(true)}
      onMouseLeave={() => setShowAlert(false)}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="message"
          placeholder="Enter your email here..."
          className="px-4 py-3 h-11 focus:bg-secondary hover:bg-secondary bg-background border text-xs outline-none transition duration-300"
        />
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          name="message"
          placeholder="Enter your message here..."
          className="px-4 py-3 h-11 bg-background hover:bg-secondary focus:bg-secondary border text-xs outline-none transition duration-300"
        />

        <button
          className={`flex w-full h-11 bg-secondary self-stretch border justify-center items-center group text-xs text-muted-foreground gap-2 ${
            disabled ? "text-muted-foreground" : "hover:bg-secondary/80"
          }`}
          disabled={disabled}
        >
          {loading ? (
            <Loader className="size-4 animate-spin" />
          ) : (
            <>
              <Send className="size-4" />
              Send
            </>
          )}
        </button>
      </form>
      {success && (
        <BlurFade
          delay={0}
          inView
          className="flex absolute inset-0 items-start p-4 text-sm text-green-500  bg-green-50 dark:bg-[#000e06]"
        >
          <CheckCircle className="shrink-0 inline size-5 me-2" />
          <span className="sr-only">Info</span>
          <div> Thankyou for you message, I will get back to you soon!</div>
          <button
            className="absolute opacity-50 hover:opacity-80 transition-opacity inset-y-0 w-10 right-0 text-green-900 dark:text-green-100"
            onClick={() => setSuccess(false)}
          >
            <X className="size-4 " />
          </button>
        </BlurFade>
      )}

      {showAlert && (
        <BlurFade
          delay={0}
          inView
          className="flex absolute inset-0 items-start justify-center p-4 text-sm text-yellow-600  bg-yellow-50 dark:bg-[#1c1202]"
        >
          <TriangleAlert className="shrink-0 inline size-5 me-2" />
          <span className="sr-only">Info</span>
          <div>The contact form is currently not working!</div>
        </BlurFade>
      )}
    </div>
  );
};

export default ContactForm;

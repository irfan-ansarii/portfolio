"use client";
import React, { FormEvent, useState } from "react";
import { CheckCircle, Loader, Send, TriangleAlert, X } from "lucide-react";

import BlurFade from "./magicui/blur-fade";

const ContactForm = () => {
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
      className="border-x border-t relative"
      onMouseEnter={() => setShowAlert(true)}
      onMouseLeave={() => setShowAlert(false)}
    >
      <form onSubmit={handleSubmit} className="flex">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          name="message"
          placeholder="Send me a message..."
          className="flex-[1_1_0] px-8 bg-background text-sm outline-none"
        />
        <button
          className={`px-4 w-1/4 border-l outline-none h-14 bg-background transition-all text-sm inline-flex items-center justify-center gap-2 focus:bg-secondary ${
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

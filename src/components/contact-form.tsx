"use client";
import React, { FormEvent, useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const disabled = !message || loading;

  const handleSubmit = (v: FormEvent<HTMLFormElement>): void => {
    v.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };
  return (
    <div className="border-x border-t relative">
      <form onSubmit={handleSubmit} className="flex">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          name="message"
          placeholder="Send me a message..."
          className="flex-1 px-8 bg-background text-sm outline-none"
        />
        <button
          className={`px-4 w-1/4 border-l outline-none h-14 bg-muted/20 hover:bg-muted/60 transition-all text-sm inline-flex items-center justify-center gap-2 ${
            disabled ? "cursor-not-allowed	text-muted-foreground" : ""
          }`}
        >
          <Send className="size-4" />
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      <div className="absolute inset-0 flex items-center">
        <p className="text-green-600 text-sm">
          Thankyou for you message, I'll get back to you soon.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;

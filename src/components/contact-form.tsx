"use client";
import React, { FormEvent, useState } from "react";
import { Send, X } from "lucide-react";

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
      setMessage("");
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
          className={`px-4 w-1/4 border-l outline-none h-14 bg-muted/20 transition-all text-sm inline-flex items-center justify-center gap-2 ${
            disabled
              ? "text-muted-foreground hover:bg-muted/20"
              : "hover:bg-muted/60"
          }`}
          disabled={disabled}
        >
          <Send className="size-4" />
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      {success && (
        <div className="absolute inset-0 bg-background">
          <div className="relative flex items-center h-full px-4 sm:px-8">
            <p className="text-sm text-green-700">
              Thankyou for you message, I'll get back to you soon.
            </p>
          </div>
          <button
            className="absolute opacity-50 hover:opacity-80 transition-opacity inset-y-0 w-10 right-0"
            onClick={() => setSuccess(false)}
          >
            <X className="size-4 " />
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;

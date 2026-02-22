import Layout from "@/components/Layout";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-2xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h1>
        <p className="text-muted-foreground mb-8">
          Have a question, suggestion, or want to collaborate? We would love to hear from you. Fill out the form below and our team will get back to you within 48 hours.
        </p>

        {submitted ? (
          <div className="bg-accent rounded-lg p-8 text-center">
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Thank You!</h2>
            <p className="text-muted-foreground">Your message has been received. We will respond as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
              <input type="text" id="name" required className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
              <input type="email" id="email" required className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
              <input type="text" id="subject" required className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea id="message" rows={5} required className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            </div>
            <button type="submit" className="px-6 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default Contact;

import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from "@heroicons/react/16/solid";
import { Github, Linkedin } from "lucide-react";
import React from "react";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      id: 1,
      icon: DevicePhoneMobileIcon,
      title: "Phone",
      content: [{ text: "+234 707 2598 854", href: "tel:+2347072598854" }],
    },
    {
      id: 2,
      icon: EnvelopeIcon,
      title: "Email",
      content: "chideranwaolisa@gmail.com",
      link: "mailto:chideranwaolisa@gmail.com",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="section-title mb-4">Get in Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {contactInfo.map((item) => (
            <div
              key={item.id}
              className="card-base group"
            >
              <div className="w-12 h-12 rounded-xl bg-claude-accent/10 flex items-center justify-center mb-4 group-hover:bg-claude-accent/15 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-claude-accent" />
              </div>

              <h3 className="text-base font-semibold text-claude-text mb-2">
                {item.title}
              </h3>

              {Array.isArray(item.content) ? (
                <div className="space-y-1">
                  {item.content.map((phone, idx) => (
                    <a
                      key={idx}
                      href={phone.href}
                      className="block text-sm text-claude-text-secondary hover:text-claude-accent transition-colors"
                    >
                      {phone.text}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  href={item.link}
                  className="text-sm text-claude-text-secondary hover:text-claude-accent transition-colors break-all"
                >
                  {item.content}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-16">
          <a
            href="https://github.com/Pedrosaint"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-claude-border rounded-xl text-sm font-medium text-claude-text hover:border-claude-accent/30 hover:shadow-card transition-all"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jude-nwaolisa-010b78335"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-claude-border rounded-xl text-sm font-medium text-claude-text hover:border-claude-accent/30 hover:shadow-card transition-all"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-claude-border mb-8" />

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-claude-text-muted text-sm">
            Jude Nwaolisa &middot; 2025 &middot; All Rights Reserved
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#terms"
              className="text-sm text-claude-text-muted hover:text-claude-accent transition-colors"
            >
              Terms
            </a>
            <span className="text-claude-border">&middot;</span>
            <a
              href="#privacy"
              className="text-sm text-claude-text-muted hover:text-claude-accent transition-colors"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

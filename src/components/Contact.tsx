import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from "@heroicons/react/16/solid";
import { Github, Linkedin, X } from "lucide-react";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [activeModal, setActiveModal] = useState<"terms" | "privacy" | null>(null);

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
    <section id="contact" className="section-padding bg-claude-surface">
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
            className="flex items-center gap-2 px-5 py-2.5 bg-claude-surface border border-claude-border rounded-xl text-sm font-medium text-claude-text hover:border-claude-accent/30 hover:shadow-card transition-all"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jude-nwaolisa-010b78335"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-claude-surface border border-claude-border rounded-xl text-sm font-medium text-claude-text hover:border-claude-accent/30 hover:shadow-card transition-all"
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
            <button
              onClick={() => setActiveModal("terms")}
              className="text-sm text-claude-text-muted hover:text-claude-accent transition-colors cursor-pointer"
            >
              Terms
            </button>
            <span className="text-claude-border">&middot;</span>
            <button
              onClick={() => setActiveModal("privacy")}
              className="text-sm text-claude-text-muted hover:text-claude-accent transition-colors cursor-pointer"
            >
              Privacy
            </button>
          </div>
        </div>
      </div>

      {/* Terms & Privacy Modal */}
      {activeModal && (
        <>
          <div
            className="fixed inset-0 z-[9999] bg-black/30 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          />
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            <div className="bg-claude-surface border border-claude-border rounded-2xl shadow-elevated max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-claude-text">
                  {activeModal === "terms" ? "Terms of Use" : "Privacy Policy"}
                </h3>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 rounded-lg hover:bg-claude-surface-alt transition-colors"
                >
                  <X size={18} className="text-claude-text-secondary" />
                </button>
              </div>

              {activeModal === "terms" ? (
                <div className="space-y-4 text-sm text-claude-text-secondary leading-relaxed">
                  <p>
                    Welcome to my portfolio. By accessing and using this website,
                    you agree to the following terms.
                  </p>
                  <h4 className="text-base font-semibold text-claude-text">
                    Intellectual Property
                  </h4>
                  <p>
                    All content on this website — including designs, text,
                    and images — is my original work unless otherwise
                    credited. You may not reproduce, distribute, or use any
                    content without prior written permission.
                  </p>
                  <h4 className="text-base font-semibold text-claude-text">
                    Project Showcases
                  </h4>
                  <p>
                    Projects displayed are for demonstration and portfolio
                    purposes. Some may be client work shown with permission,
                    while others are personal or open-source projects.
                  </p>
                  <h4 className="text-base font-semibold text-claude-text">
                    Contact & Engagement
                  </h4>
                  <p>
                    When you submit a testimonial, you agree to provide
                    accurate information. I reserve the right to moderate or
                    remove submissions that are inappropriate or misleading.
                  </p>
                  <h4 className="text-base font-semibold text-claude-text">
                    Disclaimer
                  </h4>
                  <p>
                    This portfolio is provided "as is." I make no guarantees
                    about the availability or accuracy of the content and am not
                    liable for any issues arising from its use.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 text-sm text-claude-text-secondary leading-relaxed">
                  <p>
                    Your privacy matters. This policy explains how I handle
                    information collected through this portfolio website.
                  </p>
                  <h4 className="text-base font-semibold text-claude-text">
                    Information Collected
                  </h4>
                  <p>
                    I only collect information you voluntarily provide — such as
                    your name, role, photo, and review text when submitting a
                    testimonial. No tracking cookies or analytics scripts are
                    used to monitor your browsing behavior.
                  </p>
                  <h4 className="text-base font-semibold text-claude-text">
                    How It's Used
                  </h4>
                  <p>
                    Testimonial data (name, role, photo, review) is stored in
                    Firebase and displayed publicly on this site. Photos are
                    uploaded to Cloudinary for hosting. This data is used solely
                    for displaying client reviews.
                  </p>
                  <h4 className="text-base font-semibold text-claude-text">
                    Third-Party Services
                  </h4>
                  <p>
                    This site uses Firebase (database & hosting) and Cloudinary
                    (image storage). These services have their own privacy
                    policies governing how they process data.
                  </p>
                  <h4 className="text-base font-semibold text-claude-text">
                    Your Rights
                  </h4>
                  <p>
                    If you've submitted a testimonial and wish to have it
                    updated or removed, please contact me directly at{" "}
                    <a
                      href="mailto:chideranwaolisa@gmail.com"
                      className="text-claude-accent hover:text-claude-accent-hover transition-colors"
                    >
                      chideranwaolisa@gmail.com
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Contact;

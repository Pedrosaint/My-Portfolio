import React, { useState } from "react";
import { X } from "lucide-react";

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<"terms" | "privacy" | null>(null);

  return (
    <>
      <footer className="bg-claude-surface border-t border-claude-border px-4 sm:px-6 lg:px-8 py-6">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
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
      </footer>

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
                  <h4 className="text-base font-semibold text-claude-text">Intellectual Property</h4>
                  <p>
                    All content on this website — including designs, text, and images — is my
                    original work unless otherwise credited. You may not reproduce, distribute,
                    or use any content without prior written permission.
                  </p>
                  <h4 className="text-base font-semibold text-claude-text">Project Showcases</h4>
                  <p>
                    Projects displayed are for demonstration and portfolio purposes. Some may be
                    client work shown with permission, while others are personal or open-source projects.
                  </p>
                  <h4 className="text-base font-semibold text-claude-text">Contact & Engagement</h4>
                  <p>
                    When you submit a testimonial, you agree to provide accurate information. I
                    reserve the right to moderate or remove submissions that are inappropriate or misleading.
                  </p>
                  <h4 className="text-base font-semibold text-claude-text">Disclaimer</h4>
                  <p>
                    This portfolio is provided "as is." I make no guarantees about the availability
                    or accuracy of the content and am not liable for any issues arising from its use.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 text-sm text-claude-text-secondary leading-relaxed">
                  <p>
                    Your privacy matters. This policy explains how I handle information collected
                    through this portfolio website.
                  </p>
                  <h4 className="text-base font-semibold text-claude-text">Information Collected</h4>
                  <p>
                    I only collect information you voluntarily provide — such as your name, role,
                    photo, and review text when submitting a testimonial. No tracking cookies or
                    analytics scripts are used to monitor your browsing behavior.
                  </p>
                  <h4 className="text-base font-semibold text-claude-text">How It's Used</h4>
                  <p>
                    Testimonial data (name, role, photo, review) is stored in Firebase and displayed
                    publicly on this site. Photos are uploaded to Cloudinary for hosting. This data
                    is used solely for displaying client reviews.
                  </p>
                  <h4 className="text-base font-semibold text-claude-text">Third-Party Services</h4>
                  <p>
                    This site uses Firebase (database & hosting) and Cloudinary (image storage).
                    These services have their own privacy policies governing how they process data.
                  </p>
                  <h4 className="text-base font-semibold text-claude-text">Your Rights</h4>
                  <p>
                    If you've submitted a testimonial and wish to have it updated or removed, please
                    contact me directly at{" "}
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
    </>
  );
};

export default Footer;

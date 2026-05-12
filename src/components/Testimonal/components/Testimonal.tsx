import React, { useState } from "react";
import TestimonialSlider from "./TestimonialSlider";
import { uploadImageToCloudinary } from "../../../utilities/cloudinaryHelper";
import { db } from "../../Firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import {
  Upload,
  User,
  Briefcase,
  MessageSquare,
  Send,
  CheckCircle,
  X,
  Star,
} from "lucide-react";

const Testimonial: React.FC = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setImage(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const resetForm = () => {
    setName("");
    setRole("");
    setText("");
    setImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !role || !text) {
      toast.error("Please fill in your name, role, and review.");
      return;
    }

    setUploading(true);
    let imageUrl = "";

    if (image) {
      try {
        imageUrl = await uploadImageToCloudinary(image);
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Failed to upload image. Please try again.");
        setUploading(false);
        return;
      }
    }

    const newReview = { name, role, text, image: imageUrl };

    try {
      await addDoc(collection(db, "reviews"), newReview);
      setShowSuccessModal(true);
      resetForm();
    } catch (error) {
      console.error("Error adding review:", error);
      toast.error("Failed to add review. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <section className="section-padding bg-claude-bg min-h-screen">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="section-title mb-4">Client Reviews</h2>
            <p className="section-subtitle">
              See what clients say about working with me
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="mb-16">
            <TestimonialSlider />
          </div>

          {/* Review Form */}
          <div className="max-w-2xl mx-auto">
            <div className="card-base">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-claude-accent/10 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-claude-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-claude-text">
                    Share Your Experience
                  </h3>
                  <p className="text-claude-text-muted text-sm">
                    We'd love to hear from you
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium text-claude-text mb-1.5">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <User className="w-4 h-4 text-claude-text-muted" />
                    </div>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-claude-surface border border-claude-border rounded-lg text-claude-text placeholder-claude-text-muted focus:outline-none focus:ring-2 focus:ring-claude-accent/20 focus:border-claude-accent transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Role Input */}
                <div>
                  <label className="block text-sm font-medium text-claude-text mb-1.5">
                    Your Role
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Briefcase className="w-4 h-4 text-claude-text-muted" />
                    </div>
                    <input
                      type="text"
                      placeholder="CEO, Company Name"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-claude-surface border border-claude-border rounded-lg text-claude-text placeholder-claude-text-muted focus:outline-none focus:ring-2 focus:ring-claude-accent/20 focus:border-claude-accent transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Review Textarea */}
                <div>
                  <label className="block text-sm font-medium text-claude-text mb-1.5">
                    Your Review
                  </label>
                  <textarea
                    placeholder="Tell us about your experience..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2.5 bg-claude-surface border border-claude-border rounded-lg text-claude-text placeholder-claude-text-muted focus:outline-none focus:ring-2 focus:ring-claude-accent/20 focus:border-claude-accent transition-all resize-none text-sm"
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-claude-text mb-1.5">
                    Your Photo{" "}
                    <span className="text-claude-text-muted font-normal">(optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleImageChange}
                      accept="image/*"
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="block w-full p-5 border-2 border-dashed border-claude-border rounded-xl cursor-pointer hover:border-claude-accent/40 hover:bg-claude-surface-alt/50 transition-all"
                    >
                      {imagePreview ? (
                        <div className="flex items-center gap-4">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-12 h-12 rounded-full object-cover border-2 border-claude-accent/30"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-claude-text truncate">
                              {image?.name}
                            </p>
                            <p className="text-xs text-claude-text-muted">
                              Click to change
                            </p>
                          </div>
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <Upload className="w-8 h-8 text-claude-text-muted" />
                          <div className="text-center">
                            <span className="text-sm text-claude-accent font-medium">
                              Click to upload
                            </span>
                            <span className="text-sm text-claude-text-muted">
                              {" "}or drag and drop
                            </span>
                          </div>
                          <p className="text-xs text-claude-text-muted">
                            PNG, JPG up to 5MB
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Uploading status */}
                {uploading && (
                  <div className="flex items-center gap-3 p-3 bg-claude-accent/5 border border-claude-accent/20 rounded-lg">
                    <div className="w-4 h-4 border-2 border-claude-accent border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm text-claude-accent font-medium">
                      Submitting your review...
                    </span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={uploading}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-claude-accent text-white rounded-xl font-medium text-sm hover:bg-claude-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-soft hover:shadow-card"
                >
                  {uploading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Review</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <>
          <div
            className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
          />
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            <div className="bg-claude-surface border border-claude-border rounded-2xl shadow-elevated max-w-sm w-full p-8 text-center">
              {/* Close */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-claude-surface-alt transition-colors"
              >
                <X size={16} className="text-claude-text-muted" />
              </button>

              {/* Icon */}
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-8 h-8 text-green-500 dark:text-green-400" />
              </div>

              {/* Heading */}
              <h3 className="text-xl font-bold text-claude-text mb-2">
                Thank You!
              </h3>

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-claude-accent text-claude-accent" />
                ))}
              </div>

              {/* Message */}
              <p className="text-claude-text-secondary text-sm leading-relaxed mb-6">
                Your review has been submitted successfully. It means a lot and will be visible on the testimonials section shortly.
              </p>

              {/* CTA */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-2.5 bg-claude-accent text-white font-medium text-sm rounded-xl hover:bg-claude-accent-hover transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Testimonial;

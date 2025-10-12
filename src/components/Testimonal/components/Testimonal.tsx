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
  Sparkles,
} from "lucide-react";

const Testimonial: React.FC = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setImage(selectedFile);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !role || !text || !image) {
      toast.error("Please fill all the fields and select an image.");
      return;
    }

    setUploading(true);
    let imageUrl = "";

    try {
      imageUrl = await uploadImageToCloudinary(image);
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image. Please try again.");
      setUploading(false);
      return;
    }

    const newReview = { name, role, text, image: imageUrl };

    try {
      await addDoc(collection(db, "reviews"), newReview);
      toast.success("Review added successfully!");
      setSubmitted(true);

      // Reset form after animation
      setTimeout(() => {
        setName("");
        setRole("");
        setText("");
        setImage(null);
        setImagePreview(null);
        setSubmitted(false);
      }, 2000);
    } catch (error) {
      console.error("Error adding review:", error);
      toast.error("Failed to add review. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#121121] via-[#1a1832] to-[#121121] pt-16 md:pt-24 pb-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      </div>
      {/* Header Section */}
      <div className="text-center mb-16">
        {" "}
        <div className="inline-flex items-center gap-2 mb-4">
          <Sparkles className="text-yellow-400 animate-pulse" size={32} />
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Client
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Reviews
            </span>
          </h1>
          <Sparkles className="text-yellow-400 animate-pulse" size={32} />
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full" />
        <p className="text-gray-400 text-lg max-w-2xl mx-auto px-4">
          See what our clients say about us and share your experience
        </p>
      </div>

      {/* Testimonial Slider */}
      <div className="animate-slide-up">
        <TestimonialSlider />
      </div>

      {/* Review Form Section */}
      <div className="container mx-auto px-4 pt-16">
        <div className="bg-gradient-to-br from-[#221f41] to-[#1a1832] rounded-3xl p-8 md:p-12 shadow-2xl border border-yellow-400/20 backdrop-blur-lg animate-slide-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Share Your Experience
              </h2>
              <p className="text-gray-400 text-sm">
                We'd love to hear from you!
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="group animate-fade-in-delayed">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Your Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-gray-500 group-focus-within:text-yellow-400 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#121121] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Role Input */}
            <div className="group animate-fade-in-delayed-2">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Your Role/Position
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Briefcase className="w-5 h-5 text-gray-500 group-focus-within:text-yellow-400 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="CEO, Company Name"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#121121] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Review Textarea */}
            <div className="animate-fade-in-delayed-3">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Your Review
              </label>
              <textarea
                placeholder="Tell us about your experience..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={5}
                className="w-full px-4 py-3 bg-[#121121] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Image Upload */}
            <div className="animate-fade-in-delayed-4">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Your Photo
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
                  className="block w-full p-6 border-2 border-dashed border-gray-700 rounded-xl cursor-pointer hover:border-yellow-400 hover:bg-[#121121] transition-all group"
                >
                  {imagePreview ? (
                    <div className="flex items-center gap-4">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
                      />
                      <div className="flex-1">
                        <p className="text-white font-medium">{image?.name}</p>
                        <p className="text-sm text-gray-400">
                          Click to change photo
                        </p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-500 animate-bounce" />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="w-10 h-10 text-gray-500 group-hover:text-yellow-400 transition-colors" />
                      <div className="text-center">
                        <span className="text-yellow-400 font-medium">
                          Click to upload
                        </span>
                        <span className="text-gray-400"> or drag and drop</span>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 5MB
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Upload Progress */}
            {uploading && (
              <div className="flex items-center gap-3 p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-xl animate-pulse">
                <div className="w-6 h-6 border-3 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-yellow-400 font-medium">
                  Uploading your review...
                </span>
              </div>
            )}

            {/* Success Message */}
            {submitted && (
              <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl animate-bounce">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-green-500 font-medium">
                  Review submitted successfully!
                </span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={uploading || submitted}
              className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#121121] rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-yellow-400/30"
            >
              {uploading ? (
                <>
                  <div className="w-5 h-5 border-3 border-[#121121] border-t-transparent rounded-full animate-spin"></div>
                  <span>Uploading...</span>
                </>
              ) : submitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Submitted!</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit Review</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in 0.6s ease-out 0.1s backwards;
        }

        .animate-fade-in-delayed-2 {
          animation: fade-in 0.6s ease-out 0.2s backwards;
        }

        .animate-fade-in-delayed-3 {
          animation: fade-in 0.6s ease-out 0.3s backwards;
        }

        .animate-fade-in-delayed-4 {
          animation: fade-in 0.6s ease-out 0.4s backwards;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;

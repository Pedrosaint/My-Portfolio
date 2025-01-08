import React, { useState } from "react";
import TestimonialSlider from "./TestimonialSlider";
import { uploadImageToCloudinary } from "../utilities/cloudinaryHelper"; // Cloudinary helper
import { db } from "../components/Firebase/Firebase"; // Import Firebase DB
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const Testimonal: React.FC = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageName, setImageName] = useState("No file chosen"); // State for custom text
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setImage(selectedFile);
      setImageName(selectedFile.name); // Update custom text with file name
      console.log("Selected image:", selectedFile.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !role || !text || !image) {
      toast.error("Please fill all the fields and select an image.");
      console.error("Form validation failed: Missing required fields.");
      return;
    }

    setUploading(true);
    let imageUrl = "";

    try {
      console.log("Uploading image to Cloudinary...");
      imageUrl = await uploadImageToCloudinary(image);
      console.log("Image uploaded successfully:", imageUrl);
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      toast.error("Failed to upload image. Please try again.");
      setUploading(false);
      return;
    }

    setUploading(false);

    const newReview = { name, role, text, image: imageUrl };

    try {
      console.log("Adding review to Firebase:", newReview);
      await addDoc(collection(db, "reviews"), newReview); // Use initialized `db`
      toast.success("Review added successfully!");
      console.log("Review added successfully:", newReview);

      // Reset form
      setName("");
      setRole("");
      setText("");
      setImage(null);
      setImageName("No file chosen"); // Reset custom text
    } catch (error) {
      console.error("Error adding review to Firebase:", error);
      toast.error("Failed to add review. Please try again.");
    }
  };

  return (
    <div className="bg-[#121121] pt-[4rem] md:pt-[8rem] ph-[1rem]">
      <h1 className="heading mb-9">
        CLIENT <span className="text-yellow-400">REVIEW</span>
      </h1>
      <TestimonialSlider />
      {/* Review Form */}
      <form
        onSubmit={handleSubmit}
        className="w-[80%] mx-auto pt-[3rem] pb-[3rem] outline-none"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 outline-none bg-[#221f41] text-white"
        />
        <input
          type="text"
          placeholder="Your Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-3 mb-4 outline-none bg-[#221f41] text-white"
        />
        <textarea
          placeholder="Your Review"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-3 mb-4 outline-none bg-[#221f41] text-white"
        />
        <div className="mb-4">
          <label className="flex items-center cursor-pointer">
            <span className="bg-yellow-400 text-white py-2 px-4 rounded-l">
              Choose File
            </span>
            <span className="bg-gray-200 py-2 px-4 rounded-r flex-1 text-center text-gray-700">
              {imageName}
            </span>
            <input
              type="file"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>
        {uploading && (
          <p className="text-yellow-400 mb-4">Uploading image...</p>
        )}
        <button
          type="submit"
          disabled={uploading}
          className="bg-yellow-500 text-white p-2 hover:bg-yellow-600 rounded-md"
        >
          {uploading ? "Uploading..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
};

export default Testimonal;

import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "../../ClientReview";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface Review {
  name: string;
  role: string;
  image: string;
  text: string;
}

const TestimonialSlider: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const db = getFirestore();

  useEffect(() => {
    // Use onSnapshot to listen for real-time updates
    const unsubscribe = onSnapshot(
      collection(db, "reviews"),
      (querySnapshot) => {
        const reviewsData: Review[] = querySnapshot.docs.map(
          (doc) => doc.data() as Review
        );

        // Log fetched data to verify correctness
        console.log("Real-time Reviews Data:", reviewsData);

        setReviews(reviewsData); // Update the state with the new reviews
      },
      (error) => {
        console.error("Error fetching reviews:", error);
      }
    );

    // Cleanup the listener when the component is unmounted
    return () => unsubscribe();
  }, [db]);

  // Log reviews state to ensure it's updated
  console.log("Reviews State:", reviews);

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={5000}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <ClientReview
            key={index}
            name={review.name}
            role={review.role}
            image={review.image}
            text={review.text}
          />
        ))
      ) : (
        <div className="text-center text-white">
          No reviews available at the moment.
        </div>
      )}
    </Carousel>
  );
};

export default TestimonialSlider;

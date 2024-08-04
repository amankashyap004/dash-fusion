import React from "react";
import { FaUserCircle, FaStar } from "react-icons/fa";
import StarRating from "../ui/StarRating";

interface Feedback {
  userName: string;
  rating: number;
  message: string;
}

const feedbacks: Feedback[] = [
  {
    userName: "John Doe",
    rating: 5,
    message:
      "Excellent service and great quality! The products arrived on time, and the packaging was intact. I will definitely recommend this to my friends and family.",
  },
  {
    userName: "Jane Smith",
    rating: 4,
    message:
      "Very good experience, will order again. The only issue was the slightly delayed delivery, but the customer support was very responsive and helpful.",
  },
  {
    userName: "Alice Johnson",
    rating: 3,
    message:
      "Average service, room for improvement. The product quality was okay, but the delivery took longer than expected. I hope for better service next time.",
  },
  {
    userName: "Robert Brown",
    rating: 2,
    message:
      "Not satisfied with the delivery time. The product arrived much later than promised, and the customer service was not very helpful in resolving the issue.",
  },
  {
    userName: "Emily Clark",
    rating: 4,
    message:
      "Good product quality but the delivery was slightly delayed. Customer support was responsive and provided updates throughout the process. Overall, a positive experience.",
  },
  {
    userName: "Michael Scott",
    rating: 5,
    message:
      "Fantastic service! The product was exactly as described, and the delivery was prompt. The customer support team was very helpful and courteous. Highly recommend!",
  },
];

const CustomersFeedback: React.FC = () => {
  return (
    <div className="flex flex-col h-full gap-2 bg-gray-800 p-2 lg:p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Customer&apos;s Feedback</h2>
      <div className="flex flex-col justify-start items-start gap-4 h-60 lg:h-56  overflow-y-scroll hidden-scrollbar">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-1 pb-4 border-b border-gray-500 border-opacity-50"
          >
            <div className="flex justify-center items-center gap-2">
              <FaUserCircle className="text-4xl text-gray-600" />
              <h3 className="text-lg font-semibold">{feedback.userName}</h3>
            </div>
            <div className="">
              <StarRating rating={feedback.rating} />
              <p className="opacity-70 text-sm">{feedback.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomersFeedback;

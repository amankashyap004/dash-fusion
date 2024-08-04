import React from "react";

interface StarProps {
  percent: number;
}

const Star: React.FC<StarProps> = ({ percent }) => {
  return (
    <div className="relative w-4 h-6">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <span className="text-gray-400">&#9733;</span>
      </div>
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${percent * 100}%` }}
      >
        <span className="text-yellow-500">&#9733;</span>
      </div>
    </div>
  );
};

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  const wholeStars = Math.floor(rating);
  const decimalPart = rating - wholeStars;

  const stars: JSX.Element[] = [];

  // Full stars
  for (let i = 0; i < wholeStars; i++) {
    stars.push(<Star key={i} percent={1} />);
  }

  // Partial star
  if (decimalPart > 0 && decimalPart < 1) {
    stars.push(<Star key="partial" percent={decimalPart} />);
  }

  // Empty stars
  for (let i = 0; i < maxRating - wholeStars - (decimalPart > 0 ? 1 : 0); i++) {
    stars.push(<Star key={maxRating - i} percent={0} />);
  }

  return <div className="flex justify-start items-center gap-0">{stars}</div>;
};

export default StarRating;

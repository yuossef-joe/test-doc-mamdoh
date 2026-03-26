import { getStarArray } from "@/lib/utils";
import { PiStarFill, PiStarHalfFill, PiStar } from "react-icons/pi";

interface StarRatingProps {
  rating: number;
  size?: number;
}

export default function StarRating({ rating, size = 16 }: StarRatingProps) {
  const stars = getStarArray(rating);

  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}>
      {stars.map((star, i) => {
        if (star === "full")
          return <PiStarFill key={i} size={size} className="text-warning" />;
        if (star === "half")
          return (
            <PiStarHalfFill key={i} size={size} className="text-warning" />
          );
        return <PiStar key={i} size={size} className="text-border" />;
      })}
    </div>
  );
}

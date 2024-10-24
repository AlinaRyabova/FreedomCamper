import { clsx } from "clsx";
import css from "./StarRating.module.css";
import { HiStar } from "react-icons/hi";

interface StarRatingProps {
  rating: number;
}

export default function StarRating({ rating }: StarRatingProps) {
  const ratingNumber = [1, 2, 3, 4, 5];

  return (
    <ul className={css.listStar}>
      {ratingNumber.map((number) => (
        <li key={number}>
          <HiStar
            className={clsx(
              number <= Math.floor(rating) ? css.yellow : css.grey
            )}
          />
        </li>
      ))}
    </ul>
  );
}
import { useSelector } from "react-redux";
import { selectTruckItems } from "../../redux/truck/selectors";
import css from "./TruckReviews.module.css";
import StarRating from "../StarRating/StarRating";
import OrderForm from "../OrderForm/OrderForm";

export default function TruckReviews() {
  const truckInfo = useSelector(selectTruckItems);

  const { reviews } = truckInfo;

  return (
    <div className={css.reviewsContainer}>
      <ul className={css.reviewsList}>
        {reviews.map((review, i) => (
          <li key={i}>
            <div className={css.nameContainer}>
              <div className={css.logoName}>
                <p className={css.logoNameLetter}>
                  {review.reviewer_name[0].toUpperCase()}
                </p>
              </div>
              <div>
                <p className={css.textName}>{review.reviewer_name}</p>
                <StarRating rating={review.reviewer_rating} />
              </div>
            </div>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
      <OrderForm />
    </div>
  );
}

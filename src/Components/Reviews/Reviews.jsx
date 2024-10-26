import { useSelector } from "react-redux";
import { selectTruckItems } from "../../redux/truck/selectors";
import css from "./Reviews.module.css";
import Rating from "../Rating/Rating";
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
                <Rating rating={review.reviewer_rating} />
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

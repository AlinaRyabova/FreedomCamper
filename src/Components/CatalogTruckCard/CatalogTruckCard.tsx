import { BsSuitHeart } from "react-icons/bs";
import css from "./CatalogTruckCard.module.css";
import { HiStar } from "react-icons/hi";
import { CiMap } from "react-icons/ci";
import { Link } from "react-router-dom";
import Category from "../Category/Category";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavoriteTruck } from "../../redux/favorites/slice";
import { selectIsFavoritedId } from "../../redux/favorites/selectors";
import { RootState, AppDispatch } from "../../redux/store";

interface Truck {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  reviews: { id: string; content: string }[];
  gallery: { thumb: string }[];
}

interface CatalogTruckCardProps {
  truck: Truck;
}

export default function CatalogTruckCard({ truck }: CatalogTruckCardProps) {
  const favorite = useSelector((state: RootState) =>
    selectIsFavoritedId(state)
  );
  const dispatch: AppDispatch = useDispatch();

  const handleIsFavorite = () => {
    dispatch(toggleFavoriteTruck({ id: truck.id }));
  };

  const { name, price, rating, location, description, reviews, gallery, id } =
    truck;

  return (
    <>
      <div className={css.imgContainer}>
        <img className={css.img} src={gallery[0].thumb} alt="Truck" />
      </div>
      <div className={css.truckInfo}>
        <div className={css.costContainer}>
          <h2 className={css.truckName}>{name}</h2>
          <div className={css.priceContainer}>
            <h2 className={css.truckPrice}>€{price}</h2>
            <button
              onClick={handleIsFavorite}
              type="button"
              className={css.buttonHeart}
            >
              <BsSuitHeart
                className={clsx(
                  favorite.some((item) => item.id === id)
                    ? css.active
                    : css.disabled
                )}
              />
            </button>
          </div>
        </div>
        <div className={css.subContainer}>
          <div className={css.ratingContainer}>
            <HiStar className={css.iconStar} />
            <p className={css.rating}>
              {rating}({reviews.length} Reviews)
            </p>
          </div>
          <div className={css.locationContainer}>
            <CiMap className={css.iconMap} />
            <p className={css.location}>{location}</p>
          </div>
        </div>
        <p className={css.description}>{description}</p>
        <div className={css.categoryContainer}>
          <Category truckInfo={truck} />
        </div>
        <Link className={css.link} to={`/catalog/${id}`}>
          Show more
        </Link>
      </div>
    </>
  );
}

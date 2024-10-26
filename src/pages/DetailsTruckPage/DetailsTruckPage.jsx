import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import css from "./DetailsTruckPage.module.css";
import { useEffect } from "react";
import { HiStar } from "react-icons/hi";
import { CiMap } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { selectTruckItems } from "../../redux/truck/selectors";
import { fetchTruck } from "../../redux/truck/operations";
import clsx from "clsx";

const changeActivePage = ({ isActive }, activeClass, inactiveClass) => {
  return clsx(inactiveClass, isActive && activeClass);
};

export default function DetailsTruckPage() {
  const { truckId } = useParams();
  const truckInfo = useSelector(selectTruckItems);
  const path = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTruck(truckId));
    window.scrollTo(0, 0);
  }, [dispatch, truckId]);

  if (truckInfo.length === 0) {
    return;
  }

  const { name, price, rating, location, description, reviews, gallery } =
    truckInfo;

  return (
    <section className={css.truckInfoSection}>
      <div className={css.truckInfoContainer}>
        <h2 className={css.truckName}>{name}</h2>
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
        <h2 className={css.truckPrice}>
          €
          {price.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            useGrouping: false,
          })}
        </h2>
      </div>

      <ul className={css.galleryList}>
        {gallery.map((image) => (
          <li className={css.galleryListItem} key={image.original}>
            <img
              className={css.truckImg}
              src={image.original}
              alt="photo truck"
            />
          </li>
        ))}
      </ul>
      <p className={css.textDescription}>{description}</p>
      <ul className={css.listLinks}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive || !path.pathname.includes("reviews")
                ? css.active
                : css.link
            }
            to="features"
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) =>
              changeActivePage(isActive, css.active, css.link)
            }
            to="reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </section>
  );
}

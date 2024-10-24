import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiStar } from "react-icons/hi";
import { CiMap } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import css from "./DetailsTruckPage.module.css";
import { selectTruckItems } from "../../redux/truck/selectors";
import { fetchTruck } from "../../redux/truck/operation";

const randomImgUrls = [
  "https://images.unsplash.com/photo-1533176403861-b654cad1ecf1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1697555347906-627461da8acf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1579451487071-84fbfea29fb0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503516353893-4bc5bd56f50d?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1685239198191-435b507d302d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1632381662862-aa849ae6262d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600221582960-9f7e10338b9a?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const getRandomImg = (): string => {
  const randomIndex = Math.floor(Math.random() * randomImgUrls.length);
  return randomImgUrls[randomIndex];
};

export const changeActivePage = (
  isActive: boolean,
  activeClass: string,
  inactiveClass: string
): string => {
  return clsx(inactiveClass, isActive && activeClass);
};

export default function DetailsTruckPage() {
  const { truckId } = useParams<{ truckId: string }>();
  const truckInfo = useSelector(selectTruckItems);
  const [randomImg, setRandomImg] = useState<string>("");
  const path = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (truckId) {
      dispatch(fetchTruck(truckId));
      setRandomImg(getRandomImg());
      window.scrollTo(0, 0);
    }
  }, [dispatch, truckId]);

  if (truckInfo.length === 0) {
    return null;
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
              {rating} ({reviews.length} Reviews)
            </p>
          </div>
          <div className={css.locationContainer}>
            <CiMap className={css.iconMap} />
            <p className={css.location}>{location}</p>
          </div>
        </div>
        <h2 className={css.truckPrice}>€{price}</h2>
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
        <li className={css.galleryListItem}>
          <img className={css.truckImg} src={randomImg} alt="photo truck" />
        </li>
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
            className={({ isActive }) =>
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

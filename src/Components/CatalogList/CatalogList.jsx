/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from "react-redux";
import css from "./CatalogList.module.css";
import {
  selectError,
  selectLoading,
  selectVisibleTrucks,
} from "../../redux/trucks/selectors";
import CatalogTruckCard from "../CatalogTruckCard/CatalogTruckCard";
import { activateLoader } from "../../redux/trucks/slice";
import clsx from "clsx";
import { selectPaginationPage } from "../../redux/pagination/selectors";
import { addValue } from "../../redux/pagination/slice";

export default function CatalogList() {
  const trucks = useSelector(selectVisibleTrucks);
  const visibleCount = useSelector(selectPaginationPage);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const loadMore = () => {
    dispatch(activateLoader(true));
    setTimeout(() => {
      dispatch(addValue(4));
      dispatch(activateLoader(false));
    }, 500);
  };

  return (
    <>
      <ul className={css.catalogList}>
        {trucks.slice(0, visibleCount).map((truck) => (
          <li className={css.catalogListItem} key={truck.id}>
            <CatalogTruckCard truck={truck} />
          </li>
        ))}
      </ul>
      {error && (
        <div className={css.fetchErrorImg}>
          <p>Connection issues. Please try again later.</p>
        </div>
      )}
      {trucks.length === 0 && !loading && !error ? (
        <div className={css.badFilter}>
          <p>Oops! We couldn't find any vans with your filters.</p>
        </div>
      ) : (
        <button
          onClick={loadMore}
          className={clsx(
            visibleCount >= trucks.length ? css.disLoadMore : css.loadMore
          )}
          disabled={visibleCount >= trucks.length ? true : false}
        >
          Load more
        </button>
      )}
    </>
  );
}

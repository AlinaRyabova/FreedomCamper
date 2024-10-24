import React from "react";
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

import { RootState, AppDispatch } from "../../redux/store";

const CatalogList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const trucks = useSelector((state: RootState) => selectVisibleTrucks(state));
  const visibleCount = useSelector((state: RootState) =>
    selectPaginationPage(state)
  );
  const loading = useSelector((state: RootState) => selectLoading(state));
  const error = useSelector((state: RootState) => selectError(state));

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
      {error && <img alt="Connection issues" />}
      {trucks.length === 0 && !loading && !error ? (
        <div className={css.badFilter}>
          <img alt="Oops! We couldn`t find any vans with your filters." />
        </div>
      ) : (
        <button
          onClick={loadMore}
          className={clsx(
            visibleCount >= trucks.length ? css.disLoadMore : css.loadMore
          )}
          disabled={visibleCount >= trucks.length}
        >
          Load more
        </button>
      )}
    </>
  );
};

export default CatalogList;

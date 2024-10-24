import css from "./CatalogPage.module.css";
import Filters from "../../Components/Filters/Filters";
import CatalogList from "../../Components/CatalogList/CatalogList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllTrucks } from "../../redux/trucks/operation";
import { resetFilters } from "../../redux/filters/slice";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrucks());
    dispatch(resetFilters());
  }, [dispatch]);

  return (
    <section className={css.catalog}>
      <div className={css.container}>
        <div className={css.filterContainer}>
          <Filters />
        </div>
        <div>
          <CatalogList />
        </div>
      </div>
    </section>
  );
}

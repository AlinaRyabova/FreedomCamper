import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filters/selectors";

export const selectItems = (state) => state.allTrucks.items;
export const selectError = (state) => state.allTrucks.error;
export const selectLoading = (state) => state.allTrucks.loading;

export const selectVisibleTrucks = createSelector(
  [selectItems, selectFilters],
  (trucks, filterName) => {
    return trucks.filter((truck) => {
      const filterLocation = filterName.location
        ? filterName.location.trim().toLowerCase()
        : "";
      const truckLocation = truck.location.toLowerCase();
      return (
        (!filterLocation ||
          filterLocation === "" ||
          truckLocation.includes(filterLocation)) &&
        (!filterName.transmission ||
          truck.transmission === filterName.transmission) &&
        (!filterName.engine || truck.engine === filterName.engine) &&
        (!filterName.form || truck.form === filterName.form) &&
        (!filterName.AC || truck.AC === filterName.AC) &&
        (!filterName.bathroom || truck.bathroom === filterName.bathroom) &&
        (!filterName.kitchen || truck.kitchen === filterName.kitchen) &&
        (!filterName.TV || truck.TV === filterName.TV) &&
        (!filterName.radio || truck.radio === filterName.radio) &&
        (!filterName.refrigerator ||
          truck.refrigerator === filterName.refrigerator) &&
        (!filterName.microwave || truck.microwave === filterName.microwave) &&
        (!filterName.gas || truck.gas === filterName.gas) &&
        (!filterName.water || truck.water === filterName.water)
      );
    });
  }
);

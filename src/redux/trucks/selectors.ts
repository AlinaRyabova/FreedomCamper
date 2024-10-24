import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { selectFilters } from "../filters/selectors";

interface Truck {
  id: string;
  location: string;
  transmission: string;
  engine: string;
  form: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
}

interface Filters {
  location?: string;
  transmission?: string;
  engine?: string;
  form?: string;
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
}

export const selectItems = (state: RootState): Truck[] => state.allTrucks.items;
export const selectError = (state: RootState): boolean => state.allTrucks.error;
export const selectLoading = (state: RootState): boolean =>
  state.allTrucks.loading;

export const selectVisibleTrucks = createSelector(
  [selectItems, selectFilters],
  (trucks: Truck[], filterName: Filters) => {
    return trucks.filter((truck) => {
      const filterLocation = filterName.location
        ? filterName.location.trim().toLowerCase()
        : "";
      const truckLocation = truck.location.toLowerCase();
      return (
        (!filterLocation || truckLocation.includes(filterLocation)) &&
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

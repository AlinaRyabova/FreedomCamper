import { Form, Formik } from "formik";
import css from "./Filters.module.css";
import Location from "../Location/Location";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import Vehicles from "../Vehicles/Vehicles";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../../redux/trucks/selectors";
import { addFilters } from "../../redux/filters/slice";
import { changeValue } from "../../redux/pagination/slice";
import { activateLoader } from "../../redux/trucks/slice";

const vehicleTypes = (items, key) => {
  return {
    types: [...new Set(items.map((item) => item[key]))],
    key,
  };
};

export default function Filters() {
  const items = useSelector(selectItems);
  const variantesEngine = vehicleTypes(items, "engine");
  const variantesForm = vehicleTypes(items, "form");
  const variantesTransmission = vehicleTypes(items, "transmission");
  const initialValues = {
    location: "",
    transmission: "",
    engine: "",
    form: "",
    AC: false,
    bathroom: false,
    kitchen: false,
    TV: false,
    radio: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false,
  };

  const dispatch = useDispatch();
  const handleFilterSubmit = (value, actions) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(activateLoader(true));
    setTimeout(() => {
      dispatch(addFilters(value));
      dispatch(changeValue(4));
      actions.resetForm();
      dispatch(activateLoader(false));
    }, 500);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFilterSubmit}>
      <Form>
        <Location />
        <VehicleEquipment />
        <Vehicles options={variantesEngine} />
        <Vehicles options={variantesForm} />
        <Vehicles options={variantesTransmission} />
        <button className={css.buttonFilters} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
}

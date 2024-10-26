import { Field } from "formik";
import css from "./Location.module.css";
import { CiMap } from "react-icons/ci";
import { useId } from "react";

export default function Location() {
  const locationId = useId();

  return (
    <div className={css.locationContainer}>
      <label className={css.labelLocation} htmlFor={locationId}>
        Location
      </label>
      <CiMap className={css.icon} />
      <Field
        className={css.inputLocation}
        type="text"
        placeholder="City"
        name="location"
        id={locationId}
      />
    </div>
  );
}

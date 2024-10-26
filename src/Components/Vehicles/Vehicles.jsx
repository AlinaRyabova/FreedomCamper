/* eslint-disable react/prop-types */
import { Field } from "formik";
import css from "./Vehicles.module.css";
import {
  BsDiagram3,
  BsFuelPump,
  BsGrid,
  BsGrid1X2,
  BsGrid3X3Gap,
} from "react-icons/bs";
import { CiGrid32 } from "react-icons/ci";

const addSpace = (str) => {
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i - 1] !== " ") {
      return str.slice(0, i) + " " + str.slice(i);
    }
  }
  return str;
};

export default function VehiclesOptions({ options }) {
  return (
    <>
      {options.key === "engine" && (
        <h2 className={css.radioTitle}>Vehicle fuel</h2>
      )}
      {options.key === "form" && (
        <h2 className={css.radioTitle}>Vehicle type</h2>
      )}
      {options.key === "transmission" && (
        <h2 className={css.radioTitle}>Vehicle transmission</h2>
      )}

      <ul className={css.radioContainers}>
        {options.types.map((item) => (
          <li key={item} className={css.customRadioWrapper}>
            <Field
              className={css.radioInput}
              type="radio"
              name={options.key}
              id={`radio-${item}`}
              value={item}
            />
            <label
              htmlFor={`radio-${item}`}
              className={css.customRadioContainer}
            >
              <div className={css.customRadio}>
                {options.key === "engine" && (
                  <BsFuelPump className={css.radioIcon} />
                )}
                {options.key === "transmission" && (
                  <BsDiagram3 className={css.radioIcon} />
                )}
                {item === "panelTruck" && (
                  <CiGrid32 className={css.radioIcon} />
                )}
                {item === "Van" && <BsGrid1X2 className={css.radioIcon} />}
                {item === "fullyIntegrated" && (
                  <BsGrid className={css.radioIcon} />
                )}
                {item === "alcove" && (
                  <BsGrid3X3Gap className={css.radioIcon} />
                )}
                <span className={css.radioText}>{addSpace(item)}</span>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

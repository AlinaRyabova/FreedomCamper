import { Field } from "formik";
import css from "./VehicleEquipment.module.css";
import {
  BsCupHot,
  BsDisplay,
  BsDroplet,
  BsUiRadios,
  BsWind,
} from "react-icons/bs";
import { TbFridge, TbMicrowave } from "react-icons/tb";
import { FaFireBurner } from "react-icons/fa6";
import keys from "../data/keys.json";
import { FaHandHoldingWater } from "react-icons/fa";

export default function VehicleEquipment() {
  return (
    <>
      <p className={css.filterText}>Filters</p>
      <div className={css.equipmentContainer}>
        <h2 className={css.equipmentTitle}>Vehicle equipment</h2>
        <ul className={css.checkboxContainers}>
          {keys.map((item) => (
            <li key={item.key} className={css.customCheckboxWrapper}>
              <Field
                className={css.checkboxInput}
                type="checkbox"
                name={item.key}
                id={item.key}
              />
              <label htmlFor={item.key} className={css.customCheckboxContainer}>
                <div className={css.customCheckbox}>
                  {"AC" === item.key && <BsWind className={css.checkboxIcon} />}
                  {"kitchen" === item.key && (
                    <BsCupHot className={css.checkboxIcon} />
                  )}
                  {"TV" === item.key && (
                    <BsDisplay className={css.checkboxIcon} />
                  )}
                  {"radio" === item.key && (
                    <BsUiRadios className={css.checkboxIcon} />
                  )}
                  {"refrigerator" === item.key && (
                    <TbFridge className={css.checkboxIcon} />
                  )}
                  {"microwave" === item.key && (
                    <TbMicrowave className={css.checkboxIcon} />
                  )}
                  {"bathroom" === item.key && (
                    <BsDroplet className={css.checkboxIcon} />
                  )}
                  {"gas" === item.key && (
                    <FaFireBurner className={css.checkboxIcon} />
                  )}
                  {"water" === item.key && (
                    <FaHandHoldingWater className={css.checkboxIcon} />
                  )}
                  <span className={css.checkboxText}>{item.key}</span>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

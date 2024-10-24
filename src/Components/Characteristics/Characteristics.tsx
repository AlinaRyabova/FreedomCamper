import css from "./Characteristics.module.css";

interface TruckInfo {
  consumption: string;
  tank: string;
  length: string;
  width: string;
  form: string;
  height: string;
}

interface CharacteristicsProps {
  truckInfo: TruckInfo;
}

export default function Characteristics({ truckInfo }: CharacteristicsProps) {
  const { consumption, tank, length, width, form, height } = truckInfo;

  const formatForm = (str: string) => {
    return str.replace(/([a-z])([A-Z])/g, "$1 $2");
  };

  return (
    <ul className={css.charactList}>
      <li className={css.charactItem}>
        <p>Form</p>
        <p className={css.typeText}>{formatForm(form)}</p>
      </li>
      <li className={css.charactItem}>
        <p>Length</p>
        <p>{length.slice(0, -1) + " " + length.slice(-1)}</p>
      </li>
      <li className={css.charactItem}>
        <p>Width</p>
        <p>{width.slice(0, -1) + " " + width.slice(-1)}</p>
      </li>
      <li className={css.charactItem}>
        <p>Height</p>
        <p>{height.slice(0, -1) + " " + height.slice(-1)}</p>
      </li>
      <li className={css.charactItem}>
        <p>Tank</p>
        <p>{tank.slice(0, -1) + " " + tank.slice(-1)}</p>
      </li>
      <li className={css.charactItem}>
        <p>Consumption</p>
        <p>
          {consumption.slice(0, consumption.length - 2) +
            " " +
            consumption.slice(consumption.length - 2)}
        </p>
      </li>
    </ul>
  );
}
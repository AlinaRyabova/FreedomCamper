import DatePicker from "react-datepicker";
import { useField, useFormikContext } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import css from "./Calendar.module.css";

export default function Calendar({ name }) {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const error = meta.touched && meta.error;
  const currentDate = field.value ? new Date(field.value) : null;
  return (
    <div className={css.dateContainer}>
      <DatePicker
        className={css.reactDatepicker}
        placeholderText="Booking date*"
        dayClassName={(date) =>
          currentDate && date.toDateString() === currentDate.toDateString()
            ? css["selected_day"]
            : css["non_selected_day"]
        }
        {...field}
        selected={currentDate}
        minDate={new Date()}
        onChange={(date) => {
          setFieldValue(name, date);
        }}
      />
      {error && <div className={css.error}>{meta.error}</div>}
    </div>
  );
}

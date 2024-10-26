import { Audio } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loaderContainer}>
      <Audio
        height="180"
        width="180"
        radius="9"
        color="#e44848"
        ariaLabel="loading"
      />
    </div>
  );
}

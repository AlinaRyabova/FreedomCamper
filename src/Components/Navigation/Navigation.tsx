import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const getNavLinkClass = (isActive: boolean): string => {
  return isActive ? css.active : css.link;
};

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li>
          <NavLink
            className={({ isActive }) => getNavLinkClass(isActive)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => getNavLinkClass(isActive)}
            to="/catalog"
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

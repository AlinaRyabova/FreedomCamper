import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const changeActivePage = ({ isActive }, activeClass, inactiveClass) => {
  return clsx(inactiveClass, isActive && activeClass);
};

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li>
          <NavLink
            className={(isActive) =>
              changeActivePage(isActive, css.active, css.link)
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) =>
              changeActivePage(isActive, css.active, css.link)
            }
            to="/catalog"
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

interface NavLinkProps {
  isActive: boolean;
}

const changeActivePage = (
  isActive: boolean,
  activeClass: string,
  inactiveClass: string
): string => {
  return clsx(inactiveClass, isActive && activeClass);
};

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li>
          <NavLink
            className={({ isActive }: NavLinkProps) =>
              changeActivePage(isActive, css.active, css.link)
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }: NavLinkProps) =>
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

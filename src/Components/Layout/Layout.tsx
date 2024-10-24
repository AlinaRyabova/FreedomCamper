import React, { Suspense, ReactNode } from "react";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import css from "./Layout.module.css";
import Loader from "../Loader/Loader";
import { selectLoading } from "../../redux/trucks/selectors";
import { selectTruckLoading } from "../../redux/truck/selectors";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const allTrucksLoading = useSelector(selectLoading);
  const loadingTruckById = useSelector(selectTruckLoading);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <header className={css.header}>
          <Toaster position="top-right" reverseOrder={false} />
          {(allTrucksLoading && <Loader />) || (loadingTruckById && <Loader />)}
          <div className={css.headerContainer}>
            <Logo />
            <Navigation />
          </div>
        </header>
        {children}
      </Suspense>
    </>
  );
};

export default Layout;

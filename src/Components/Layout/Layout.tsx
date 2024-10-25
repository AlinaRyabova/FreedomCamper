import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { Suspense } from "react";

export default function Layout() {
  return (
    <>
      <Suspense>
        <Logo />
        <Navigation />
      </Suspense>
    </>
  );
}

import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../src/Components/Layout/Layout";
import Loader from "./Components/Loader/Loader";
import TruckFeatures from "../src/Components/Features/Features";
import TruckReviews from "../src/Components/Reviews/Reviews";
const HomePage = lazy(() => import("../src/pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../src/pages/CatalogPage/CatalogPage"));
const DetailsTruckPage = lazy(() =>
  import("../src/pages/DetailsTruckPage/DetailsTruckPage")
);
import { Suspense } from "react";

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:truckId" element={<DetailsTruckPage />}>
            <Route index element={<TruckFeatures />} />
            <Route path="features" element={<TruckFeatures />} />
            <Route path="reviews" element={<TruckReviews />} />
          </Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

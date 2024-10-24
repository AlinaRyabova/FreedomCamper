import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import Layout from "./Components/Layout/Layout";
import TruckFeatures from "./Components/TruckFeatures/TruckFeatures";
import TruckReviews from "./Components/TruckReviews/TruckReviews";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const DetailsTruckPage = lazy(
  () => import("./pages/DetailsTruckPage/DetailsTruckPage")
);

export default function App(): JSX.Element {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:truckId" element={<DetailsTruckPage />}>
            <Route index element={<TruckFeatures />} /> 
            <Route path="reviews" element={<TruckReviews />} /> 
          </Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../src/pages/HomePage/HomePage"));

export default function App(): JSX.Element {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

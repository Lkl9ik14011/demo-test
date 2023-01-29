import React, { lazy, Suspense } from "react";
import { Routes as Routing, Route } from "react-router-dom";
import ComponentsLoading from "./components/ComponentsLoading";

const Home = lazy(() => import("./pages/home/Home"));
const Calculator = lazy(() => import("./pages/calculator/Calculator"));
const Froms = lazy(() => import("./pages/froms/Froms"));
const Error = lazy(() => import("./pages/error/ErrorPages"));

const Routes = () => {
  return (
    <Routing>
      <Route
        path="/"
        element={
          <Suspense fallback={<ComponentsLoading />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/calculator"
        element={
          <Suspense fallback={<ComponentsLoading />}>
            <Calculator />
          </Suspense>
        }
      />
      <Route
        path="/froms"
        element={
          <Suspense fallback={<ComponentsLoading />}>
            <Froms />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<ComponentsLoading />}>
            <Error />
          </Suspense>
        }
      />
    </Routing>
  );
};

export default Routes;

import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import ComponentsLoading from "../ComponentsLoading";
import Route from "./Route";

const PublicRoute = (props) => {
  const { component: Component, noSuspense, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) => {
        return (
          <div>
            <Helmet>
              {rest.helmets &&
              Array.isArray(rest.helmets) &&
              rest.helmets.length > 0 ? (
                rest.helmets
              ) : (
                <title>DEMO PROJECT</title>
              )}
            </Helmet>
            {noSuspense ? (
              <Component {...matchProps} />
            ) : (
              <Suspense fallback={<ComponentsLoading />}>
                <Component {...matchProps} />
              </Suspense>
            )}
          </div>
        );
      }}
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.any.isRequired,
  path: PropTypes.string,
};
PublicRoute.defaultProps = {
  noSuspense: false,
};

export default PublicRoute;

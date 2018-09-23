import React from "react";
import routes from "../routes";
import { Route } from "react-router";
import { BannerContext } from "../App";
import BrandedJobPage from "../pages/BrandedJobPage";

export const generateRoutes = state =>
  routes.map(({ path, exact, component: C, ...rest }) => {
    if (C === BrandedJobPage) {
      return (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={props => (
            <BannerContext.Provider value={state.banner}>
              <C {...props} {...rest} />
            </BannerContext.Provider>
          )}
        />
      );
    }
    return (
      <Route
        key={path}
        path={path}
        exact={exact}
        render={props => <C {...props} {...rest} />}
      />
    );
  });

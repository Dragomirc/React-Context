import React, { Component } from "react";
import { Switch, Route } from "react-router";
import routes from "./routes";
import NotFoundPage from "./pages/NotFoundPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {routes.map(({ path, exact, component: C, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={props => <C {...props} {...rest} />}
            />
          ))}
          <Route render={props => <NotFoundPage {...props} />} />
        </Switch>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Switch, Route } from "react-router";
import routes from "./routes";
import BrandedJobPage from "./pages/BrandedJobPage";
import NotFoundPage from "./pages/NotFoundPage";

export const BannerContext = React.createContext();
export default class App extends Component {
  constructor(props) {
    super(props);

    this.onEditButtonClick = event => {
      event.preventDefault();
      this.setState((state, props) => ({
        banner: {
          ...state.banner,
          showEditBannerModule: !state.banner.showEditBannerModule
        }
      }));
    };
    this.updateBannerColor = bannerColor => {
      this.setState((state, props) => ({
        banner: {
          ...state.banner,
          bannerColor,
          showEditBannerModule: !state.banner.showEditBannerModule
        }
      }));
    };
    this.state = {
      banner: {
        bannerColor: "",
        showEditBannerModule: false,
        onEditButtonClick: this.onEditButtonClick,
        updateBannerColor: this.updateBannerColor
      }
    };
  }

  render() {
    console.log("App rendered", this.state);
    return (
      <div>
        <Switch>
          {routes.map(({ path, exact, component: C, ...rest }) => {
            if (C === BrandedJobPage) {
              return (
                <Route
                  key={path}
                  path={path}
                  exact={exact}
                  render={props => (
                    <BannerContext.Provider value={this.state.banner}>
                      <C
                        {...props}
                        {...rest}
                        onEditButtonClick={this.onEditButtonClick}
                      />
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
          })}
          <Route render={props => <NotFoundPage {...props} />} />
        </Switch>
      </div>
    );
  }
}

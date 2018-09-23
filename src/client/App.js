import React, { Component } from "react";
import { Switch, Route } from "react-router";
import routes from "./routes";
import NotFoundPage from "./pages/NotFoundPage";
import { generateRoutes } from "./helpers";

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
    console.log("rendered App", this.state);
    return (
      <div>
        <Switch>
          {generateRoutes(this.state)}
          <Route render={props => <NotFoundPage {...props} />} />
        </Switch>
      </div>
    );
  }
}

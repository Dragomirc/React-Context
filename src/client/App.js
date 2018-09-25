import React, { Component } from "react";
import { Switch, Route } from "react-router";
import NotFoundPage from "./pages/NotFoundPage";
import { generateRoutes } from "./helpers";

export const BannerContext = React.createContext();
export default class App extends Component {
  constructor(props) {
    super(props);

    this.toggleShowEditBannerImageModule = () => {
      this.setState((state, props) => ({
        banner: {
          ...state.banner,
          showEditBannerImageModule: !state.banner.showEditBannerImageModule,
          showEditBannerColorModule: !state.banner.showEditBannerColorModule
        }
      }));
    };
    this.toggleShowEditBannerColorModule = () => {
      this.setState((state, props) => ({
        banner: {
          ...state.banner,
          showEditBannerColorModule: !state.banner.showEditBannerColorModule
        }
      }));
    };
    this.cancelBannerEditing = () => {
      this.setState({
        banner: {
          ...this.state.banner,
          tempBannerColor: "",
          showEditBannerColorModule: false,
          showEditBannerImageModule: false
        }
      });
    };
    this.updateBannerColor = tempBannerColor => {
      this.setState((state, props) => ({
        banner: {
          ...state.banner,
          tempBannerColor,
          bannerImageURL: ""
        }
      }));
    };
    this.saveBannerColor = () => {
      this.setState((state, props) => ({
        banner: {
          ...state.banner,
          savedBannerColor: state.banner.tempBannerColor,
          tmepBannerColor: "",
          showEditBannerColorModule: !state.banner.showEditBannerColorModule
        }
      }));
    };

    this.updateBannerImageUrl = bannerImageURL => {
      this.setState((state, props) => ({
        banner: {
          ...state.banner,
          bannerImageURL,
          bannerColor: ""
        }
      }));
    };
    this.state = {
      banner: {
        tempBannerColor: "",
        savedBannerColor: "",
        bannerImageURL: "",
        showEditBannerColorModule: false,
        showEditBannerImageModule: false,
        toggleShowEditBannerColorModule: this.toggleShowEditBannerColorModule,
        toggleShowEditBannerImageModule: this.toggleShowEditBannerImageModule,
        updateBannerColor: this.updateBannerColor,
        saveBannerColor: this.saveBannerColor,
        cancelBannerEditing: this.cancelBannerEditing
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

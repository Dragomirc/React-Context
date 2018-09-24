import React, { Component } from "react";
import { Switch, Route } from "react-router";
import NotFoundPage from "./pages/NotFoundPage";
import { generateRoutes } from "./helpers";

export const BannerContext = React.createContext();
export default class App extends Component {
  constructor(props) {
    super(props);
    this.fetchBannerFile = e => dispatch => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        dispatch(wantsToImport(false, "Add"));
        return dispatch(receiveFile({ file: reader.result, fileObject: file }));
      };
    };
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
    this.updateBannerColor = bannerColor => {
      this.setState((state, props) => ({
        banner: {
          ...state.banner,
          bannerColor,
          showEditBannerColorModule: !state.banner.showEditBannerColorModule
        }
      }));
    };
    this.state = {
      banner: {
        bannerColor: "",
        showEditBannerColorModule: false,
        showEditBannerImageModule: false,
        toggleShowEditBannerColorModule: this.toggleShowEditBannerColorModule,
        toggleShowEditBannerImageModule: this.toggleShowEditBannerImageModule,
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

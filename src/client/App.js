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
          tempBannerColor: "",
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
          tempBannerImageURL: "",
          showEditBannerColorModule: false,
          showEditBannerImageModule: false
        }
      });
    };
    this.updateBannerColor = tempBannerColor => {
      this.setState((state, props) => ({
        banner: {
          ...state.banner,
          tempBannerColor
        }
      }));
    };
    this.saveBannerColor = () => {
      this.setState((state, props) => ({
        banner: {
          ...state.banner,
          savedBannerColor: state.banner.tempBannerColor,
          tmepBannerColor: "",
          savedBannerImageURL: "",
          showEditBannerColorModule: !state.banner.showEditBannerColorModule
        }
      }));
    };

    this.updateBannerImageURL = tempBannerImageURL => {
      this.setState((state, props) => ({
        banner: {
          ...state.banner,
          tempBannerImageURL
        }
      }));
    };
    this.saveBannerImageURL = () => {
      this.setState((state, props) => ({
        banner: {
          ...state.banner,
          savedBannerImageURL: state.banner.tempBannerImageURL,
          tempBannerImageURL: "",
          savedBannedColor: "",
          showEditBannerImageModule: !state.banner.showEditBannerImageModule
        }
      }));
    };
    this.state = {
      banner: {
        tempBannerColor: "",
        savedBannerColor: "",
        tempBannerImageURL: "",
        savedBannerImageURL: "",
        showEditBannerColorModule: false,
        showEditBannerImageModule: false,
        toggleShowEditBannerColorModule: this.toggleShowEditBannerColorModule,
        toggleShowEditBannerImageModule: this.toggleShowEditBannerImageModule,
        updateBannerColor: this.updateBannerColor,
        saveBannerColor: this.saveBannerColor,
        updateBannerImageURL: this.updateBannerImageURL,
        saveBannerImageURL: this.saveBannerImageURL,
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

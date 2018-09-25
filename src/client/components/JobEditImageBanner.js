import React, { Component } from "react";
import { BannerContext } from "../App";
import className from "./JobEditBanner.scss";

export default class JobEditImageBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: ""
    };
  }

  onImageSelect = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({ imageData: reader.result });
    };
  };
  render() {
    console.log("rendered JobEditImageBanner");
    return (
      <BannerContext.Consumer>
        {({
          updateBannerImage,
          cancelBannerEditing,
          toggleShowEditBannerImageModule
        }) => {
          return (
            <div className={className.JobEditWrapper}>
              <div className={className.JobEditContainer}>
                <h3>Choose an image for your banner</h3>
                <div className={className.JobEditDropContainer} />

                <button
                  onClick={toggleShowEditBannerImageModule}
                  className={className.SelectAltBannerEditingOption}
                >
                  Choose a color instead
                </button>
                <lable htmlFor="input" />
                <input type="file" id="input" onChange={this.onImageSelect} />
                <div>
                  <button
                    onClick={() => updateBannerImage(this.state.imageData)}
                  >
                    Apply Image to Banner
                  </button>
                  <button onClick={cancelBannerEditing}>Cancel</button>
                </div>
              </div>
            </div>
          );
        }}
      </BannerContext.Consumer>
    );
  }
}

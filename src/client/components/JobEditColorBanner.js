import React, { Component } from "react";
import { BannerContext } from "../App";
import className from "./JobEditBanner.scss";
import cancelIcon from "../images/cancelIcon.svg";

const colors = ["pink", "yellow", "green", "blue", "brown", "red"];

export default class JobEditColorBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    };
  }
  generateColors = callback =>
    colors.map((color, index) => (
      <div
        key={index}
        style={{ background: color }}
        className={className.ColorItem}
        onClick={() => {
          this.onColorClick(color);
          callback(color);
        }}
      />
    ));
  onInputColorChange = event => {
    this.setState({ color: event.target.value });
  };
  onColorClick = color => {
    this.setState({ color });
  };
  render() {
    return (
      <BannerContext.Consumer>
        {({
          updateBannerColor,
          saveBannerColor,
          toggleShowEditBannerImageModule,
          cancelBannerEditing
        }) => {
          return (
            <div className={className.JobEditWrapper}>
              <div className={className.JobEditContainer}>
                <img
                  src={cancelIcon}
                  alt="cancelIcon"
                  className={className.CancelIcon}
                  onClick={cancelBannerEditing}
                />
                <h3>Choose a color for your banner</h3>
                <div className={className.ColorItemContainer}>
                  {this.generateColors(updateBannerColor)}
                </div>
                <h3>or enter the color HEX notation below</h3>
                <label htmlFor="colorInput" />
                <div>
                  <input
                    type="text"
                    value={this.state.color}
                    id="colorInput"
                    onChange={this.onInputColorChange}
                  />
                  <div
                    className={className.ColorRepresentation}
                    style={{ background: this.state.color }}
                  />
                  <button
                    className={className.SelectAltBannerEditingOption}
                    onClick={toggleShowEditBannerImageModule}
                  >
                    Use an image instead
                  </button>
                </div>

                <button onClick={() => saveBannerColor(this.state.color)}>
                  Apply Color to Banner
                </button>
                <button onClick={cancelBannerEditing}>Cancel</button>
              </div>
            </div>
          );
        }}
      </BannerContext.Consumer>
    );
  }
}

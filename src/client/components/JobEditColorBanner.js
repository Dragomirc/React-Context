import React, { Component } from "react";
import { BannerContext } from "../App";
import className from "./JobEditColorBanner.scss";

const colors = ["pink", "yellow", "green", "blue", "brown", "red"];

export default class JobEditColorBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    };
  }
  generateColors = colors.map((color, index) => (
    <div
      key={index}
      style={{ background: color }}
      className={className.ColorItem}
      onClick={() => this.onColorClick(color)}
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
          toggleShowEditBannerColorModule,
          toggleShowEditBannerImageModule
        }) => {
          return (
            <div className={className.JobEditWrapper}>
              <div className={className.JobEditContainer}>
                <h3>Choose a color for your banner</h3>
                <div className={className.ColorItemContainer}>
                  {this.generateColors}
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
                  <button onClick={toggleShowEditBannerImageModule}>
                    Use an image instead
                  </button>
                </div>

                <button onClick={() => updateBannerColor(this.state.color)}>
                  Apply Color to Banner
                </button>
                <button onClick={toggleShowEditBannerColorModule}>
                  Cancel
                </button>
              </div>
            </div>
          );
        }}
      </BannerContext.Consumer>
    );
  }
}

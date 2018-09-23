import React from "react";
import JobEditBanner from "./JobEditBanner";
import { BannerContext } from "../App";
import className from "./JobBanner.scss";
export default props => {
  console.log("JobBanner rendered");
  return (
    <BannerContext.Consumer>
      {({ showEditBannerModule, onEditButtonClick, bannerColor }) => {
        return (
          <div
            className={className.Banner}
            style={{ backgroundColor: bannerColor }}
          >
            <button
              onClick={props.onEditButtonClick}
              className={className.EditButton}
            >
              Edit
            </button>
            {showEditBannerModule && <JobEditBanner />}
          </div>
        );
      }}
    </BannerContext.Consumer>
  );
};

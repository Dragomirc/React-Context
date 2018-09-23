import React from "react";
import JobEditBanner from "./JobEditBanner";
import { BannerContext } from "../App";
import className from "./JobBanner.scss";
export default props => {
  console.log("rendered JobBanner ");
  return (
    <BannerContext.Consumer>
      {({ showEditBannerModule, onEditButtonClick, bannerColor }) => {
        return (
          <div
            className={className.Banner}
            style={{ backgroundColor: bannerColor }}
          >
            <button
              onClick={onEditButtonClick}
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

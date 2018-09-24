import React from "react";
import JobEditBanner from "./JobEditBanner";
import { BannerContext } from "../App";
import className from "./JobBanner.scss";

export default props => {
  console.log("rendered JobBanner ");
  return (
    <BannerContext.Consumer>
      {({
        showEditBannerModule,
        toggleShowEditBannerColorModule,
        bannerColor
      }) => {
        return (
          <div>
            <div
              className={className.Banner}
              style={{ backgroundColor: bannerColor }}
            >
              <button
                onClick={toggleShowEditBannerColorModule}
                className={className.EditButton}
              >
                Edit
              </button>
            </div>
            {showEditBannerModule && <JobEditBanner />}
          </div>
        );
      }}
    </BannerContext.Consumer>
  );
};

import React from "react";
import JobEditColorBanner from "./JobEditColorBanner";
import JobEditImageBanner from "./JobEditImageBanner";
import { BannerContext } from "../App";
import className from "./JobBanner.scss";

export default props => {
  console.log("rendered JobBanner ");
  return (
    <BannerContext.Consumer>
      {({
        showEditBannerColorModule,
        showEditBannerImageModule,
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
            {showEditBannerColorModule && <JobEditColorBanner />}
            {showEditBannerImageModule && <JobEditImageBanner />}
          </div>
        );
      }}
    </BannerContext.Consumer>
  );
};

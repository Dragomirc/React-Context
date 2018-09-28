import React from "react";
import JobEditColorBanner from "./JobEditColorBanner";
import JobEditImageBanner from "./JobEditImageBanner";
import { BannerContext } from "../App";
import className from "./JobBanner.scss";
import addIcon from "../images/cancelIcon.svg";

export default props => {
  console.log("rendered JobBanner ");
  return (
    <BannerContext.Consumer>
      {({
        showEditBannerColorModule,
        showEditBannerImageModule,
        toggleShowEditBannerColorModule,
        savedBannerColor,
        tempBannerColor,
        tempBannerImageURL,
        savedBannerImageURL
      }) => {
        return (
          <div>
            <div
              className={className.Banner}
              style={{
                backgroundColor: tempBannerColor
                  ? tempBannerColor
                  : savedBannerColor,
                backgroundImage: tempBannerColor
                  ? `none`
                  : tempBannerImageURL
                    ? `url(${tempBannerImageURL})`
                    : `url(${savedBannerImageURL})`
              }}
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

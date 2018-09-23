import React from "react";
import JobBanner from "../components/JobBanner";
import className from "./BrandedJobPage.scss";

const BrandedJobPage = props => {
  console.log("BrandedJobPageRendered");
  return (
    <div className={className.BrandedJobsContainer}>
      <JobBanner onEditButtonClick={props.onEditButtonClick} />
    </div>
  );
};

export default BrandedJobPage;

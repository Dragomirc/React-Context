import React from "react";
import JobBanner from "../components/JobBanner";
import className from "./BrandedJobPage.scss";

const BrandedJobPage = props => {
  console.log("styles", className.BrandedJobsContainer);
  return (
    <div className={className.BrandedJobsContainer}>
      <JobBanner />
    </div>
  );
};

export default BrandedJobPage;

import React, { PureComponent, Component } from "react";
import JobBanner from "../components/JobBanner";
import HomePage from "./HomePage";
import className from "./BrandedJobPage.scss";

class BrandedJobPage extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(JSON.stringify(this.props) === JSON.stringify(nextProps));
  //   return false;
  // }
  render() {
    console.log("rendered BrandedJobPage");
    return (
      <div className={className.BrandedJobsContainer}>
        <JobBanner />
      </div>
    );
  }
}

export default BrandedJobPage;

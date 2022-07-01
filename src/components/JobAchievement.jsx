import { Component } from "react";
import ListItems from "../components/ListItems";

class JobAchievement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lastJob } = this.props;

    return (
      <div className="company">
        <div className="company-name">
          {lastJob.jobPosition} at {lastJob.company}, {lastJob.state}
        </div>
        <div className="company-working-years">
          {lastJob.workStart} - {lastJob.workEnd}
        </div>
        <ListItems
          className="last-job-achievements"
          listItems={lastJob.achievements}
        />
      </div>
    );
  }
}

export default JobAchievement;
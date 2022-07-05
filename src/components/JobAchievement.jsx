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
        <div
          role="textbox"
          contentEditable
          suppressContentEditableWarning
          className="company-name"
          title="Company Name"
        >
          {lastJob.jobPosition} at {lastJob.company}, {lastJob.state}
        </div>
        <div
          role="textbox"
          contentEditable
          suppressContentEditableWarning
          className="company-working-years"
          title="Company Working Years"
        >
          {lastJob.workStart} - {lastJob.workEnd}
        </div>
        <ListItems
          className="last-job-achievements"
          listItems={lastJob.achievements}
          title="Last Job Achievement"
        />
      </div>
    );
  }
}

export default JobAchievement;

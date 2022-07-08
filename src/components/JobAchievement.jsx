import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class JobAchievement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lastJob } = this.props;

    return (
      <div className="company">
        <div className="company-name" title="Company Name">
          {lastJob.jobPosition +
            " at " +
            lastJob.companyName +
            ", " +
            lastJob.jobLocation}
        </div>
        <div className="company-working-years" title="Company Working Years">
          {lastJob.workStart + " - " + lastJob.workEnd}
        </div>
        <ul className="last-job-achievements">
          {lastJob.achievements.map((achievement) => (
            <li key={uuidv4()} title="Last Job Achievement">
              {achievement.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default JobAchievement;

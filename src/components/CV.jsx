import "../styles/CV.css";
import { v4 as uuidv4 } from "uuid";
import JobAchievement from "../components/JobAchievement";
import imgUrl from "../assets/images/person-img.jpg";

const CV = (props) => {
  const { contactInfo, aboutMe, achievements, skills, employmentHistory } =
    props.cv;

  return (
    <div className="cv">
      <div className="contact-info">
        <img className="user-img" src={imgUrl} alt="User image" />
        <div className="full-name">
          {contactInfo.firstName + " " + contactInfo.lastName}
        </div>
        <div className="job-title">{contactInfo.jobTitle}</div>
        <div className="email">{contactInfo.email}</div>
        <div className="mobile-number">{contactInfo.mobileNumber}</div>
        <hr />
        <div className="address">{contactInfo.address}</div>
      </div>
      <div className="about-me">{aboutMe}</div>
      <div className="achievements">{achievements}</div>
      <div className="skills-container">
        <div className="title">Skills</div>
        <ul className="skills">
          {skills.map((skill) => (
            <li key={uuidv4()}>{skill.text}</li>
          ))}
        </ul>
      </div>
      <div className="employment-history">
        <div className="title">Employment History</div>
        {employmentHistory.map((history) => (
          <JobAchievement key={uuidv4()} lastJob={history} />
        ))}
      </div>
    </div>
  );
};

export default CV;

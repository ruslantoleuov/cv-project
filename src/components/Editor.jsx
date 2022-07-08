import { Component } from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import ButtonAdd from "./ButtonAdd";
import ButtonRemove from "./ButtonRemove";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.imageChange = this.imageChange.bind(this);
  }

  imageChange(evt) {
    this.files = evt.target.files;
    if (!this.files || this.files.length === 0) return;
    this.file = this.files[0];
    this.reader = new FileReader();
    this.reader.readAsDataURL(this.file);
    this.reader.addEventListener(
      "load",
      () => {
        const userImg = document.querySelector(".user-img");
        userImg.src = this.reader.result;
      },
      { once: true }
    );
  }

  render() {
    const { cv } = this.props;

    return (
      <form className="input-fields">
        <InputField id="changePhoto" type="file" onChange={this.imageChange}>
          Change photo
        </InputField>
        <InputField
          id="firstName"
          type="text"
          value={cv.contactInfo.firstName}
          onChange={this.props.onChangeHandler}
        >
          First name
        </InputField>
        <InputField
          id="lastName"
          type="text"
          value={cv.contactInfo.lastName}
          onChange={this.props.onChangeHandler}
        >
          Last name
        </InputField>
        <InputField
          id="jobTitle"
          type="text"
          value={cv.contactInfo.jobTitle}
          onChange={this.props.onChangeHandler}
        >
          Job title
        </InputField>
        <InputField
          id="email"
          type="text"
          value={cv.contactInfo.email}
          onChange={this.props.onChangeHandler}
        >
          Email
        </InputField>
        <InputField
          id="mobileNumber"
          type="text"
          value={cv.contactInfo.mobileNumber}
          onChange={this.props.onChangeHandler}
        >
          Mobile number
        </InputField>
        <InputField
          id="address"
          type="text"
          value={cv.contactInfo.address}
          onChange={this.props.onChangeHandler}
        >
          Address
        </InputField>
        <TextArea
          id="aboutMe"
          value={cv.aboutMe}
          onChange={this.props.onChangeHandler}
        >
          About me
        </TextArea>
        <TextArea
          id="achievements"
          value={cv.achievements}
          onChange={this.props.onChangeHandler}
        >
          Achievements
        </TextArea>
        <div>Skills</div>
        <div className="skillsInputs">
          {cv.skills.map((skill, i) => (
            <div key={skill.id}>
              <input
                onChange={this.props.onChangeHandler}
                type="text"
                value={skill.text}
                title={"Skill " + [i + 1]}
                data-index={i}
              />
              {i > 0 && (
                <ButtonRemove
                  onClick={this.props.removeSkill.bind(this, skill)}
                  className="delete-skill-btn"
                />
              )}
            </div>
          ))}

          <ButtonAdd onClick={this.props.addSkill} />
        </div>

        <div>Employment History</div>
        {cv.employmentHistory.map((history, historyIndex) => {
          return (
            <div className="employmentHistoryInputs" key={history.id}>
              <InputField
                id="companyName"
                type="text"
                value={history.company}
                onChange={this.props.onChangeHandler}
              >
                Company name
              </InputField>
              <InputField
                id="jobPosition"
                type="text"
                value={history.jobPosition}
                onChange={this.props.onChangeHandler}
              >
                Job position
              </InputField>
              <InputField
                id="jobLocation"
                type="text"
                value={history.jobLocation}
                onChange={this.props.onChangeHandler}
              >
                City
              </InputField>
              <InputField
                id="workStart"
                type="text"
                value={history.workStart}
                onChange={this.props.onChangeHandler}
              >
                From
              </InputField>
              <InputField
                id="workEnd"
                type="text"
                value={history.workEnd}
                onChange={this.props.onChangeHandler}
              >
                To
              </InputField>
              <div>Achievements</div>
              <div className="last-job-achievements">
                {history.achievements.map((achievement, achievementIndex) => (
                  <div key={achievement.id}>
                    <textarea
                      onChange={this.props.onChangeHandler}
                      type="text"
                      value={achievement.text}
                      title={"Achievement " + [achievementIndex + 1]}
                    />
                    {achievementIndex > 0 && (
                      <ButtonRemove
                        onClick={this.props.removeAchievement.bind(
                          this,
                          achievement,
                          historyIndex
                        )}
                        className="delete-achievement-btn"
                      />
                    )}
                  </div>
                ))}
              </div>

              {historyIndex > 0 && (
                <ButtonRemove
                  onClick={this.props.removePastJob.bind(this, history)}
                  className="delete-btn"
                />
              )}

              <ButtonAdd
                onClick={this.props.addAchievement.bind(this, historyIndex)}
              />
            </div>
          );
        })}
        <ButtonAdd onClick={this.props.addPastJob} />
      </form>
    );
  }
}

export default Editor;

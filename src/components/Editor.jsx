import "../styles/Editor.css";
import InputField from "./InputField";
import TextArea from "./TextArea";
import ButtonAdd from "./ButtonAdd";
import ButtonRemove from "./ButtonRemove";

const Editor = (props) => {
  const { cv } = props;

  const imageChange = (evt) => {
    const files = evt.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener(
      "load",
      () => {
        const userImg = document.querySelector(".user-img");
        userImg.src = reader.result;
      },
      { once: true }
    );
  };

  return (
    <form className="input-fields">
      <InputField id="changePhoto" type="file" onChange={imageChange}>
        Change photo
      </InputField>
      <InputField
        id="firstName"
        type="text"
        value={cv.contactInfo.firstName}
        onChange={props.onChangeHandler}
      >
        First name
      </InputField>
      <InputField
        id="lastName"
        type="text"
        value={cv.contactInfo.lastName}
        onChange={props.onChangeHandler}
      >
        Last name
      </InputField>
      <InputField
        id="jobTitle"
        type="text"
        value={cv.contactInfo.jobTitle}
        onChange={props.onChangeHandler}
      >
        Job title
      </InputField>
      <InputField
        id="email"
        type="text"
        value={cv.contactInfo.email}
        onChange={props.onChangeHandler}
      >
        Email
      </InputField>
      <InputField
        id="mobileNumber"
        type="text"
        value={cv.contactInfo.mobileNumber}
        onChange={props.onChangeHandler}
      >
        Mobile number
      </InputField>
      <InputField
        id="address"
        type="text"
        value={cv.contactInfo.address}
        onChange={props.onChangeHandler}
      >
        Address
      </InputField>
      <TextArea
        id="aboutMe"
        value={cv.aboutMe}
        onChange={props.onChangeHandler}
      >
        About me
      </TextArea>
      <TextArea
        id="achievements"
        value={cv.achievements}
        onChange={props.onChangeHandler}
      >
        Achievements
      </TextArea>
      <div>Skills</div>
      <div className="skillsInputs">
        {cv.skills.map((skill, skillIndex) => (
          <div key={skill.id}>
            <input
              onChange={props.onChangeHandler}
              type="text"
              value={skill.text}
              title={"Skill " + [skillIndex + 1]}
              data-skill-index={skillIndex}
            />
            {skillIndex > 0 && (
              <ButtonRemove
                onClick={props.removeSkill.bind(null, skill)}
                className="delete-skill-btn"
              />
            )}
          </div>
        ))}

        <ButtonAdd onClick={props.addSkill} />
      </div>

      <div>Employment History</div>
      {cv.employmentHistory.map((history, historyIndex) => {
        return (
          <div
            className="employmentHistoryInputs"
            key={history.id}
            data-history-index={historyIndex}
          >
            <InputField
              id="companyName"
              type="text"
              value={history.companyName}
              onChange={props.onChangeHandler}
            >
              Company name
            </InputField>
            <InputField
              id="jobPosition"
              type="text"
              value={history.jobPosition}
              onChange={props.onChangeHandler}
            >
              Job position
            </InputField>
            <InputField
              id="jobLocation"
              type="text"
              value={history.jobLocation}
              onChange={props.onChangeHandler}
            >
              City
            </InputField>
            <InputField
              id="workStart"
              type="text"
              value={history.workStart}
              onChange={props.onChangeHandler}
            >
              From
            </InputField>
            <InputField
              id="workEnd"
              type="text"
              value={history.workEnd}
              onChange={props.onChangeHandler}
            >
              To
            </InputField>
            <div>Achievements</div>
            <div className="last-job-achievements">
              {history.achievements.map((achievement, achievementIndex) => (
                <div key={achievement.id}>
                  <textarea
                    onChange={props.onChangeHandler}
                    type="text"
                    value={achievement.text}
                    title={"Achievement " + [achievementIndex + 1]}
                    data-achievement-index={achievementIndex}
                  />
                  {achievementIndex > 0 && (
                    <ButtonRemove
                      onClick={props.removeAchievement.bind(
                        null,
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
                onClick={props.removePastJob.bind(null, history)}
                className="delete-btn"
              />
            )}

            <ButtonAdd
              onClick={props.addAchievement.bind(null, historyIndex)}
            />
          </div>
        );
      })}
      <ButtonAdd onClick={props.addPastJob} />
    </form>
  );
};

export default Editor;

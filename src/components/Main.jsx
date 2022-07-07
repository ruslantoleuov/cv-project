import React, { Component } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { v4 as uuidv4 } from "uuid";
import InputField from "./InputField";
import TextArea from "./TextArea";
import CV from "./CV";
import "../styles/Main.css";
import ButtonAdd from "./ButtonAdd";
import ButtonRemove from "./ButtonRemove";
import imgUrl from "../assets/images/person-img.jpg";
import ColorButtons from "./ColorButtons";

class Main extends Component {
  constructor(props) {
    super(props);
    this.generatePDF = this.generatePDF.bind(this);
    this.imageChange = this.imageChange.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
    this.addPastJob = this.addPastJob.bind(this);
    this.removePastJob = this.removePastJob.bind(this);
    this.addAchievement = this.addAchievement.bind(this);
    this.removeAchievement = this.removeAchievement.bind(this);

    this.state = {
      imgUrl: imgUrl,
      cv: {
        contactInfo: {
          firstName: "Monica",
          lastName: "Helmsley",
          jobTitle: "Marketing Manager",
          email: "monica_helmsley@gmail.com",
          mobileNumber: "(512) 465-6312",
          address: "77 Serial Drive, Austin TX 78705, United States",
        },
        aboutMe:
          "Experienced and energetic Marketing Manager with over seven years of experience effectively managing marketing projects from conception to completion.",
        achievements:
          "Adept in using digital marketing platforms to increase sales and overall company productivity. Experienced in preparing and overseeing online and print marketing campaigns, resulting in an increase in partner relations for the company. Adept in monitoring and reporting marketing objectives, to maintain necessary internal communications within the company. Pragmatic and result oriented. I am determined to build market presence in the next company I join.",
        skills: [
          { id: uuidv4(), text: "Excellent Communication Skills" },
          { id: uuidv4(), text: "Project Management Skills" },
          { id: uuidv4(), text: "Creativity and Problem Solving" },
          { id: uuidv4(), text: "Digital Marketing" },
          { id: uuidv4(), text: "Industry Trends & Sales Forecasting" },
        ],
        employmentHistory: [
          {
            id: uuidv4(),
            company: "Zane Telecommunications",
            jobPosition: "Marketing Manager",
            jobLocation: "Austin TX",
            workStart: "November 2011",
            workEnd: "August 2019",
            achievements: [
              {
                id: uuidv4(),
                text: "Effectively managed creative projects, promoting a superior corporate image.",
              },
              {
                id: uuidv4(),
                text: "Designed and implemented direct mail campaigns, resulting is a 10% sales increase per quarter.",
              },
              {
                id: uuidv4(),
                text: "Developed and maintained internal and external relationships, which were crucial to company enhancement and success.",
              },
              {
                id: uuidv4(),
                text: "Assessed the strategies of competitors, while avidly working to increase our own productivity.",
              },
              {
                id: uuidv4(),
                text: "Researched the motivations of users and consumers to better understand company goals.",
              },
              {
                id: uuidv4(),
                text: "Put fourth carefully planned strategies to improve company business.",
              },
              {
                id: uuidv4(),
                text: "Fostering relationships to maintain existing clients, while developing new relationships to attract potential clients.",
              },
            ],
          },
        ],
      },
    };
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

  generatePDF() {
    const cv = document.querySelector(".cv");
    html2canvas(cv, { scale: 2 }).then((canvas) => {
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("portrait", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save("cv.pdf");
    });
  }

  addSkill() {
    this.setState({
      cv: {
        ...this.state.cv,
        skills: this.state.cv.skills.concat({
          id: uuidv4(),
          text: "",
        }),
      },
    });
  }

  removeSkill(element) {
    this.setState({
      cv: {
        ...this.state.cv,
        skills: this.state.cv.skills.filter((skill) => skill.id !== element.id),
      },
    });
  }

  addPastJob() {
    this.setState({
      cv: {
        ...this.state.cv,
        employmentHistory: this.state.cv.employmentHistory.concat({
          id: uuidv4(),
          company: "",
          jobPosition: "",
          jobLocation: "",
          workStart: "",
          workEnd: "",
          achievements: [
            {
              id: uuidv4(),
              text: "",
            },
          ],
        }),
      },
    });
  }

  removePastJob(element) {
    this.setState({
      cv: {
        ...this.state.cv,
        employmentHistory: this.state.cv.employmentHistory.filter(
          (history) => history.id !== element.id
        ),
      },
    });
  }

  addAchievement(i) {
    const newEmploymentHistory = [...this.state.cv.employmentHistory];
    const newAchievements = newEmploymentHistory[i].achievements.concat({
      id: uuidv4(),
      text: "",
    });
    newEmploymentHistory[i].achievements = newAchievements;
    this.setState({
      cv: {
        ...this.state.cv,
        employmentHistory: [...newEmploymentHistory],
      },
    });
  }

  removeAchievement(element, i) {
    const newEmploymentHistory = [...this.state.cv.employmentHistory];

    const newAchievements = newEmploymentHistory[i].achievements.filter(
      (achievement) => achievement.id !== element.id
    );

    newEmploymentHistory[i].achievements = newAchievements;

    this.setState({
      cv: {
        ...this.state.cv,
        employmentHistory: [...newEmploymentHistory],
      },
    });
  }

  onChangeHandler(evt) {
    evt.preventDefault();

    console.log(evt.target);
    console.log(this.state.cv);

    switch (evt.target.id) {
      case "firstName":
      case "lastName":
      case "jobTitle":
      case "email":
      case "mobileNumber":
      case "address":
        this.setState({
          cv: {
            ...this.state.cv,
            contactInfo: {
              ...this.state.cv.contactInfo,
              [evt.target.id]: evt.target.value,
            },
          },
        });
        break;
      case "aboutMe":
      case "achievements":
        this.setState({
          cv: {
            ...this.state.cv,
            [evt.target.id]: evt.target.value,
          },
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { cv } = this.state;

    return (
      <main className="main">
        <button
          className="save-pdf-button"
          onClick={this.generatePDF}
          type="button"
        >
          Save as PDF
        </button>
        <ColorButtons />
        <form className="input-fields">
          <InputField id="changePhoto" type="file" onChange={this.imageChange}>
            Change photo
          </InputField>
          <InputField
            id="firstName"
            type="text"
            value={cv.contactInfo.firstName}
            onChange={this.onChangeHandler}
          >
            First name
          </InputField>
          <InputField
            id="lastName"
            type="text"
            value={cv.contactInfo.lastName}
            onChange={this.onChangeHandler}
          >
            Last name
          </InputField>
          <InputField
            id="jobTitle"
            type="text"
            value={cv.contactInfo.jobTitle}
            onChange={this.onChangeHandler}
          >
            Job title
          </InputField>
          <InputField
            id="email"
            type="text"
            value={cv.contactInfo.email}
            onChange={this.onChangeHandler}
          >
            Email
          </InputField>
          <InputField
            id="mobileNumber"
            type="text"
            value={cv.contactInfo.mobileNumber}
            onChange={this.onChangeHandler}
          >
            Mobile number
          </InputField>
          <InputField
            id="address"
            type="text"
            value={cv.contactInfo.address}
            onChange={this.onChangeHandler}
          >
            Address
          </InputField>
          <TextArea
            id="aboutMe"
            value={cv.aboutMe}
            onChange={this.onChangeHandler}
          >
            About me
          </TextArea>
          <TextArea
            id="achievements"
            value={cv.achievements}
            onChange={this.onChangeHandler}
          >
            Achievements
          </TextArea>
          <div>Skills</div>
          <div className="skillsInputs">
            {cv.skills.map((skill, i) => (
              <div key={skill.id}>
                <input
                  onChange={this.onChangeHandler}
                  type="text"
                  value={skill.text}
                  title={"Skill " + [i + 1]}
                  id={skill.id}
                />
                {i > 0 && (
                  <ButtonRemove
                    onClick={this.removeSkill.bind(this, skill)}
                    className="delete-skill-btn"
                  />
                )}
              </div>
            ))}

            <ButtonAdd onClick={this.addSkill} />
          </div>

          <div>Employment History</div>
          {cv.employmentHistory.map((history, historyIndex) => {
            return (
              <div className="employmentHistoryInputs" key={history.id}>
                <InputField
                  id="companyName"
                  type="text"
                  value={history.company}
                  onChange={this.onChangeHandler}
                >
                  Company name
                </InputField>
                <InputField
                  id="jobPosition"
                  type="text"
                  value={history.jobPosition}
                  onChange={this.onChangeHandler}
                >
                  Job position
                </InputField>
                <InputField
                  id="jobLocation"
                  type="text"
                  value={history.jobLocation}
                  onChange={this.onChangeHandler}
                >
                  City
                </InputField>
                <InputField
                  id="workStart"
                  type="text"
                  value={history.workStart}
                  onChange={this.onChangeHandler}
                >
                  From
                </InputField>
                <InputField
                  id="workEnd"
                  type="text"
                  value={history.workEnd}
                  onChange={this.onChangeHandler}
                >
                  To
                </InputField>
                <div>Achievements</div>
                <div className="last-job-achievements">
                  {history.achievements.map((achievement, achievementIndex) => (
                    <div key={achievement.id}>
                      <textarea
                        onChange={this.onChangeHandler}
                        type="text"
                        value={achievement.text}
                        title={"Achievement " + [achievementIndex + 1]}
                      />
                      {achievementIndex > 0 && (
                        <ButtonRemove
                          onClick={this.removeAchievement.bind(
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
                    onClick={this.removePastJob.bind(this, history)}
                    className="delete-btn"
                  />
                )}

                <ButtonAdd
                  onClick={this.addAchievement.bind(this, historyIndex)}
                />
              </div>
            );
          })}
          <ButtonAdd onClick={this.addPastJob} />
        </form>
        <CV cv={cv} imgUrl={imgUrl} />
      </main>
    );
  }
}

export default Main;

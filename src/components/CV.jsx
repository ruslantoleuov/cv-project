import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ListItems from "./ListItems";
import JobAchievement from "../components/JobAchievement";
import imgUrl from "../assets/images/person-img.jpg";
import "../styles/CV.css";

class CV extends Component {
  constructor(props) {
    super(props);
    this.imageChange = this.imageChange.bind(this);
    this.imageChoose = this.imageChoose.bind(this);
    this.imgRef = React.createRef();
    this.inputRef = React.createRef();
    this.state = {
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
        "Excellent Communication Skills",
        "Project Management Skills",
        "Creativity and Problem Solving",
        "Digital Marketing",
        "Industry Trends & Sales Forecasting",
      ],
      employmentHistory: [
        {
          company: "Zane Telecommunications",
          jobPosition: "Marketing Manager",
          state: "Austin TX",
          workStart: "November 2011",
          workEnd: "August 2019",
          achievements: [
            "Effectively managed creative projects, promoting a superior corporate image.",
            "Designed and implemented direct mail campaigns, resulting is a 10% sales increase per quarter.",
            "Developed and maintained internal and external relationships, which were crucial to company enhancement and success.",
            "Assessed the strategies of competitors, while avidly working to increase our own productivity.",
            "Researched the motivations of users and consumers to better understand company goals.",
            "Put fourth carefully planned strategies to improve company business.",
            "Fostering relationships to maintain existing clients, while developing new relationships to attract potential clients.",
          ],
        },
      ],
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
        this.imgRef.current.src = this.reader.result;
      },
      { once: true }
    );
  }

  imageChoose() {
    this.inputRef.current.click();
  }

  render() {
    const { contactInfo, aboutMe, achievements, skills, employmentHistory } =
      this.state;

    return (
      <div className="cv">
        <div className="contact-info">
          <img
            onClick={this.imageChoose}
            ref={this.imgRef}
            title="Choose image"
            className="user-img"
            src={imgUrl}
            alt="User image"
          />
          <input
            title="Choose image"
            className="choose-img"
            ref={this.inputRef}
            onChange={this.imageChange}
            type="file"
          />
          <div
            role="textbox"
            contentEditable
            suppressContentEditableWarning
            className="full-name"
          >
            {contactInfo.firstName} {contactInfo.lastName}
          </div>
          <div
            role="textbox"
            contentEditable
            suppressContentEditableWarning
            className="job-title"
          >
            {contactInfo.jobTitle}
          </div>
          <div
            role="textbox"
            contentEditable
            suppressContentEditableWarning
            className="email"
          >
            {contactInfo.email}
          </div>
          <div
            role="textbox"
            contentEditable
            suppressContentEditableWarning
            className="mobile-number"
          >
            {contactInfo.mobileNumber}
          </div>
          <hr />
          <div
            role="textbox"
            contentEditable
            suppressContentEditableWarning
            className="address"
          >
            {contactInfo.address}
          </div>
        </div>
        <div
          role="textbox"
          contentEditable
          suppressContentEditableWarning
          className="about-me"
        >
          {aboutMe}
        </div>
        <div
          role="textbox"
          contentEditable
          suppressContentEditableWarning
          className="achievements"
        >
          {achievements}
        </div>
        <div className="skills-container">
          <div className="title">Skills</div>
          <ListItems className="skills" listItems={skills} />
        </div>
        <div className="employment-history">
          <div className="title">Employment History</div>
          {employmentHistory.map((lastJob) => (
            <JobAchievement key={uuidv4()} lastJob={lastJob} />
          ))}
        </div>
      </div>
    );
  }
}

export default CV;

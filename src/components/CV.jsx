import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ListItems from "./ListItems";
import imgUrl from "../assets/images/person-img.jpg";
import "../styles/CV.css";

class CV extends Component {
  constructor(props) {
    super(props);
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
  render() {
    const { contactInfo, aboutMe, achievements, skills, employmentHistory } =
      this.state;

    return (
      <div className="cv">
        <div className="contact-info">
          <img className="user-img" src={imgUrl} alt="User image" />
          <div className="full-name">
            {contactInfo.firstName} {contactInfo.lastName}
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
          <ListItems className="skills" listItems={skills} />
        </div>
        <div className="employment-history">
          <div className="title">Employment History</div>
          {employmentHistory.map((el) => (
            <div className="company" key={uuidv4()}>
              <div className="company-name">
                {el.jobPosition} at {el.company}, {el.state}
              </div>
              <div className="company-working-years">
                {el.workStart} - {el.workEnd}
              </div>
              <ListItems
                className="last-job-achievements"
                listItems={el.achievements}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CV;

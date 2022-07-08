import "../styles/Main.css";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import CV from "./CV";
import ColorButtons from "./ColorButtons";
import ButtonSavePDF from "./ButtonSavePDF";
import Editor from "./Editor";

class Main extends Component {
  constructor(props) {
    super(props);
    this.addSkill = this.addSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
    this.addPastJob = this.addPastJob.bind(this);
    this.removePastJob = this.removePastJob.bind(this);
    this.addAchievement = this.addAchievement.bind(this);
    this.removeAchievement = this.removeAchievement.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);

    this.state = {
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

    if (evt.target.dataset.index) {
      const newSkills = [...this.state.cv.skills];
      newSkills[evt.target.dataset.index].text = evt.target.value;

      this.setState({
        cv: {
          ...this.state.cv,
          skills: [...newSkills],
        },
      });
    }
  }

  render() {
    const { cv } = this.state;

    return (
      <main className="main">
        <ButtonSavePDF />
        <ColorButtons />
        <Editor
          cv={cv}
          addSkill={this.addSkill}
          removeSkill={this.removeSkill}
          addPastJob={this.addPastJob}
          removePastJob={this.removePastJob}
          addAchievement={this.addAchievement}
          removeAchievement={this.removeAchievement}
          onChangeHandler={this.onChangeHandler}
        />
        <CV cv={cv} />
      </main>
    );
  }
}

export default Main;

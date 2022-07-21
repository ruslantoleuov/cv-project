import "../styles/Main.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CV from "./CV";
import ColorButtons from "./ColorButtons";
import ButtonSavePDF from "./ButtonSavePDF";
import Editor from "./Editor";

const Main = () => {
  const [cv, setCV] = useState({
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
        companyName: "Zane Telecommunications",
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
  });

  const addSkill = () => {
    setCV({
      ...cv,
      skills: cv.skills.concat({
        id: uuidv4(),
        text: "",
      }),
    });
  };

  const removeSkill = (element) => {
    setCV({
      ...cv,
      skills: cv.skills.filter((skill) => skill.id !== element.id),
    });
  };

  const addPastJob = () => {
    setCV({
      ...cv,
      employmentHistory: cv.employmentHistory.concat({
        id: uuidv4(),
        companyName: "",
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
    });
  };

  const removePastJob = (element) => {
    setCV({
      ...cv,
      employmentHistory: cv.employmentHistory.filter(
        (history) => history.id !== element.id
      ),
    });
  };

  const addAchievement = (i) => {
    const newEmploymentHistory = [...cv.employmentHistory];
    const newAchievements = newEmploymentHistory[i].achievements.concat({
      id: uuidv4(),
      text: "",
    });
    newEmploymentHistory[i].achievements = newAchievements;
    setCV({
      ...cv,
      employmentHistory: [...newEmploymentHistory],
    });
  };

  const removeAchievement = (element, i) => {
    const newEmploymentHistory = [...cv.employmentHistory];

    const newAchievements = newEmploymentHistory[i].achievements.filter(
      (achievement) => achievement.id !== element.id
    );

    newEmploymentHistory[i].achievements = newAchievements;

    setCV({
      ...cv,
      employmentHistory: [...newEmploymentHistory],
    });
  };

  const onChangeHandler = (evt) => {
    evt.preventDefault();

    switch (evt.target.id) {
      case "firstName":
      case "lastName":
      case "jobTitle":
      case "email":
      case "mobileNumber":
      case "address":
        setCV({
          ...cv,
          contactInfo: {
            ...cv.contactInfo,
            [evt.target.id]: evt.target.value,
          },
        });
        break;
      case "aboutMe":
      case "achievements":
        setCV({
          ...cv,
          [evt.target.id]: evt.target.value,
        });
        break;
      default:
        break;
    }

    if (evt.target.closest(".skillsInputs")) {
      const newSkills = [...cv.skills];
      newSkills[evt.target.dataset.skillIndex].text = evt.target.value;

      setCV({
        ...cv,
        skills: [...newSkills],
      });
    }

    if (evt.target.closest(".employmentHistoryInputs")) {
      const newEmploymentHistory = [...cv.employmentHistory];
      newEmploymentHistory[
        evt.target.closest(".employmentHistoryInputs").dataset.historyIndex
      ][evt.target.id] = evt.target.value;

      if (evt.target.dataset.achievementIndex) {
        newEmploymentHistory[
          evt.target.closest(".employmentHistoryInputs").dataset.historyIndex
        ].achievements[[evt.target.dataset.achievementIndex]].text =
          evt.target.value;
      }

      setCV({
        ...cv,
        employmentHistory: [...newEmploymentHistory],
      });
    }
  };

  return (
    <main className="main">
      <ButtonSavePDF />
      <ColorButtons />
      <Editor
        cv={cv}
        addSkill={addSkill}
        removeSkill={removeSkill}
        addPastJob={addPastJob}
        removePastJob={removePastJob}
        addAchievement={addAchievement}
        removeAchievement={removeAchievement}
        onChangeHandler={onChangeHandler}
      />
      <CV cv={cv} />
    </main>
  );
};

export default Main;

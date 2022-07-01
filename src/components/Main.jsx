import React, { Component } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { v4 as uuidv4 } from "uuid";
import CV from "./CV";
import ColorButton from "../components/ColorButton";
import "../styles/Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.doc = new jsPDF("portrait", "pt", "a4");
    this.generatePDF = this.generatePDF.bind(this);
    this.pointerEnterHandler = this.pointerEnterHandler.bind(this);
    this.pointerLeaveHandler = this.pointerLeaveHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.colorButtonsRef = React.createRef();

    this.state = {
      colorButtons: [
        {
          className: "color-button color-button-1 active-color",
          title: "Slate",
          type: "button",
        },
        {
          className: "color-button color-button-2",
          title: "Red",
          type: "button",
        },
        {
          className: "color-button color-button-3",
          title: "Green",
          type: "button",
        },
        {
          className: "color-button color-button-4",
          title: "Blue",
          type: "button",
        },
        {
          className: "color-button color-button-5",
          title: "Purple",
          type: "button",
        },
      ],
    };
  }

  generatePDF() {
    const cv = document.querySelector(".cv");
    html2canvas(cv, { scale: 2 }).then((canvas) => {
      let imgWidth = 210;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("portrait", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("cv.pdf");
    });
  }

  pointerEnterHandler(evt) {
    if (!evt.target.classList.contains("color-buttons")) {
      const target = getComputedStyle(evt.target);
      const cv = document.querySelector(".cv");

      for (const child of this.colorButtonsRef.current.children) {
        child.classList.remove("active-color");
      }

      cv.style.backgroundColor = target.backgroundColor;
    }
  }

  pointerLeaveHandler(evt) {
    if (!evt.target.classList.contains("color-buttons")) {
      const cv = document.querySelector(".cv");
      cv.removeAttribute("style");

      switch (true) {
        case cv.classList.contains("color-red"):
          this.colorButtonsRef.current.children[1].classList.add(
            "active-color"
          );
          break;
        case cv.classList.contains("color-green"):
          this.colorButtonsRef.current.children[2].classList.add(
            "active-color"
          );
          break;
        case cv.classList.contains("color-blue"):
          this.colorButtonsRef.current.children[3].classList.add(
            "active-color"
          );
          break;
        case cv.classList.contains("color-purple"):
          this.colorButtonsRef.current.children[4].classList.add(
            "active-color"
          );
          break;
        default:
          this.colorButtonsRef.current.children[0].classList.add(
            "active-color"
          );
          break;
      }
    }
  }

  clickHandler(evt) {
    if (!evt.target.classList.contains("color-buttons")) {
      const cv = document.querySelector(".cv");

      for (const child of this.colorButtonsRef.current.children) {
        child.classList.remove("active-color");
      }

      switch (true) {
        case evt.target.classList.contains("color-button-1"):
          cv.className = "cv";
          evt.target.classList.add("active-color");
          break;
        case evt.target.classList.contains("color-button-2"):
          cv.className = "cv";
          cv.classList.add("color-red");
          evt.target.classList.add("active-color");
          break;
        case evt.target.classList.contains("color-button-3"):
          cv.className = "cv";
          cv.classList.add("color-green");
          evt.target.classList.add("active-color");
          break;
        case evt.target.classList.contains("color-button-4"):
          cv.className = "cv";
          cv.classList.add("color-blue");
          evt.target.classList.add("active-color");
          break;
        case evt.target.classList.contains("color-button-5"):
          cv.className = "cv";
          cv.classList.add("color-purple");
          evt.target.classList.add("active-color");
          break;
      }
    }
  }

  render() {
    return (
      <main className="main">
        <button
          className="save-pdf-button"
          onClick={this.generatePDF}
          type="button"
        >
          Save as PDF
        </button>
        <div
          onClick={this.clickHandler}
          onPointerOver={this.pointerEnterHandler}
          onPointerOut={this.pointerLeaveHandler}
          ref={this.colorButtonsRef}
          className="color-buttons"
        >
          {this.state.colorButtons.map((btn) => (
            <ColorButton key={uuidv4()} colorBtnProps={btn} />
          ))}
        </div>
        <CV />
      </main>
    );
  }
}

export default Main;

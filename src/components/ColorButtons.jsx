import React, { Component } from "react";
import Button from "./Button";

class ColorButtons extends Component {
  constructor(props) {
    super(props);
    this.pointerEnterHandler = this.pointerEnterHandler.bind(this);
    this.pointerLeaveHandler = this.pointerLeaveHandler.bind(this);
    this.clickColorHandler = this.clickColorHandler.bind(this);
    this.colorButtonsRef = React.createRef();
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

  clickColorHandler(evt) {
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
      <div
        onClick={this.clickColorHandler}
        onPointerOver={this.pointerEnterHandler}
        onPointerOut={this.pointerLeaveHandler}
        ref={this.colorButtonsRef}
        className="color-buttons"
      >
        <Button
          className="color-button color-button-1 active-color"
          title="Slate"
        />
        <Button className="color-button color-button-2  " title="Red" />
        <Button className="color-button color-button-3  " title="Green" />
        <Button className="color-button color-button-4  " title="Blue" />
        <Button className="color-button color-button-5  " title="Purple" />
      </div>
    );
  }
}

export default ColorButtons;

import "../styles/ColorButtons.css";
import { useRef } from "react";
import Button from "./Button";

const ColorButtons = () => {
  const colorButtonsRef = useRef(null);

  const pointerEnterHandler = (evt) => {
    if (!evt.target.classList.contains("color-buttons")) {
      const target = getComputedStyle(evt.target);
      const cv = document.querySelector(".cv");

      for (const child of colorButtonsRef.current.children) {
        child.classList.remove("active-color");
      }

      cv.style.backgroundColor = target.backgroundColor;
    }
  };

  const pointerLeaveHandler = (evt) => {
    if (!evt.target.classList.contains("color-buttons")) {
      const cv = document.querySelector(".cv");
      cv.removeAttribute("style");

      switch (true) {
        case cv.classList.contains("color-red"):
          colorButtonsRef.current.children[1].classList.add("active-color");
          break;
        case cv.classList.contains("color-green"):
          colorButtonsRef.current.children[2].classList.add("active-color");
          break;
        case cv.classList.contains("color-blue"):
          colorButtonsRef.current.children[3].classList.add("active-color");
          break;
        case cv.classList.contains("color-purple"):
          colorButtonsRef.current.children[4].classList.add("active-color");
          break;
        default:
          colorButtonsRef.current.children[0].classList.add("active-color");
          break;
      }
    }
  };

  const clickColorHandler = (evt) => {
    if (!evt.target.classList.contains("color-buttons")) {
      const cv = document.querySelector(".cv");

      for (const child of colorButtonsRef.current.children) {
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
  };

  return (
    <div
      onClick={clickColorHandler}
      onPointerOver={pointerEnterHandler}
      onPointerOut={pointerLeaveHandler}
      ref={colorButtonsRef}
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
};

export default ColorButtons;

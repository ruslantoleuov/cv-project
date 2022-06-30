import { Component } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import CV from "./CV";
import "../styles/Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.doc = new jsPDF("portrait", "pt", "a4");
    this.generatePDF = this.generatePDF.bind(this);
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
        <CV />
      </main>
    );
  }
}

export default Main;

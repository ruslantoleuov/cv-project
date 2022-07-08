import { Component } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Button from "./Button";

class ButtonSavePDF extends Component {
  constructor(props) {
    super(props);
    this.generatePDF = this.generatePDF.bind(this);
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

  render() {
    return (
      <Button className="save-pdf-button" onClick={this.generatePDF}>
        Save as PDF
      </Button>
    );
  }
}

export default ButtonSavePDF;

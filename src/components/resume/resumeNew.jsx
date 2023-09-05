import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/sanjaykumar_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import NavBar from "../header";
import FindMe from "../section/section4";
import Footer from "../footer";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <NavBar />
      <Container fluid className="resume-section">
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} /> 
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "50px"}}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px"}}
          >
            <AiOutlineDownload />
            &nbsp;Download
          </Button>
        </Row>
      </Container>
      <FindMe />
      <Footer />
    </div>
  );
}

export default ResumeNew;

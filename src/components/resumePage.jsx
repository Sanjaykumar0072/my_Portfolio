import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../assets/Sanjaykumar_developer_1.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import NavBar from "./header";
import FindMe from "./section/section7";
import Footer from "./footer";
import Sidebar from "./sidebar/Sidebar";
import Theme from "./theme";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Sidebar />
      <Theme />
      <Container fluid className="resume-section">
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

        <Row className="resume">
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} className="d-flex flex-column align-center justify-content-center">
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index+1} scale={width > 786 ? 1.7 : 0.6} /> 
          ))}
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

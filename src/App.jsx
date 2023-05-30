import { useState , useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NavBar from './components/header';
import Section1 from './components/section/banner';
import Resume from './components/resume/resumeNew';
import Footer from './components/footer';

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/style.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);


  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Section1 />} />
          {/* <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} /> */}
          <Route path="/resume" element={<Resume />} />
          {/* <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

import { useState , useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './components/section/home';
import Resume from './components/resume/resumeNew';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

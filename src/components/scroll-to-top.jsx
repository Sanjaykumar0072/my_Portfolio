import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [socialIconStyle, setsocialIconStyle] = useState({
    animation: 'pulse 2s infinite ease-out'
  });

  const scrollCode = () => {
    const progressPath = document.querySelector('.progress-wrap path');
    const pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress);

    const offset = 50;
    const duration = 550;
    window.addEventListener('scroll', () => {
      if (window.scrollY > offset) {
        document.querySelector('.progress-wrap').classList.add('active-progress');
      } else {
        document.querySelector('.progress-wrap').classList.remove('active-progress');
      }
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollCode();
    const handleBodyClassChange = () => {
      const body = document.body;
      if (body.classList.contains("dark-mode")) {
        setsocialIconStyle({
          animation: 'pulseDark 2s infinite ease-out'
        });
      } else {
        setsocialIconStyle({
          animation: 'pulse 2s infinite ease-out'
        });
      }
    };

    handleBodyClassChange(); // Initial check

    const observer = new MutationObserver(handleBodyClassChange);
    observer.observe(document.body, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="progress-wrap" onClick={scrollToTop} style={socialIconStyle}>
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
      </svg>
    </div>
  );
};

export default ScrollToTop;

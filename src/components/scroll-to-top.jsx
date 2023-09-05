import React,  { useRef, useEffect } from 'react';
import arrow from '/src/assets/images/up-arrow-icon.svg';

const ScrollToTop = () => {
  const scrollTopRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        scrollTopRef.current.style.display = 'inline-block';
      } else {
        scrollTopRef.current.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Add smooth scroll behavior
    });
  };

   
    return(
      <>
        <span 
          ref={scrollTopRef}
          onClick={scrollToTop}
          className="scroll"
        ><img src={arrow} alt="" /></span>
      </>
    )    
}

export default ScrollToTop;
  
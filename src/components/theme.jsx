import React, { useState, useEffect } from "react";
import sun from '/src/assets/images/sun.svg';
import moon from '/src/assets/images/moon.svg';

const Theme = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const body = document.body
        const toggle = document.querySelector('.theme')

        if (darkMode === true) {
            body.classList.add('dark-mode')
            toggle.classList.add('toggle-active')
        } else {
            body.classList.remove('dark-mode')
            toggle.classList.remove('toggle-active')
        }
    }, [darkMode]);
    return (
        <>
            <div className="theme-container">
                <div className="theme" onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}>
                    <img src={darkMode === false ? sun : moon} alt={darkMode === false ? "sun" : "moon"} />
                </div>
            </div>
        </>
    )
};

export default Theme;
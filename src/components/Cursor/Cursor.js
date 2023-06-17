import React, { useState, useEffect} from "react";
import './Cursor.css'

const Cursor = () => {
    // const [position, setPosition] = useState({x: 0, y: 0});
    
    // useEffect(() => {
    //     const addEventListeners = () => {
    //         document.addEventListener('mousemove', mMove);
    //     };

    //     const removeEventListeners = () => {
    //         document.removeEventListener('mousemove', mMove);
    //     };

    //     const mMove = (el) => {
    //         setPosition({x: el.clientX, y: el.clientY});
    //     };

    //     addEventListeners();
    //     return () => removeEventListeners();
    // }, []);


    return (
        // <div className="cursor" style={{left: `${position.x}px`, top: `${position.y}px`}}/>
        < div className = "cursor" />
    );
};

export default Cursor;
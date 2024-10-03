import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import { FaPenToSquare } from "react-icons/fa6";
import { IoSaveSharp } from "react-icons/io5";
//import '../App.css';  // Correct way to import CSS from one folder up
import '../../App.css';




const ToDo = ({ task }) => {
  return (
    <div className='Todo'>
      <p></p>
      <p>{task}</p> {/* Display the task passed as a prop */}
      <div className = "icon-container">
      
      <FaPenToSquare />
      <IoSaveSharp />
      </div>
    </div>
  );
};

export default ToDo;

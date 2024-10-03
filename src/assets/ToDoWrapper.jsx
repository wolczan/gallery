import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';  
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

const ToDoWrapper = ({ className }) => {
  const [tasks, setTasks] = useState([]);  // State to hold tasks

  const handleSubmit = (task) => {
    // Add the submitted task to the tasks array
    setTasks((prevTasks) => [...prevTasks, task]);
    console.log('Task Submitted:', task); // Log the newly submitted task
  };

  // useEffect to log the updated array after state change
  useEffect(() => {
    console.log('Updated Tasks Array:', tasks);
  }, [tasks]); // Runs every time tasks is updated

  return (
    <div className={`TodoWrapper ${className}`}>
      <ToDoForm onSubmit={handleSubmit} />
      
      {/* Display each task using the ToDo component */}
      {tasks.map((task, index) => (
        <ToDo key={index} task={task} />
      ))}
    </div>
  );
};

ToDoWrapper.propTypes = {
  className: PropTypes.string,
};

export default ToDoWrapper;

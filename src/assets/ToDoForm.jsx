import React, { useState } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes

function ToDoForm({ onSubmit }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();  //site doesnt load
    if (task.trim()) {
      onSubmit(task);
      setTask('');  // Reset input field
    }
  };

  return (
    <form className="flex flex-col space-y-4 w-[220px] !important" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="p-2 border rounded w-full text-black"  
        placeholder="What is the task today?"
        value={task}
        onChange={(e) => setTask(e.target.value)}  
      />
      <button 
        type="submit" 
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Add Task
      </button>
    </form>
  );
}

// Add PropTypes validation
ToDoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,  // onSubmit is a required function prop
};

export default ToDoForm;

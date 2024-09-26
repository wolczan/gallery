import React, { useState } from 'react';

function ToDoForm({ onSubmit }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onSubmit(task);
      setTask('');  // Reset input field
    }
  };

  return (
    <form className="flex flex-col space-y-4 w-[300px] !important" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="p-2 border rounded w-full text-black"  // Ensure input is not affected by global styles
        placeholder="What is the task today?"
        value={task}
        onChange={(e) => setTask(e.target.value)}  // Update state on input change
      />
      <button 
        type="submit" 
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Add Task
      </button>
    </form>
  );
}

export default ToDoForm;
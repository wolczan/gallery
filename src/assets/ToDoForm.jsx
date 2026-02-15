import React, { useState } from 'react';
import PropTypes from 'prop-types';  // validation of data 
//import { db } from '../../firebase'; // Import Firestore
import { db } from "@/firebase";

import { collection, addDoc } from 'firebase/firestore';

function ToDoForm() { // Removed onSubmit prop since we handle Firestore directly
  const [task, setTask] = useState('');

  const addTask = async (taskText) => {
    try {
      await addDoc(collection(db, 'tasks'), { // Use addDoc with collection function
        text: taskText,
        completed: false,
        timestamp: new Date(),
      });
      console.log('Task added to Firestore!');
    } catch (error) {
      console.error('Error adding task: ', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);  // Use the Firestore addTask function
      setTask('');  // Reset input field after submitting
    }
  };

  return (
    <form className=" space-y-2  !important" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="mt-[1px] border border-gray-300 w-[165px] rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow shadow-sm hover:shadow-md"  
        placeholder="What is the task today?"
        value={task}
        onChange={(e) => setTask(e.target.value)}  
      />
      <button 
        type="submit" 
        className="w-full px-4 py-0.5 mb-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Add Task
      </button>
    </form>
  );
}

// Add PropTypes validation (no longer needed if you remove onSubmit prop)
ToDoForm.propTypes = {
  // No need for onSubmit prop anymore
};

export default ToDoForm;

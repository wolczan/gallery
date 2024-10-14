import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';  
import ToDoForm from './ToDoForm';
import TaskList from './Tasklist'; // Import TaskList component
import { db } from '../../firebase'; // Import Firestore
import { collection, onSnapshot, orderBy, query, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore"; // Import Firestore methods

const ToDoWrapper = ({ className }) => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from Firestore on component mount
  useEffect(() => {
    const tasksCollection = collection(db, "tasks"); // Access the 'tasks' collection
    const q = query(tasksCollection, orderBy("timestamp", "desc")); // Query for ordered tasks by timestamp
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedTasks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(fetchedTasks); // Update state with tasks from Firestore
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, []);

  // Function to add a new task to Firestore
  const handleSubmit = async (taskText) => {
    const newTask = {
      text: taskText,
      completed: false,
      timestamp: new Date(),
    };
    
    try {
      await addDoc(collection(db, "tasks"), newTask); // Add new task to Firestore
      console.log('Task added:', newTask);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Function to toggle completion status in Firestore
  const toggleComplete = async (id, completed) => {
    try {
      const taskRef = doc(db, "tasks", id); // Get the task document reference
      await updateDoc(taskRef, { completed: !completed }); // Update task's 'completed' field
      console.log('Task updated:', id);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  // Function to delete a task from Firestore
  const deleteTodo = async (id) => {
    try {
      const taskRef = doc(db, "tasks", id); // Get the task document reference
      await deleteDoc(taskRef); // Delete the task
      console.log('Task deleted:', id);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Function to edit a task's text in Firestore
  const editTodo = async (id, newText) => {
    try {
      const taskRef = doc(db, "tasks", id); // Get the task document reference
      await updateDoc(taskRef, { text: newText }); // Update the task's text
      console.log('Task edited:', id);
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  return (
    <div className={`TodoWrapper ${className}`}>
      <h1 className="mb-[9px] -mt-2">Nasza lista ToDo!</h1>
      <ToDoForm onSubmit={handleSubmit} />
      
      {/* Render TaskList component and pass tasks and handler functions as props */}
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

ToDoWrapper.propTypes = {
  className: PropTypes.string,
};

export default ToDoWrapper;

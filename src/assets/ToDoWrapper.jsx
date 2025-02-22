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
    const tasksCollection = collection(db, "tasks"); 
    const q = query(tasksCollection, orderBy("timestamp", "desc")); 
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedTasks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(fetchedTasks);
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
      await addDoc(collection(db, "tasks"), newTask);
      console.log('Task added:', newTask);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Function to toggle completion status in Firestore
  const toggleComplete = async (id, completed) => {
    try {
      const taskRef = doc(db, "tasks", id);
      await updateDoc(taskRef, { completed: !completed });
      console.log('Task updated:', id);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  // Function to delete a task from Firestore
  const deleteTodo = async (id) => {
    try {
      const taskRef = doc(db, "tasks", id);
      await deleteDoc(taskRef);
      console.log('Task deleted:', id);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Function to edit a task's text in Firestore
  const editTodo = async (id, newText) => {
    try {
      const taskRef = doc(db, "tasks", id);
      await updateDoc(taskRef, { text: newText });
      console.log('Task edited:', id);
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  return (
    <div className={`TodoWrapper ${className} mr-24`}>
      {/* Zamiast zwykłego nagłówka, dodajemy blok opisu działania */}
      <div className="mb-4 p-4 bg-gray-800 text-white rounded-lg shadow-md">
  <h2 className="text-xl font-bold mb-2">Jak działa nasza lista zadań?</h2>
  <p className="mb-2">
  useState i useEffect – do obsługi stanu i efektów ubocznych.
PropTypes – do walidacji właściwości (className).
ToDoForm – formularz dodawania nowych zadań.
TaskList – komponent wyświetlający listę zadań.
firebase/firestore – metody do operacji na bazie danych.
  </p>
  <p className="mb-2">
    
  </p>
  <p>
    
  </p>
</div>

<h1 className="mb-[9px] -mt-0.5 flex items-center">
  Together We Achieve! <span className="text-red-500 ml-2">❤️</span>
</h1>


      <ToDoForm onSubmit={handleSubmit} />

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

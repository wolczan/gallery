import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';  
import ToDoForm from './ToDoForm';
import TaskList from './Tasklist'; // Import TaskList component
import { db } from "@/firebase";
import { collection, onSnapshot, orderBy, query, addDoc, doc, updateDoc, deleteDoc, serverTimestamp, where } from "firebase/firestore"; // Import Firestore methods
import { useAuth } from '../utils/useAuth'; // Import useAuth hook

const ToDoWrapper = ({ className }) => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch tasks from Firestore on component mount
  useEffect(() => {

    if (!user?.uid) {
      setLoading(false);
      return;
      }

    const tasksCollection = collection(db, "tasks"); 
    const q = query(tasksCollection, orderBy("timestamp", "desc"), where("userId", "==", user.uid)); 
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedTasks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(fetchedTasks);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching tasks:", error);
      setError("Nie można pobrać zadań. Spróbuj ponownie później.");
      setLoading(false);
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, [user]);

  // Function to add a new task to Firestore
  const handleSubmit = async (taskText) => {

    if (!taskText.trim()) return;

    const newTask = {
      text: taskText,
      completed: false,
      userId: user.uid,
      timestamp: serverTimestamp(),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
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
      await updateDoc(taskRef, { completed: !completed, updatedAt: serverTimestamp() });
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

        if (!newText.trim()) return;

        try {
          const taskRef = doc(db, "tasks", id);

          await updateDoc(taskRef, { 
            text: newText.trim(),
            updatedAt: serverTimestamp(),
          });

          console.log('Task edited:', id);

        } catch (error) {
          console.error('Error editing task:', error);
        }
      };

    return (
    <div className="galeria   ">
    <div className={`TodoWrapper ${className} `}>
      <div className="mb-4 p-4 bg-gray-800 text-white rounded-lg shadow-md ">
        <h2 className="text-xl font-bold mb-2"> Jak dziala lista zadań?</h2>
        <p className="mb-2">
                useState i useEffect - do obsługi stanu i efektów ubocznych.
              PropTypes – do walidacji właściwości (className).
              ToDoForm – formularz dodawania nowych zadań.
              TaskList – komponent wyświetlający listę zadań.
              firebase/firestore – metody do operacji na bazie danych.
        </p>
        <p className="mb-2 border-1"></p>
        <p>Aplikacja wykorzystuje Firebase jako bazę danych do przechowywania zadań oraz Firebase Authentication do zarządzania użytkownikami. Integruje Firebase Storage lub Firestore do przechowywania i wyświetlania zdjęć zalogowanemu użytkownikowi.</p>
      
      </div>

      <h1 className="mb-[9px] -mt-0.5  ">
        Together We Achieve! <span className="text-red-500 ml-2 ">❤️</span>
      </h1>

      {loading && (
        <p className="text-white mb-2">
          Ładowanie zadań...
        </p>
      )}

      {error && (
        <p className="text-red-500 mb-2">
          {error}
        </p>
      )}

      <ToDoForm onSubmit={handleSubmit} />

      <p className="text-sm text-white/70 mb-3">
        Wszystkie: {tasks.length} | Zrobione: {tasks.filter((task) => task.completed).length}
      </p>

          {!loading && !error && (
        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      )}
    </div>
    </div>
  );
};


ToDoWrapper.propTypes = {
  className: PropTypes.string,
};

export default ToDoWrapper;

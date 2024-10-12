import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';  
import ToDoForm from './ToDoForm';
import ToDo from './TempToDo';

const ToDoWrapper = ({ className }) => {
  // Load tasks from localStorage if available, otherwise default to an empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Persist tasks to localStorage every time the tasks array changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleSubmit = (taskText) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    console.log('Task Submitted:', newTask);
  };

  const deleteTodo = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Define the editTodo function
  const editTodo = (id, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className={`TodoWrapper ${className}`}>
      <h1 className="mb-[9px] -mt-4">Get Things done!</h1>
      <ToDoForm onSubmit={handleSubmit} />
      
      {tasks.map((task) => (
        <ToDo
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo} // Pass editTodo to ToDo
        />
      ))}
    </div>
  );
};

ToDoWrapper.propTypes = {
  className: PropTypes.string,
};

export default ToDoWrapper;

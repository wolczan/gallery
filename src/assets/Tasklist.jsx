import React from 'react';
import ToDo from './TempToDo'; // Import the ToDo component to handle individual tasks

const TaskList = ({ tasks, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <ToDo 
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TaskList;

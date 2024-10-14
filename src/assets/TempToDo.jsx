import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { IoSaveSharp } from 'react-icons/io5';
import { FaPenToSquare } from 'react-icons/fa6';

const ToDo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    editTodo(task.id, newText); // Call editTodo with the updated text
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSaveClick();
    }
  };

  return (
    <div className={`Todo ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyPress={handleKeyPress}
          className="edit-input"
        />
      ) : (
        <p onClick={() => toggleComplete(task.id, task.completed)}>{task.text}</p>
      )}
      
      <div className="icon-container">
        {isEditing ? (
          <IoSaveSharp
            aria-label="Save Task"
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              handleSaveClick(); // Save the updated task text
            }}
          />
        ) : (
          <FaPenToSquare
            aria-label="Edit Task"
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              handleEditClick(); // Enter edit mode
            }}
          />
        )}

        <FontAwesomeIcon
          icon={faTrashCan}
          aria-label="Delete Task"
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
            deleteTodo(task.id);
          }}
        />
      </div>
    </div>
  );
};

// Define propTypes to validate props
ToDo.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired, // Add validation for editTodo function
};

export default ToDo;

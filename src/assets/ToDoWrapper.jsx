import React from 'react';
import PropTypes from 'prop-types';  // Import prop-types
import ToDoForm from './ToDoForm';

const ToDoWrapper = ({ className }) => {
  return (
    <div className={`TodoWrapper ${className}`}>
      {/* JSX Code */}
      <ToDoForm />
    </div>
  );
}

// Add prop types validation for className
ToDoWrapper.propTypes = {
  className: PropTypes.string,  // className should be a string
};

export default ToDoWrapper;

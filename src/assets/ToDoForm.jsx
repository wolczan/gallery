import React, { useState } from "react";
import PropTypes from "prop-types";

function ToDoForm({ onSubmit }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    onSubmit(task);
    setTask("");
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <input
        type="text"
        className="mt-[1px] border border-gray-300 w-full rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow shadow-sm hover:shadow-md"
        placeholder="Co dzisiaj masz do zrobienia?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        type="submit"
        className="w-full px-4 py-0.5 mb-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Dodaj zadanie
      </button>
    </form>
  );
}

ToDoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ToDoForm;
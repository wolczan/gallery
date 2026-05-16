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
    const q = query(tasksCollection, where("userId", "==", user.uid)); 
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedTasks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(fetchedTasks);
      setLoading(false);
        }, (error) => {
      console.error("Error fetching tasks:", error.code, error.message);
      setError(`Nie można pobrać zadań: ${error.code}`);
      setLoading(false);
      });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, [user?.uid]);

  // Function to add a new task to Firestore
  const handleSubmit = async (taskText) => {

    console.log("SUBMIT USER:", user);
    console.log("SUBMIT UID:", user?.uid);

    if (!user?.uid) {
    setError("Musisz być zalogowany.");
    return;
     }

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
      <div className="mb-4 p-4 bg-gray-800 text-white rounded-lg shadow-md">
  <h2 className="text-xl font-bold mb-2">
    Twoja prywatna lista pomysłów i zadań
  </h2>

  <p className="mb-2 text-white/80">
    Zarejestruj konto i korzystaj z własnej przestrzeni na zadania, pomysły,
    plany zdjęciowe, notatki blogowe albo listę rzeczy do zrobienia.
  </p>

  <p className="mb-2 text-white/80">
    Każdy użytkownik widzi tylko swoje zadania — możesz wrócić później i
    kontynuować pracę tam, gdzie skończyłeś.
  </p>

  <p className="text-sm text-white/60">
    Przykłady: pomysły na wpisy, lista zdjęć do obróbki, plan posta, checklisty
    zakupowe, przygotowanie plakatu lub prywatne notatki.
  </p>
</div>

      <h1 className="mb-[9px] -mt-0.5  ">
        Moja przestrzeń zadań <span className="text-red-500 ml-2 ">❤️</span>
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

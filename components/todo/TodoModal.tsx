import React, { useState } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../util/firebaseConfig";
import Image from "next/image";
import CloseIcon from "../../public/close.svg";
import CircularProgress from "@mui/material/CircularProgress";

interface TodoModalProps {
  onClose: () => void;
  todo?: any;
}

const TodoModal: React.FC<TodoModalProps> = ({ onClose, todo }) => {
  const [title, setTitle] = useState(todo ? todo.title : "");
  const [loading, setLoading] = useState(false);
  const [priority, setPriority] = useState<"high" | "medium">(
    todo ? todo.priority : "medium"
  );

  const buttonText = todo ? (loading ? "Updating..." : "Update Todo") : (loading ? "Adding..." : "Add Todo");

  const handleSubmit = async () => {
    setLoading(true)
    const newTodo = {
      title,
      priority,
      createdAt: todo ? todo.createdAt : serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    try {
      if (todo) {
        const todoRef = doc(db, "todos", todo.id);
        await updateDoc(todoRef, newTodo);
      } else {
        await addDoc(collection(db, "todos"), newTodo);
      }
      onClose();
    } catch (error) {
      console.error("Error adding or updating todo:", error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-md lg:w-500 w-5/6">
        <div className="flex justify-between items-center mb-7">
          <h2 className="text-xl font-bold ">
            {todo ? "Edit Todo" : "Add Todo"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <Image src={CloseIcon} alt="close" width={16} height={16} />
          </button>
        </div>

        <input
          type="text"
          className="w-full px-2 py-3 border border-gray-300 rounded-md mb-5 input"
          placeholder="Todo Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="mb-5">
          <label className="mr-4">Priority:</label>
          <label className="mr-4">
            <input
              type="radio"
              name="priority"
              value="high"
              checked={priority === "high"}
              onChange={() => setPriority("high")}
            />{" "}
            High
          </label>
          <label className="mr-4">
            <input
              type="radio"
              name="priority"
              value="medium"
              checked={priority === "medium"}
              onChange={() => setPriority("medium")}
            />{" "}
            Medium
          </label>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
          className="bg-neutral-800 mt-6 w-full text-white px-4 py-3 rounded-md"
        >
          {loading ? <CircularProgress style={{ width: '20px', height: '20px', color: 'white' }} /> : buttonText }
        </button>
      </div>
    </div>
  );
};

export default TodoModal;

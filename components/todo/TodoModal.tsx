import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "../../features/todoSlice";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import CloseIcon from "../../public/close.svg";

interface TodoModalProps {
  onClose: () => void;
  todo?: any;
}

const TodoModal: React.FC<TodoModalProps> = ({ onClose, todo }) => {
  const [name, setName] = useState(todo ? todo.name : "");
  const [priority, setPriority] = useState<"high" | "medium" | "low">(
    todo ? todo.priority : "medium"
  );
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todo.todos);

  const handleSubmit = () => {
    const newTodo = {
      id: todo ? todo.id : uuidv4(),
      name,
      priority,
      date: todo ? todo.date : new Date().toISOString(),
    };

    if (todo) {
      dispatch(editTodo(newTodo));
    } else {
      dispatch(addTodo(newTodo));
      const updatedTodos = [...todos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-md lg:w-500 w-5/6">
        <div className="flex justify-between items-center mb-7">
          <h2 className="text-xl font-bold ">
            {todo ? "Edit Todo" : "Add Todo"} {/* Change heading based on mode */}
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
          placeholder="Todo Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          onClick={handleSubmit}
          className="bg-neutral-800 text-white px-4 py-3 mt-5 rounded-md w-full"
        >
          {todo ? "Update Todo" : "Add Todo"} {/* Change button text based on mode */}
        </button>
      </div>
    </div>
  );
};

export default TodoModal;

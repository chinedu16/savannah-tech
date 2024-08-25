import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../features/todoSlice";
import { v4 as uuidv4 } from "uuid";

interface TodoModalProps {
  onClose: () => void;
}

const TodoModal: React.FC<TodoModalProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState<"high" | "medium" | "low">("medium");
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todo.todos);

  const handleSubmit = () => {
    const newTodo = {
      id: uuidv4(),
      name,
      priority,
      date: new Date().toISOString(),
    };

    dispatch(addTodo(newTodo));

    const updatedTodos = [...todos, newTodo];
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-500">
        <h2 className="text-xl font-bold mb-4">Add Todo</h2>
        <input
          type="text"
          className="w-full px-2 py-3 border border-gray-300 rounded-md mb-5"
          placeholder="Todo Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <div className="mb-5">
          <label className="mr-4">Priority:</label>
          <label className="mr-2">
            <input
              type="radio"
              name="priority"
              value="high"
              checked={priority === "high"}
              onChange={() => setPriority("high")}
            />{" "}
            High
          </label>
          <label className="mr-2">
            <input
              type="radio"
              name="priority"
              value="medium"
              checked={priority === "medium"}
              onChange={() => setPriority("medium")}
            />{" "}
            Medium
          </label>
          <label>
            <input
              type="radio"
              name="priority"
              value="low"
              checked={priority === "low"}
              onChange={() => setPriority("low")}
            />{" "}
            Low
          </label>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-neutral-800 text-white px-4 py-3 mt-5 rounded-md w-full"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoModal;

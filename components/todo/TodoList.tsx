import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, replaceTodos } from "../../features/todoSlice";
import Image from "next/image";
import TodoModal from "./TodoModal"; // Import TodoModal

import EditIcon from "../../public/edit.svg";
import DeleteIcon from "../../public/delete.svg";

const TodoList = () => {
  const todos = useSelector((state: any) => state.todo.todos);
  const dispatch = useDispatch();
  const [editingTodo, setEditingTodo] = useState<any>(null);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      dispatch(replaceTodos(parsedTodos));
    }
  }, [dispatch]);

  const groupedTodos = todos.reduce((group: any, todo: any) => {
    const date = new Date(todo.date).toDateString();
    group[date] = group[date] ?? [];
    group[date].push(todo);
    return group;
  }, {});

  return (
    <div className="mt-4">
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center">Table is empty</p>
      ) : (
        Object.keys(groupedTodos).map((date) => (
          <div key={date} className="mb-6">
            <h2 className="text-lg font-semibold mb-2">{date}</h2>
            <div className="space-y-4">
              {groupedTodos[date].map((todo: any) => (
                <div
                  key={todo.id}
                  className="p-4 border border-gray-300 rounded-md flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-xl font-bold">{todo.name}</h3>
                    <p className="mt-2">
                      <span
                        className={`inline-block px-2 text-sm py-1 rounded-md ${
                          todo.priority === "high"
                            ? "bg-high-bg text-high-text"
                            : todo.priority === "medium"
                            ? "bg-medium-bg text-medium-text"
                            : "bg-gray-400 text-black"
                        }`}
                      >
                        {todo.priority
                          ? todo.priority.charAt(0).toUpperCase() +
                            todo.priority.slice(1)
                          : "No Priority"}
                      </span>
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Image
                      src={EditIcon}
                      alt="edit"
                      width={21}
                      height={21}
                      onClick={() => setEditingTodo(todo)} // Set the todo to be edited
                      className="h-5 w-5 cursor-pointer object-contain"
                    />
                    <Image
                      src={DeleteIcon}
                      alt="delete"
                      width={21}
                      height={21}
                      onClick={() => dispatch(deleteTodo(todo.id))}
                      className="h-5 w-5 cursor-pointer object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}

      {editingTodo && (
        <TodoModal
          onClose={() => setEditingTodo(null)}
          todo={editingTodo} // Pass the todo to be edited
        />
      )}
    </div>
  );
};

export default TodoList;

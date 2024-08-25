import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, addTodo } from "../../features/todoSlice";

const TodoList = () => {
  const todos = useSelector((state: any) => state.todo.todos);
  const dispatch = useDispatch();

  // Load todos from local storage on component mount
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      parsedTodos.forEach((todo: any) => {
        dispatch(addTodo(todo));
      });
    }
  }, [dispatch]);

  // Save todos to local storage whenever todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
                        className={`inline-block px-2 py-1 rounded-md text-white ${
                          todo.priority === "high"
                            ? "bg-red-600"
                            : todo.priority === "medium"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                      >
                        {todo.priority.charAt(0).toUpperCase() +
                          todo.priority.slice(1)}
                      </span>
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      className="text-yellow-500"
                      onClick={() => console.log("Edit todo")}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => dispatch(deleteTodo(todo.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;

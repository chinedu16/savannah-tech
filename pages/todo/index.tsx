// pages/todo.tsx

import React, { useState } from "react";
import Layout from "../../components/Layout";
import TodoModal from "../../components/todo/TodoModal";
import TodoList from "../../components/todo/TodoList";

const Todo = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Layout>
      <div className="mt-2">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Todo List</h1>
          <div className="flex space-x-2">
            <button
              type="submit"
              onClick={openModal}
              className="bg-neutral-800 w-full text-white px-4 py-3 rounded-md"
            >
              Add Todo
            </button>
          </div>
        </div>

        <TodoList />

        {isModalOpen && <TodoModal onClose={closeModal} />}
      </div>
    </Layout>
  );
};

export default Todo;

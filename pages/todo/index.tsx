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
        <h1 className="font-bold text-2xl mb-4">Todo List</h1>
        <TodoList />

        <div
          
          onClick={openModal}
          className="fixed bottom-8 text-3xl font-bold flex items-center justify-center right-8 bg-primary h-10 w-10 lg:w-20 lg:h-20  text-white px-6 py-4 rounded-full shadow-lg hover:bg-neutral-700 focus:outline-none"
        >
          +
        </div>

        {isModalOpen && <TodoModal onClose={closeModal} />}
      </div>
    </Layout>
  );
};

export default Todo;

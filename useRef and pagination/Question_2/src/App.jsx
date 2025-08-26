import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const totalPages = Math.ceil(todos.length / todosPerPage);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const prevPage = () =>
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="container">
      <h1>Todo List</h1>
      <ul className="todo-list">
        {currentTodos.map((todo) => (
          <li key={todo.id}>
            {todo.id}. {todo.title}
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1} style={{color:"black"}}>
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => paginate(page)}
              className={page === currentPage ? "active" : ""}
            >
              {page}
            </button>
          );
        })}

        <button onClick={nextPage} disabled={currentPage === totalPages} style={{color:"black"}}                                >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;

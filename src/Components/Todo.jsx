import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    let title = e.target[0].value;

    let { data } = await axios.post("/todos", { title, completed: false });

    setTodos((prevTodos) => [...prevTodos, data]);

    e.target.reset();
    inputRef.current.focus();
  }

  function toggleTodoCompleted(id) {
    let newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(newTodos);
  }

  useEffect(() => {
    let unmounted = false;
    (async () => {
      const { data } = await axios.get("/todos?_limit=10");
      if (unmounted) return;

      setTodos((prevTodos) => [...prevTodos, ...data]);
    })();

    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <>
      <h2 className="display-4 text-center my-3">Todo list</h2>
      <form className="my-3" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className="form-label">
            Todo title
          </label>
          <div className="d-flex gap-3">
            <input
              type="text"
              className="form-control"
              placeholder="Take out the trash"
              ref={inputRef}
            />
            <button className="btn btn-success px-5">Add</button>
          </div>
        </div>
      </form>
      <ul className="list-group">
        {todos.map(({ id, title, completed }) => (
          <li
            className={`list-group-item cursor-pointer ${
              completed ? "text-decoration-line-through" : ""
            }`}
            key={id}
            role="button"
            onClick={() => toggleTodoCompleted(id)}
          >
            {title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;

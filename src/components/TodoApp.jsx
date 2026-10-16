import { useState, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import TodoForm from "./TodoForm";
import FilterBar from "./FilterBar";
import TodoList from "./TodoList";

const initialTodos = [
  { id: 1, text: "Revoir useState", completed: true },
  { id: 2, text: "Coder le reducer", completed: false },
  { id: 3, text: "Ajouter useLocalStorage", completed: false },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case "DELETE_TODO":
      return state.filter(
        (todo) => todo.id !== action.payload
      );

    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useLocalStorage(
    "todo-app-todos",
    todoReducer,
    initialTodos
  );

  const [filter, setFilter] = useState("all");

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);

      case "completed":
        return todos.filter((todo) => todo.completed);

      default:
        return todos;
    }
  }, [todos, filter]);

  const remainingCount = todos.filter(
    (todo) => !todo.completed
  ).length;

  function handleAdd(task) {
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: crypto.randomUUID(),
        text: task,
        completed: false,
      },
    });
  }

  function handleToggle(id) {
    dispatch({
      type: "TOGGLE_TODO",
      payload: id,
    });
  }

  function handleDelete(id) {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  }

  return (
    <section
      className="mx-auto w-full max-w-xl rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
      aria-labelledby="todo-title"
    >
      <h1 id="todo-title" className="mb-6 text-2xl font-bold">
        Mes tâches
      </h1>

      <TodoForm onAdd={handleAdd} />

      <FilterBar
        filter={filter}
        onFilterChange={setFilter}
      />

      <TodoList
        todos={filteredTodos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />

      <footer className="mt-6 border-t border-slate-200 pt-4">
        <p className="text-sm text-slate-600" role="status">
          <strong className="font-semibold text-slate-800">
            {remainingCount}
          </strong>{" "}
          {remainingCount > 1 ? "tâches restantes" : "tâche restante"}
        </p>
      </footer>
    </section>
  );
}

export default TodoApp;

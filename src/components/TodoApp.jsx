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
    <div>
      <h1>Mes tâches</h1>

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

      <p>{remainingCount} tâche(s) restante(s)</p>
    </div>
  );
}

export default TodoApp;

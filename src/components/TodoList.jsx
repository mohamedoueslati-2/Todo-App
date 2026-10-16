import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-slate-500" role="status">
        Aucune tâche à afficher.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-slate-200" aria-label="Liste des tâches">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;

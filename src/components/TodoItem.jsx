function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center gap-3 py-4">
      <label className="flex min-w-0 flex-1 cursor-pointer items-center gap-3">
        <input
          className="size-5 shrink-0 cursor-pointer accent-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        <span
          className={`min-w-0 text-sm [overflow-wrap:anywhere] ${
            todo.completed ? "text-slate-500 line-through" : "text-slate-800"
          }`}
        >
          {todo.text}
        </span>
      </label>

      <button
        className="min-h-11 shrink-0 cursor-pointer rounded-lg px-2 py-2 text-sm text-red-600 hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        type="button"
        aria-label={`Supprimer la tâche : ${todo.text}`}
        onClick={() => onDelete(todo.id)}
      >
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;

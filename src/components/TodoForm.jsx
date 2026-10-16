import { useState, useRef, useEffect } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const task = text.trim();

    if (task === "") {
      inputRef.current?.focus();
      return;
    }

    onAdd(task);
    setText("");
    inputRef.current?.focus();
  }

  return (
    <form
      className="mb-6 flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row"
      onSubmit={handleSubmit}
    >
      <label className="sr-only" htmlFor="new-todo">
        Nouvelle tâche
      </label>
      <input
        id="new-todo"
        ref={inputRef}
        className="min-h-12 min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm placeholder:text-slate-500 focus:border-blue-500 focus:outline-2 focus:outline-blue-200"
        type="text"
        placeholder="Nouvelle tâche..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button
        className="min-h-12 shrink-0 cursor-pointer rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        type="submit"
      >
        Ajouter
      </button>
    </form>
  );
}

export default TodoForm;

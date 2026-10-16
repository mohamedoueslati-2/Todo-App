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
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Nouvelle tâche..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TodoForm;

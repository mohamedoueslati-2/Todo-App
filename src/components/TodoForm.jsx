import { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const task = text.trim();

    if (task === "") return;

    onAdd(task);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
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

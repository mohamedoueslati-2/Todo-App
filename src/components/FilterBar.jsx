function FilterBar({ filter, onFilterChange }) {
  const buttonClassName =
    "min-h-11 flex-1 cursor-pointer rounded-lg border border-slate-200 px-2 py-2 text-sm font-medium text-slate-600 hover:border-blue-400 aria-pressed:border-blue-600 aria-pressed:bg-blue-600 aria-pressed:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

  return (
    <div className="mb-4 flex gap-2" role="group" aria-label="Filtrer les tâches">
      <button
        className={buttonClassName}
        type="button"
        onClick={() => onFilterChange("all")}
        aria-pressed={filter === "all"}
      >
        Toutes
      </button>

      <button
        className={buttonClassName}
        type="button"
        onClick={() => onFilterChange("active")}
        aria-pressed={filter === "active"}
      >
        Actives
      </button>

      <button
        className={buttonClassName}
        type="button"
        onClick={() => onFilterChange("completed")}
        aria-pressed={filter === "completed"}
      >
        Terminées
      </button>
    </div>
  );
}

export default FilterBar;

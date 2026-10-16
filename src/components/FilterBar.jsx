function FilterBar({ filter, onFilterChange }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => onFilterChange("all")}
        style={{
          fontWeight: filter === "all" ? "bold" : "normal",
        }}
      >
        Toutes
      </button>

      <button
        type="button"
        onClick={() => onFilterChange("active")}
        style={{
          fontWeight: filter === "active" ? "bold" : "normal",
        }}
      >
        Actives
      </button>

      <button
        type="button"
        onClick={() => onFilterChange("completed")}
        style={{
          fontWeight: filter === "completed" ? "bold" : "normal",
        }}
      >
        Terminées
      </button>
    </div>
  );
}

export default FilterBar;

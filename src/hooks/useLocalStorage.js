import { useReducer, useEffect } from "react";

function useLocalStorage(key, reducer, initialValue) {
  const [state, dispatch] = useReducer(
    reducer,
    initialValue,
    (defaultValue) => {
      try {
        const saved = localStorage.getItem(key);

        if (saved === null) {
          return defaultValue;
        }

        const parsed = JSON.parse(saved);

        return Array.isArray(parsed) ? parsed : defaultValue;
      } catch (error) {
        console.error("Erreur de lecture :", error);
        return defaultValue;
      }
    }
  );

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error("Erreur de sauvegarde :", error);
    }
  }, [key, state]);

  return [state, dispatch];
}

export default useLocalStorage;

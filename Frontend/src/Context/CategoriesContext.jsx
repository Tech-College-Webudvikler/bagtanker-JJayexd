import { createContext, useContext, useState, useEffect } from "react";

// Create context
const CategoryContext = createContext();

// Provider component
export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  // Fetch category data
  const getCategories = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/categories");

      if (!res.ok) {
        throw new Error(`Fejl: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error("Fejl ved hentning af kategorier:", err);
      setError(err.message);
    }
  };

  // Load categories on mount
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, error, getCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

// Custom hook for using context
export const useCategories = () => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error("useCategories must be used inside a CategoryProvider");
  }
  return context;
};

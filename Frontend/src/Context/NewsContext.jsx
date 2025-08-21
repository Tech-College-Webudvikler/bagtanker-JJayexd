import { createContext, useContext, useState, useEffect } from "react";

// Create context
const NewsContext = createContext();

// Provider component
export const NewsProvider = ({ children }) => {
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState(null);

  // Fetch news data
  const getData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/news");

      if (!res.ok) {
        throw new Error(`Fejl: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setNewsList(data);
    } catch (err) {
      console.error("Fejl ved hentning af nyheder:", err);
      setError(err.message);
    }
  };

  // Load data on mount
  useEffect(() => {
    getData();
  }, []);

  // Pick 3 random featured news
  const featuredNews = [...newsList]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <NewsContext.Provider value={{ newsList, featuredNews, error, getData }}>
      {children}
    </NewsContext.Provider>
  );
};

// Custom hook for using context
export const useNews = () => {
  const context = useContext(NewsContext);

  if (!context) {
    throw new Error("useNews must be used inside a NewsProvider");
  }

  return context;
};

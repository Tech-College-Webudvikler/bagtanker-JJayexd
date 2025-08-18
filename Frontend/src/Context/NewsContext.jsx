import { createContext, useContext, useState, useEffect } from "react";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/news");

      if (!res.ok) {
        throw new Error(`Fejl, ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      console.log(data);
      setNewsList(data);
      
    } catch (err) {
      console.error("Fejl,", err);
      setError(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const featuredNews = [...newsList]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <NewsContext.Provider value={{ newsList, featuredNews, error, getData }}>
      {children}
    </NewsContext.Provider>
  );
};

const useNews = () => useContext(NewsContext);

export { NewsProvider, useNews };

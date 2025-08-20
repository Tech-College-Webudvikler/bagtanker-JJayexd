import { createContext, useContext, useState, useEffect } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/products");

      if (!res.ok) {
        throw new Error(`Fejl: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Fejl ved hentning af produkter:", err);
      setError(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, error, getProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useProducts must be used inside a ProductsProvider");
  }

  return context;
};

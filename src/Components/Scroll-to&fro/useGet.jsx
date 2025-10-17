import { useState } from "react";

export const useGet = () => {
  const [items, setItems] = useState([]);
  const [loading,setLoading] = useState("true")

  const getItem = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setItems(result.products);
    } catch (error) {
      console.log(error);
    }finally{
        setLoading(false);
    }
  };

  return { items, getItem,loading };
};

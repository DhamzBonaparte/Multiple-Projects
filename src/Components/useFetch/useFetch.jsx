import { useState } from "react";

export function useFetch() {
  const [items, setItems] = useState([]);
  const [loading,setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setItems(result.products);
    } catch (err) {
      console.log(err);
    }finally{
        setLoading(false);
    }
  };
  return { getData, items,loading};
}

import { useState,useEffect } from "react";

export const useWindow = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(()=>{
    const prevWidth = localStorage.getItem("width");
    const prevHeight = localStorage.getItem("height")
    console.log(`The previous height was: ${prevHeight} px`);
    console.log(`The previous width was: ${prevWidth} px`);
  },[])

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    localStorage.setItem("height",height);
    localStorage.setItem("width",width);
  });

  return { width,height};
};

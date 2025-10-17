import { data } from "./data";
import "./scroll.scss";
import { useState,useEffect } from "react";


export default function Scroll() {
    const[scroll,setScroll] = useState(0);
    const [curr,setcurr] = useState(scroll);

    useEffect(()=>{ 
        setScroll(localStorage.getItem("scroll"))
    },[])

  window.addEventListener("scroll",()=>{
    setScroll(window.scrollY);
    setcurr((a)=>localStorage.setItem("scroll",scroll));
  })

  function handleClick() {
   if (window.scroll(0, 500)){
    console.log("scroll reached")
   }
  }

  return (
    <>
      <div onClick={() => handleClick()} style={{width:`${scroll}px`}}className="bar"></div>
      <h1  style={{ textAlign: "center" }}>
        Scroll Indicator
      </h1>
      <div className="items">
        <ul type="none">
          {data.map((a) => {
            return <li key={a.id}>{a.product}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

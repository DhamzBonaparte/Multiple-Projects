import { useEffect, useState } from "react";
import "./dark.scss";
export default function Dark() {
   const [isDark,setIsDark] = useState(()=>{
    return localStorage.getItem("theme")==="dark"; 
   });

   useEffect(()=>{
    document.body.className=isDark?"dark":"light";
    localStorage.setItem("theme",isDark?"dark":"light");
   },[isDark])

  function handleChange() {
    setIsDark((d) => !d);
  }
  return (
    <>
      <div className="body">
        <div className="midle">
          <h1>Hello World</h1>
          <button onClick={() => handleChange()}>
            {!isDark ? "Change To Dark Mode" : "Change To Light Mode"}
          </button>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";

export const useOnCLick = () => {
  const [active, setactive] = useState(false);
  const [butt, setButt] = useState(true);

  function handleShow(e) {
    setactive(!active);
    setButt(!butt);
    e.stopPropagation();
  }

  window.onclick = (e) => {
    setButt(true);
    setactive(false);
  };

  return { handleShow, active, butt, setButt };
};

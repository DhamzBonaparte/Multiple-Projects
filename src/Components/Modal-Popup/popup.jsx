import "./popup.scss";
import Actual from "./Actual";
import { useState } from "react";

export default function Popup() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={!show?"mathi":"mathi-active"}>
        <button
          style={show ? { display: "none" } : { display: "block" }}
          onClick={() => setShow((show) => !show)}
        >
          Show Popup
        </button>
        <Actual show={show} setShow={setShow} />
      </div>
    </>
  );
}

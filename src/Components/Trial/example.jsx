import { useRef } from "react";
import "./example.scss";

export default function Example() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();

  function goToX(ref) {
    const go = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: go,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="middd">
        <div className="sidebarr">
          <ul type="none">
            <li>
              <button onClick={() => goToX(ref1)}>Tab 1</button>
            </li>
            <li>
              <button onClick={() => goToX(ref2)}>Tab 2</button>
            </li>
            <li>
              <button onClick={() => goToX(ref3)}>Tab 3</button>
            </li>
            <li>
              <button onClick={() => goToX(ref4)}>Tab 4</button>
            </li>
            <li>
              <button onClick={() => goToX(ref5)}>Tab 5</button>
            </li>
          </ul>
        </div>
        <div className="divs">
          <div
            className="red"
            ref={ref1}
            style={{ backgroundColor: "red", height: "50vh" }}
          >
            {" "}
            1st part{" "}
          </div>
          <div
            className="blue"
            ref={ref2}
            style={{ backgroundColor: "blue", height: "50vh" }}
          >
            {" "}
            2nd part{" "}
          </div>
          <div
            className="yellow"
            ref={ref3}
            style={{ backgroundColor: "yellow", height: "50vh" }}
          >
            {" "}
            3rd part{" "}
          </div>
          <div
            className="green"
            ref={ref4}
            style={{ backgroundColor: "green", height: "50vh" }}
          >
            {" "}
            4th part{" "}
          </div>
          <div
            className="pink"
            ref={ref5}
            style={{ backgroundColor: "pink", height: "50vh" }}
          >
            {" "}
            5th part{" "}
          </div>
        </div>
      </div>
    </>
  );
}

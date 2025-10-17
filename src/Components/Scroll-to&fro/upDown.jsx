import { useGet } from "./useGet";
import { useEffect,useRef } from "react";

export default function UpDown() {
  const bottomRef = useRef(null);
  const { items, getItem, loading } = useGet();

  useEffect(() => {
    getItem();
  }, []);

  function scrollUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function scrollDown() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Scrolling Page</h1>

      <h2 style={{ textAlign: "center", margin: "20px", fontSize: "40px" }}>
        {loading ? "Loading..." : ""}
      </h2>
      <div style={{ textAlign: "center" }} className="button">
        {" "}
        <button style={{ textAlign: "center" }} onClick={() => scrollDown()}>
          Go to bottom
        </button>{" "}
      </div>
      <ul style={{ textAlign: "center" }} type="none">
        {items.map((product, id) => {
          return (
            <li style={{ margin: "20px", fontSize: "40px" }} key={id}>
              {product.title}
            </li>
          );
        })}
      </ul>
      <div style={{ textAlign: "center" }} className="button">
        <button onClick={() => scrollUp()}>Go to Top</button>
      </div>
      <div ref={bottomRef}></div>
    </>
  );
}

import { useFetch } from "./useFetch";
import "./home.scss";
import { useEffect } from "react";
import { useOnCLick } from "../useOnClick/useOnClick";
import { useWindow } from "../useWindowSizer/useWindow";

export default function Home() {
  const { getData, items, loading } = useFetch();
  const {width,height} = useWindow();
  const { handleShow, active, butt, setButt } = useOnCLick();

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="showww">
        <h1>Home</h1>
        <h2>{loading ? "Loading..." : null}</h2>
        <ul type="none">
          {items.map((product, id) => {
            return <li key={id}>{product.title}</li>;
          })}
        </ul>
      </div>
      <div className="midd">
        {butt ? (
          <button onClick={(e) => handleShow(e)}>Show details</button>
        ) : (
          ""
        )}
        <p>
          {active
            ? "Hello it me to hide me click anywhere in the pagen and to show me again click button again"
            : ""}
        </p>
      </div>
      <div className="wid">
        <p style={{textAlign:"center"}}>The Width is: {width} px</p>
        <p style={{textAlign:"center"}}>The Height is: {height} px</p>
      </div>
    </>
  );
}

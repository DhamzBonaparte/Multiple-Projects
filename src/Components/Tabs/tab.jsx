import "./tab.scss";
import { data } from "./data";
import { useState } from "react";

export default function Tab() {
  const [selectedId, setSelectedId] = useState(0);

  console.log(data[selectedId].content);

  function handleChange(index) {
    setSelectedId(index);
  }
  return (
    <>
      <div className="tabs">
        {data.map((item, id) => {
          return (
            <>
              <div key={id} className="single">
                <div
                  className="tab"
                  style={
                    id === selectedId
                      ? { backgroundColor: "green" }
                      : { backgroundColor: "purple" }
                  }
                  onClick={() => handleChange(id)}
                >
                  <h1>{item.label}</h1>
                </div>
              </div>
            </>
          );
        })}
        <div className="content">{data[selectedId].content}</div>
      </div>
    </>
  );
}

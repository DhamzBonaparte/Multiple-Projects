import { data } from "./MOCK_DATA";
import "./load.scss";
import { useState } from "react";
export default function Load() {
  const [now, setNow] = useState(5);

  function handleClick() {
    setNow((now) => now + 8);
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Load More Data</h1>
      <div className="cards" >
      {data.map((d) => {
          return d.id < now ? (
            <div key={d.id} className="card">
              <p>id: {d.id}</p>
              <p>Name: {d.first_name + d.last_name}</p>
              <p>Email: {d.email}</p>
              <p>Gender: {d.gender}</p>
              <p>IP adress: {d.ip_address}</p>
            </div>
          ) : (
            ""
          );
        })}{" "}
        </div>  
      <div className="butt">
        <button
          style={now >= 100 ? { display: "none" } : { display: "block" }}
          onClick={() => handleClick()}
          >
          Show more
        </button>
        <p className="p"style={now >= 100 ? { display: "block" } : { display: "none" }}>
          {now >= 100 ? "MAX DATA REACHED" : ""}
        </p>
      </div>
    </>
  );
}

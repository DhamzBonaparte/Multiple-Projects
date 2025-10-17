import "./Actual.scss";

export default function Actual({ show, setShow }) {
  return (
    <>
      <div className={`biccha ${show?"show":''}`} 
        style={show?{display:"block"}:{display:"none"}}>
        <div className="popup" >
          <div className="top">
            <h1>Random Heading</h1>
          </div>
          <div className="middle">
            <h2>Random Middle Part</h2>
          </div>
          <div className="bottom">
            <button onClick={() => setShow((show)=>!show)}>Hide Popup</button>
          </div>
        </div>
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import './app.scss'

function App() {
  const [rgb, setRgb] = useState(true);
  const [color, setColor] = useState({});

  useEffect(()=>{
    handleRGB()
  },[])

  function handleRGB() {
    const color = {
      r: Math.floor(Math.random() * 255),
      g: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255),
    };
    setColor(color);
    setRgb(true);
  }

  function handleHex() {
    const color = {
      r: Math.floor(Math.random() * 255).toString(16),
      g: Math.floor(Math.random() * 255).toString(16),
      b: Math.floor(Math.random() * 255).toString(16),
    };
    setColor(color);
    setRgb(false);
  }

  return (
    <>
      <div
        className="body"
        style={
          rgb
            ? {
                height: "100vh",
                backgroundColor:
                  "rgb(" + color.r + "," + color.g + "," + color.b + ")",
              }
            : {
                height: "100vh",
                backgroundColor: "#" + color.r + color.g + color.b,
              }
        }
      >
        <div className="top" style={{ textAlign: "center" }}>
          <button onClick={() => handleHex()}>Generate Hex color</button>
          <button onClick={() => handleRGB()}>Genetare RGB color</button>
        </div>
        <div className="mid" style={{ textAlign: "center" }}>
          <p>{rgb?"RGB ":"HEX "}color</p>
          <p className="color">
            {rgb?"rgb(" + color.r + "," + color.g + "," + color.b + ")": "#" + color.r + color.g + color.b}
            </p>
        </div>
      </div>
    </>
  );
}

export default App;

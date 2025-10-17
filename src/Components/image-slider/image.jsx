import img1 from "./images/lab 2 qno 1.png";
import img2 from "./images/lab 2 qno 2.png";
import img3 from "./images/lab 2 qno 3.png";
import img4 from "./images/lab 2 qno 5.png";
import img5 from "./images/lab 2 qno 16.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "./image.scss";
import { useEffect, useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";

export default function Image() {
  const [now, setNow] = useState(1);
  const [arr, newArr] = useState(null);

  useEffect(() => {
    const gio = images.map((a) => {
      return a.id === now ? a.image : null;
    });
    newArr(gio[now - 1]);
  }, [now]);

  const images = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
  ];

  function handleDec() {
    setNow((n) => (n <= 1 ? images.length : n - 1));
  }

  function handleInc() {
    setNow((n) => (n >= images.length ? 1 : n + 1));
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Image Slider</h1>

      <div className="card">
        <KeyboardArrowLeftIcon className="icon" onClick={() => handleDec()} />
        <img src={arr} className="image" />
        <KeyboardArrowRightIcon className="icon" onClick={() => handleInc()} />
      </div>
      <div className="navigate">
        {[...Array(images.length)].map((_,id) => {
            const newId = id+1;
          return <CircleIcon key={newId} className="icon" style={newId===now?{color:"rgb(180, 180, 180)"}:{color:'black'}}/>;
        })}
      </div>
    </>
  );
}

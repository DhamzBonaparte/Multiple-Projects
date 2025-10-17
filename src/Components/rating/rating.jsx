import { FaStar } from "react-icons/fa";
import "./rating.scss";
import { useState } from "react";

export default function Rating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleSelected(index) {
    setRating(index);
  }

  function handleShow(index) {
    setHover(index);
  }

  function handleleave() {
    setRating(hover);
  }
  return (
    <>
      <div className="body">
        {[...Array(5)].map((_, i) => {
          i += 1;
          return (
            <FaStar
              className={i <= (hover || rating) ? "active" : "inactive"}
              key={i}
              onClick={() => handleSelected(i)}
              onMouseMove={() => handleShow(i)}
              onMouseLeave={() => handleleave(i)}
              size={40}
            />
          );
        })}
      </div>
    </>
  );
}

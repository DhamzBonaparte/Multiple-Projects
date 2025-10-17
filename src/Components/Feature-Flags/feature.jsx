import { FeatureFlagContext } from "./Context";
import { useContext } from "react";
import Dark from "../Dark-Mode/dark.jsx";
import Rating from "../rating/rating.jsx";
import Image from "../image-slider/image.jsx";

export default function Feature() {
  const data = useContext(FeatureFlagContext);
  return (
    <>
      <h1>Feature Flags</h1>
      {data.showLightAndDarkMode ? <Dark /> : ""}
      {data.showRating ? <Rating /> : ""}
      {data.showImage ? <Image /> : ""}
    </>
  );
}

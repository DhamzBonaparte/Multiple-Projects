import { createContext, useContext } from "react";
import Feature from "./feature";

export const FeatureFlagContext = createContext(null);

const dummyAPIResponse = {
  showLightAndDarkMode: import.meta.env.VITE_SHOW_DARK_MODE === "true",
  showRating: import.meta.env.VITE__SHOW_RATING === "true",
  showImage: import.meta.env.VITE__SHOW_IMAGE === "true",
};

export default function Context({ children }) {
  return (
    <FeatureFlagContext.Provider value={dummyAPIResponse}>
      <Feature>{children}</Feature>
    </FeatureFlagContext.Provider>
  );
}

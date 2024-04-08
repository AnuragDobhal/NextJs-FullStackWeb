import React from "react";
import ImageSlider from "../components/ImageSlider";
import TypingComponent from "../components/TypingComponent";

const images = ["about.jpg", "banner.jpg", "techbg.jpg"];

export default function page() {
  return (
    <div>
      <ImageSlider images={images} />
      <TypingComponent />
    </div>
  );
}

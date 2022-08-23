import React from "react";
import images from "../../assets/images";

const Image = ({ source, height, width, alt }) => {
  return <img src={source} alt={alt} height={height} width={width} />;
};

Image.defaultProps = {
  height: "auto",
  width: "auto",
  source: images.common.NoImage,
  alt: "",
};

export default Image;

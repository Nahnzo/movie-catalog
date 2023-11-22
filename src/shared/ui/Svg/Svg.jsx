import React, { useState, useEffect, memo } from "react";

const Svg = memo(({ path, onClick, styles, viewBox }) => {
  const [svgText, setSvgText] = useState(null);
  useEffect(() => {
    fetch(path)
      .then((response) => response.text())
      .then((data) => {
        setSvgText(data);
      })
      .catch((error) => {
        console.error("Error fetching SVG:", error);
      });
  }, [path]);

  if (!svgText) {
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={`${styles}`}
      dangerouslySetInnerHTML={{ __html: svgText }}
      fill="transparent"
      viewBox={viewBox}
    />
  );
});

export default Svg;

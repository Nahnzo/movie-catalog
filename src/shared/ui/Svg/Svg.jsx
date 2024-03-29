import { useState, useEffect, memo } from "react";

const Svg = memo(({ path, onClick, styles, viewBox, title }) => {
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
    <div title={title}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
        className={`${styles}`}
        dangerouslySetInnerHTML={{ __html: svgText }}
        fill="transparent"
        viewBox={viewBox}
      />
    </div>
  );
});

export default Svg;

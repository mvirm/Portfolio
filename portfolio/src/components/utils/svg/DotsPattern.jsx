import { useState, useEffect } from "react";

const DotsPattern = ({ color, className }) => {
  const [size, setSize] = useState(1);
  const [gap, setGap] = useState(4);

  const updatePattern = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setSize(2);
      setGap(10);
    }
  };

  useEffect(() => {
    updatePattern(); // set inicial
    window.addEventListener("resize", updatePattern);
    return () => window.removeEventListener("resize", updatePattern);
  }, []);

  return (
    <svg width="100%" height="100%" className={className}>
      <defs>
        <pattern
          id="dots"
          width={gap}
          height={gap}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={size} cy={size} r={size} fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
};

export default DotsPattern;

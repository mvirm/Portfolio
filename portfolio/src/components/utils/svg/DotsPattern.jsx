import { useState, useEffect, useRef } from "react";

const DotsPattern = ({ color, className }) => {
  const [size, setSize] = useState(1.5);
  const [gap, setGap] = useState(6);
  const patternIdRef = useRef(`dots-${Math.random().toString(36).slice(2, 9)}`);

  const updatePattern = () => {
    const width = window.innerWidth;

    if (width >= 768 && width < 1024) {
      setSize(2);
      setGap(8);
    } else if (width >= 1024) {
      setSize(2.5);
      setGap(10);
    }
  };

  useEffect(() => {
    updatePattern(); // set inicial
    window.addEventListener("resize", updatePattern);
    return () => window.removeEventListener("resize", updatePattern);
  }, []);

  return (
    <svg key={color} width="100%" height="100%" className={className}>
      <defs>
        <pattern
          id={patternIdRef.current}
          width={gap}
          height={gap}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={size} cy={size} r={size} fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternIdRef.current})`} />
    </svg>
  );
};

export default DotsPattern;

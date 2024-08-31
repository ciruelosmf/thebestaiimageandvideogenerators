import React, { useState, useEffect } from 'react';

const colorValues = [
  '#000000', // black
  '#18181b', // zinc-900
  '#1c1917', // stone-900
  '#0c0a09', // zinc-950
  '#171717', // neutral-900
  '#0f172a', // slate-900
  '#7c2d12', // orange-900
  '#4d7c0f', // lime-800
  '#166534', // green-800
  '#115e59', // teal-800
  '#0e7490'  // cyan-800
];

const DynamicBackground = ({ rows = 7, cols = 7 }) => {
  const [rectangles, setRectangles] = useState([]);

  useEffect(() => {
    const initialRectangles = Array(rows * cols).fill().map(() => ({
      colorIndex: Math.floor(Math.random() * colorValues.length),
      direction: Math.random() > 0.5 ? 1 : -1,
    }));
    setRectangles(initialRectangles);

    const interval = setInterval(() => {
      setRectangles(prevRectangles => 
        prevRectangles.map(rect => {
          let newIndex = rect.colorIndex + rect.direction;
          if (newIndex >= colorValues.length || newIndex < 0) {
            rect.direction *= -1;
            newIndex = rect.colorIndex + rect.direction;
          }
          return { ...rect, colorIndex: newIndex };
        })
      );
    }, 1700);

    return () => clearInterval(interval);
  }, [rows, cols]);

  return (
    <div className="fixed inset-0 -z-10">
      <div className={`grid w-full h-full  `} style={{gridTemplateColumns: `repeat(${cols}, 2fr)`, gridTemplateRows: `repeat(${rows}, 1fr)`}}>
        {rectangles.map((rect, index) => (
          <div 
            key={index}
            className="duration-1000 linear shadow-lg  "
            style={{backgroundColor: colorValues[rect.colorIndex]}}
          />
        ))}
      </div>
    </div>
  );
};

export default DynamicBackground;
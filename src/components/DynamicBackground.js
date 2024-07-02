import React, { useState, useEffect } from 'react';

const colorValues = [
  '#000000', // black
  '#18181b', // zinc-900
  '#1c1917', // stone-900
  '#0c0a09', // zinc-950
  '#171717', // neutral-900
  '#0f172a', // slate-900
  '#1e1b4b', // indigo-950
  '#0c4a6e', // sky-950
  '#042f2e', // teal-950
  '#1e3a8a', // blue-950
  '#172554', // blue-950
  '#701a75', // fuchsia-900
  '#4a044e', // purple-950
  '#581c87', // purple-900
  '#3b0764', // violet-950
  '#831843', // pink-950
  '#881337', // rose-950
  '#7f1d1d', // red-900
  '#450a0a', // red-950
  '#713f12', // yellow-950
  '#78350f', // amber-900
  '#431407', // orange-950
  '#422006', // amber-950
  '#3f6212', // lime-900
  '#052e16', // green-950
  '#14532d', // emerald-900
  '#134e4a', // teal-900
  '#083344', // cyan-950
  '#1e3a8a', // blue-900
  '#27272a', // zinc-800
  '#292524', // stone-800
  '#262626', // neutral-800
  '#1e293b', // slate-800
  '#312e81', // indigo-900
  '#075985', // sky-900
  '#064e3b', // emerald-950
  '#1e40af', // blue-800
  '#86198f', // fuchsia-800
  '#6b21a8', // purple-800
  '#5b21b6', // violet-800
  '#9d174d', // pink-900
  '#9f1239', // rose-900
  '#991b1b', // red-800
  '#854d0e', // yellow-900
  '#92400e', // amber-800
  '#7c2d12', // orange-900
  '#4d7c0f', // lime-800
  '#166534', // green-800
  '#115e59', // teal-800
  '#0e7490'  // cyan-800
];

const DynamicBackground = ({ rows = 30, cols = 30 }) => {
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
    }, 1500);

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
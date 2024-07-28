// src/components/CustomNode.js
import React from "react";

const CustomNode = ({ nodeDatum }) => {
  const width = nodeDatum.width || 100;
  const height = nodeDatum.height || 50;

  return (
    <g>
      <rect
        width={width}
        height={height}
        x={-width / 2}
        y={-height / 2}
        fill="lightgray"
        stroke="black"
        strokeWidth={1}
      />
      <text fill="black" x={-width / 2 + 5} y="0" alignmentBaseline="middle">
        {nodeDatum.name}
      </text>
    </g>
  );
};

export default CustomNode;

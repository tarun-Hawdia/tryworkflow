// src/components/DecisionTree.js
import React, { useState } from "react";
import Tree from "react-d3-tree";
import CustomNode from "./CustomNode";

const decisionTreeData = {
  name: "Start",
  width: 100,
  height: 50,
  children: [
    {
      name: "Input Fields",
      width: 120,
      height: 60,
      children: [
        {
          name: "Age < 30",
          width: 100,
          height: 50,
          children: [{ name: "Loan Approved", width: 120, height: 60 }],
        },
        {
          name: "Age >= 30",
          width: 100,
          height: 50,
          children: [
            {
              name: "Gender Check",
              width: 120,
              height: 70,
              children: [
                {
                  name: "gender='M'",
                  width: 120,
                  height: 50,
                  children: [
                    {
                      name: "Pincode Check (start with '40)",
                      width: 220,
                      height: 50,
                    },
                  ],
                },
                {
                  name: "gender='F'",
                  width: 120,
                  height: 50,
                  children: [{ name: "Loan Approved", width: 120, height: 60 }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const DecisionTree = () => {
  const [data, setData] = useState(decisionTreeData);

  const renderCustomNodeElement = (rd3tProps) => <CustomNode {...rd3tProps} />;

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Tree data={data} renderCustomNodeElement={renderCustomNodeElement} />
    </div>
  );
};

export default DecisionTree;

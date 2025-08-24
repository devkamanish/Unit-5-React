// import React from "react";
import GrandChild from "./GrandChild";

const Child = () => {
  return (
    <div style={{ padding: "20px", border: "2px solid gray", margin: "20px" }}>
      <h2>Child Component</h2>
      <GrandChild />
    </div>
  );
};

export default Child;

import React, { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("Component mounted (first render)");
  }, []); 
  return (
    <div>
      <h2>Basic useEffect Example</h2>
      <p>Check your console log!</p>
    </div>
  );
};

export default BasicEffect;

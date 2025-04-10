import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ width: "100%", backgroundColor: "#eee", borderRadius: "10px", margin: "10px 0" }}>
      <div
        style={{
          height: "20px",
          width: `${progress}%`,
          backgroundColor: "#4caf50",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

export default ProgressBar;

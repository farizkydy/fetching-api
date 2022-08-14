import React from "react";

export default function Text({ red }) {
  console.log(red);
  return (
    <div style={{border:"1px solid black", width:"300px"}}>
      <h1 style={{ color: `${red ? "red" : "black"}` }}>This is a Text</h1>
    </div>
  );
}

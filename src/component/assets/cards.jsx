import React from "react";

export default function cards(props) {
  return (
    <div className={`cards ${props.color} p-4 mt-2`} style={{ width: "300px" }}>
      <h3 className='card-title text-center'>{props.title}</h3>
      <p className='card-text text-center'>{props.number}</p>
    </div>
  );
}

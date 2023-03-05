import React from "react";
import "./square.css";

const Square = (props) => {
  const { value, onClick = () => {} } = props;
  return (
    <div class="square" onClick={onClick}>
      {value}
    </div>
  );
};

Square.displayName = "Square";

export default Square;

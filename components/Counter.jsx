import React from "react";

const Counter = ({ hiFrom }) => {
  return (
    <h2>
      hi from {hiFrom}, <br /> A counter button should be here, but state won't
      work on server :)
    </h2>
  );
};

export default Counter;

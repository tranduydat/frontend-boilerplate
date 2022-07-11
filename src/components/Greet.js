import React from "react";

const Greet = ({name, aka}) => {
  return (
    <div>
      <h1>
        Hello {name} a.k.a {aka}
      </h1>
    </div>
  );
};

export default Greet;

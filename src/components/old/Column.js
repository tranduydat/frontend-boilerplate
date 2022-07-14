import React from "react";

function Column() {
  const items = [];
  return (
    <React.Fragment>
      {items.map((item) => (
        <React.Fragment key="{item.id}">
          <strong>Title</strong>
          <p>{item.title}</p>
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Dat</td>
    </React.Fragment>
  );
}

export default Column;

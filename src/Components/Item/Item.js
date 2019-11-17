import React from "react";
import List from "../List/List";

const Item = ({ data }) => {
  console.log(data);

  if (data.isList) {
    return (
      <div>
        <h2>{data.title}</h2>
        <List />
      </div>
    );
  }
  return (
    <div>
      <h2>{data.title}</h2>
    </div>
  );
};

export default Item;

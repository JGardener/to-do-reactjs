import React from "react";
import List from "../List/List";

const Item = ({ data, removeItem }) => {
  console.log(data);

  if (data.isList) {
    return (
      <div className="sub-list">
        <h2 className="sub-title">{data.title} </h2>
        <List />
      </div>
    );
  }
  return (
    <div>
      <h2 className="title">{data.title}</h2>
    </div>
  );
};

export default Item;

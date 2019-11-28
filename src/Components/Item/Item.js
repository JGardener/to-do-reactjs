import React from "react";
import List from "../List/List";

const Item = ({ data, removeItem }) => {
  if (data.isList) {
    return (
      <div className="sub-list">
        <li className="sub-title" onClick={removeItem}>
          {data.title}
        </li>
        <List />
      </div>
    );
  }
  return (
    <div>
      <li className="title" onClick={removeItem}>
        {data.title}
      </li>
    </div>
  );
};

export default Item;

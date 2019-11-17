import React, { useState } from "react";
import Item from "../Item/Item";

const List = () => {
  const [itemIsList, toggleItemIsList] = useState(false);
  const [items, updateItems] = useState([]);

  const addItem = e => {
    if (e.key === "Enter") {
      items.push({
        title: e.target.value,
        isList: itemIsList
      });
      updateItems(items.slice(0));
      e.target.value = "";
      toggleItemIsList(false);
    }
  };

  const toggleCheckbox = e => {
    // console.log(e.target.checked);
    toggleItemIsList(e.target.checked);
  };
  console.log(itemIsList);
  // console.log(items);
  return (
    <div>
      <input
        className="to-do-input"
        type="text"
        placeholder="Please enter a To-Do."
        onKeyPress={addItem}
      />
      <input type="checkbox" checked={itemIsList} onChange={toggleCheckbox} />
      {items.map(toDo => (
        <Item data={toDo} />
      ))}
    </div>
  );
};

export default List;

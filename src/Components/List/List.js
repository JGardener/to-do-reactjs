import React, { useState } from "react";
import Item from "../Item/Item";
import "./List.css";

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
      console.log(items);
    }
  };

  // This is where it got really complicated for me.
  // I needed to make a second array so React knew to re-render.
  // The original array was being modified, sure, but React didn't see the difference, I guess.

  // newArray takes the changes to state: items
  // we then update state:items to whatever is inside newArray
  // Fun!
  const removeItem = item => {
    const index = items.findIndex(listItem => {
      return item.target.innerHTML === listItem.title;
    });

    console.log(index);

    let newArray = [];
    if (index > -1) {
      items.splice(index, 1);
      newArray = [...items];
      updateItems(newArray);
    }
    console.log(newArray);
    return newArray;
  };

  const toggleCheckbox = e => {
    // console.log(e.target.checked);
    toggleItemIsList(e.target.checked);
  };

  return (
    <div className="list">
      <input
        className="to-do-input"
        type="text"
        placeholder="Please enter a To-Do."
        onKeyPress={addItem}
      />
      <input type="checkbox" checked={itemIsList} onChange={toggleCheckbox} />
      <span className="list-check"> Is this item another list?</span>
      {items.map(toDo => (
        <Item data={toDo} removeItem={removeItem} />
      ))}
    </div>
  );
};

export default List;

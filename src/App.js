import React from "react";
import List from "./Components/List/List";
import "./App.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h4 className="app-title">
        This is your ToDo list. Click on an item to delete it. Make lists within
        lists by clicking on the checkbox before entering a ToDo.
      </h4>
      <List />
    </div>
  );
}

export default App;

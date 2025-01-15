import React from "react";
import Clock from "./Clock";
import Stopwatch from "./Stopwatch";
import TodoList from "./ToDoList";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <div className="top-section">
        <Clock />
        <Stopwatch />
      </div>
      <TodoList />
    </div>
  );
}

export default App;

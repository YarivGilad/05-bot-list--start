// import { useEffect, useState } from "react";
import { List } from "./list.tsx";

export function App() {
  return (
    <div className="app">
      <div className="header">
        <h1 className="headline white-text">Show me the list!</h1>
      </div>
      <h1>error Message</h1>
      <h1>Loading...</h1>
      <List />
    </div>
  );
}

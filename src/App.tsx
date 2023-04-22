import React from "react";

import Profile from "./Components/Profile/Profile";

import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      <Profile />
    </div>
  );
}

export default App;

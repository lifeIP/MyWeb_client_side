import React from "react";

import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import "./App.css";

import Profile from "./Components/Profile/Profile";
import ListCommand from "./Components/ListCommand/ListCommand";

function App() {
  return (
    <div className="App">
      <div className="block-1">
        <Profile id={158} />
        <ListCommand id={158} />
      </div>
    </div>
  );
}

export default App;

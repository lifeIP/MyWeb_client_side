import * as React from "react";

import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import "./Profile.css";
import { render } from "@testing-library/react";

import Foto from "./Components/Foto";
import Login from "./Components/Login";
import Reputation from "./Components/Reputation";
import Subscribers from "./Components/Subscribers";
import SubscribeButton from "./Components/SubscribeButton";
import ProjectsButton from "./Components/ProjectsButton";

function Profile(props) {
  return (
    <div>
      <div>
        <Foto id={props.id} />
        <Login id={props.id} />
      </div>
      <div>
        <Reputation id={props.id} />
        <Subscribers id={props.id} />
      </div>
      <div>
        <SubscribeButton id={props.id} />
        <ProjectsButton id={props.id} />
      </div>
    </div>
  );
}

export default Profile;

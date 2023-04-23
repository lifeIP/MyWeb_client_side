import * as React from "react";

import "./Profile.css";
import Foto from "./Components/Foto/Foto";
import Login from "./Components/Login/Login";
import Reputation from "./Components/Reputation/Reputation";
import Subscribers from "./Components/Subscribers/Subscribers";
import SubscribeButton from "./Components/SubscribeButton/SubscribeButton";
import SupportButton from "./Components/SupportButton/SupportButton";

function Profile(props) {
  return (
    <div className="main_case">
      <div className="case_foto_login">
        <Foto id={props.id} className="foto" />
        <Login id={props.id} className="Login" />
      </div>

      <div className="case_parameters_buttons">
        <div className="parameters">
          <Reputation id={props.id} className="reputation" />
          <Subscribers id={props.id} className="subscribers" />
        </div>

        <div className="buttons">
          <SupportButton id={props.id} className="support_button" />
          <SubscribeButton id={props.id} className="subscribe_button" />
        </div>
      </div>
    </div>
  );
}

export default Profile;

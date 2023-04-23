import React from "react";
import "./Login.css";

function Login(props) {
  var Login = "lifeIP";
  return (
    <div className={props.className}>
      <h2 className="login">{Login}</h2>
    </div>
  );
}

export default Login;

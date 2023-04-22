import React from "react";
import "./Subscribers.css";

function Subscribers(props) {
  var subscribers = 4548;
  var foto = require(`file:///C:/MyWeb/client-side/src/Resources/subscribes_32.ico`);
  return (
    <div className="subscribers">
      <img src={foto} alt="" className="subs"></img>
      <b>{subscribers}</b>
    </div>
  );
}

export default Subscribers;

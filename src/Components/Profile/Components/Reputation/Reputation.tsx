import React from "react";
import "./Reputation.css";

function Reputation(props) {
  var reputation = 203;
  var foto = require(`file:///C:/MyWeb/client-side/src/Resources/star_32px.ico`);
  return (
    <div className="reputation">
      <img src={foto} alt="" className="star"></img>
      <b>{reputation}</b>
    </div>
  );
}

export default Reputation;

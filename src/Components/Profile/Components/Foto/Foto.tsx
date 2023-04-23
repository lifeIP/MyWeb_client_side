import React from "react";
import "./Foto.css";

function Foto(props) {
  var foto = require(`file:///C:/MyWeb/client-side/src/Resources/1.jpg`);
  return (
    <div className={props.className}>
      <img className="round" src={foto} alt=""></img>
    </div>
  );
}

export default Foto;

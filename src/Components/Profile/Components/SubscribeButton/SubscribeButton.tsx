import React from "react";

function SubscribeButton(props) {
  var sub = false;
  const [text, setText] = React.useState(!sub ? "Подписаться" : "Отписаться");

  function Clicked() {
    sub = !sub;
    setText(!sub ? "Подписаться" : "Отписаться");
  }
  return (
    <button onClick={Clicked} className={props.className}>
      {text}
    </button>
  );
}

export default SubscribeButton;

import React from "react";

import "./ListCommand.css";

function ListCommand(prps) {
  return (
    <div className="activity_buttons">
      <h4>Активность автора</h4>
      <hr></hr>
      <button>Новости</button>
      <button>Статьи</button>
      <button>Проекты</button>
      <h5>Связаться с автором</h5>
      <hr></hr>
      <button>Перейти в диалог</button>
    </div>
  );
}

export default ListCommand;

import React from "react";

import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import "./Profile.css";

var Profile = () => {
  var Name = "Артём Молокеев";
  var Status = "Жив, Здоров";
  var Id = 1;
  var Reputation = 99999;
  var Foto = require("file:///C:/MyWeb/client-side/src/Resources/1.jpg");

  var add = () => {
    console.log("add");
  };
  var edit = () => {
    console.log("edit");
  };
  var settings = () => {
    console.log("settings");
  };
  return (
    <div className="menu-plus-profile">
      <div className="profile">
        <div className="main_foto">
          <img src={Foto} className="foto" />
        </div>
        <div className="info_block">
          <div className="name">Имя: {Name}</div>
          <div className="id">Номер: {Id}</div>
          <div className="status">Статус: {Status}</div>
          <div className="reputation">Репутация: {Reputation}</div>
        </div>
      </div>
      <Menu
        menuButton={
          <MenuButton className="button">
            <img className="button-img" src={Foto}></img>
          </MenuButton>
        }
        transition
      >
        <MenuItem onClick={add}>Добавить</MenuItem>
        <MenuItem onClick={edit}>Редактировать</MenuItem>
        <MenuItem onClick={settings}>Настройки</MenuItem>
      </Menu>
    </div>
  );
};

export default Profile;

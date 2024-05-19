import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ExtensionIcon from "@mui/icons-material/Extension";
import AddIcon from "@mui/icons-material/Add";
import SmsIcon from "@mui/icons-material/Sms";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Header.css";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

const listIcon = [
  {
    id: 1,
    icon: HomeIcon,
  },
  {
    id: 2,
    icon: OndemandVideoIcon,
  },
  {
    id: 3,
    icon: StorefrontIcon,
  },
  {
    id: 4,
    icon: Diversity3Icon,
  },
  {
    id: 5,
    icon: ExtensionIcon,
  },
];

const listIconAlert = [
  {
    id: 1,
    icon: AddIcon,
  },
  {
    id: 2,
    icon: SmsIcon,
  },
  {
    id: 3,
    icon: NotificationsActiveIcon,
  },
  {
    id: 4,
    icon: ExpandMoreIcon,
  },
];

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-search">
        <FacebookIcon className="icon-facebook" />
        <div className="search">
          <SearchIcon className="icon-search" />
          <input type="text" placeholder="Search facebook" className="input" />
        </div>
      </div>
      <div className="header-list">
        <ul>
          {listIcon.map((item) => (
            <li key={item.id}>
              <item.icon />
            </li>
          ))}
        </ul>
      </div>
      <div className="header-alert">
        <div className="user-info">
          <Avatar
            alt="Remy Sharp"
            src="https://i.pinimg.com/236x/7c/db/3e/7cdb3e40d6dedfc8dcde7c2ddf0abcf6.jpg"
          />
          <span className="username">Thanh Duy</span>
        </div>
        <div className="list-alert">
          <ul>
            {listIconAlert.map((el) => (
              <li key={el.id}>
                <el.icon className="icon-alert" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

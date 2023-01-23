import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "@/assets/svg/logo.svg";
export const Header = () => (
  <header className="Header">
    <div className="Header__wrapper">
      <Logo width={"36px"} height={"36px"} />
      <div className="Header__buttom">
        <span>Progreso de mi solicitud</span>
      </div>
    </div>
  </header>
);

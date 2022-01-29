import React from "react";
import "../../components/sideBar/style.css";
import Display from "./dataDisplay";
import Search from "./search";
import { useSelector } from "react-redux";
const SideBar = ({ getWeather, getCoordinates }) => {
  const { show, bgColor, txtColor } = useSelector((state) => state.ui);

  return (
    <div
      className="essentiel-container center"
      style={{ display: show, backgroundColor: bgColor, color: txtColor }}
    >
      <div className="essentiel-centente center column">
        <Search getWeather={getWeather} getCoordinates={getCoordinates} />
        <Display />
      </div>
    </div>
  );
};

export default SideBar;

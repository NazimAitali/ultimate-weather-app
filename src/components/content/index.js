import React from "react";
import "../../components/content/style.css";
import { useSelector } from "react-redux";
import Today from "./hour";
import Week from "./week";
import Highlights from "./today's Highlights";
import Topbar from "./topbar";
import Map from "../map";
const Details = ({ getWeather }) => {
  const { top, left, topBarSelect, bgColor, txtColor } = useSelector(
    (state) => state.ui
  );
  const { error, loading, weather } = useSelector((state) => state.data);

  return (
    <>
      <div
        className="details-container center column"
        style={{
          top: top,
          left: left,
          backgroundColor: bgColor,
          color: txtColor,
        }}
      >
        <Topbar />
        {topBarSelect === 0 ? (
          <Today error={error} loading={loading} weather={weather} />
        ) : (
          <Week error={error} loading={loading} weather={weather} />
        )}
        <Highlights error={error} loading={loading} weather={weather} />
      </div>
      <Map getWeather={getWeather} />
    </>
  );
};

export default Details;

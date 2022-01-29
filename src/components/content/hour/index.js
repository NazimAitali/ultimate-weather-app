import React from "react";
import "../hour/style.css";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { iconHour } from "../../../functions/current";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { AiOutlinePercentage } from "react-icons/ai";

import { WiCelsius, WiFahrenheit } from "react-icons/wi";
import { SET_UI } from "../../../redux/actions/ui";
import { houreMoverUp, houreMoverDown } from "../../../functions/houreArrow";
const Today = ({ error, loading, weather }) => {
  const { bgBox, houreMove } = useSelector((state) => state.ui);
  const { degree, byHoureDay } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const testDay = () => {
    switch (byHoureDay) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 2;

      default:
        break;
    }
  };
  return (
    <div className="today-week-container center">
      {loading ? (
        <div></div>
      ) : error ? (
        <div></div>
      ) : weather ? (
        <FiArrowLeft
          className="houre-arrow-right center"
          style={{
            backgroundColor: bgBox === "#242526" ? "#313131" : bgBox,
            display: houreMove === -287 ? "none" : "flex",
          }}
          onClick={() => {
            dispatch({
              type: SET_UI,
              payload: { houreMove: houreMoverUp(houreMove) },
            });
          }}
        />
      ) : (
        <div>no data</div>
      )}

      <div className="houre-container center evenly">
        {loading ? (
          <div></div>
        ) : error ? (
          <div></div>
        ) : weather ? (
          <>
            {weather.forecast.forecastday[testDay()].hour.map((hour, i) => (
              <div
                key={i}
                className="houre-content center "
                style={{ backgroundColor: bgBox, left: `${houreMove}%` }}
              >
                <div className="forecast center column">
                  <div className="forecast-day center">
                    {moment(hour.time).calendar()}
                  </div>
                  <div className="hour-icon center">
                    {" "}
                    <img src={iconHour(hour, weather)} alt="icone"></img>
                  </div>

                  <div className="forecast-temp-container center evenly">
                    <div className="temp-max-hour center evenly">
                      {degree === "C" ? (
                        <>
                          <div className="center">{hour.temp_c}</div>{" "}
                          <WiCelsius className="center" />
                        </>
                      ) : (
                        <>
                          {" "}
                          <div className="center">{hour.temp_f}</div>
                          <WiFahrenheit className="center" />
                        </>
                      )}
                    </div>
                    <div className="temp-min-hour center evenly">
                      <div className="center">{hour.chance_of_rain}</div>

                      <AiOutlinePercentage className="center" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div>no data</div>
        )}
      </div>
      <FiArrowRight
        className="houre-arrow-left center"
        style={{
          backgroundColor: bgBox === "#242526" ? "#313131" : bgBox,
          display: houreMove === 0 ? "none" : "flex",
        }}
        onClick={() => {
          dispatch({
            type: SET_UI,
            payload: { houreMove: houreMoverDown(houreMove) },
          });
        }}
      />
    </div>
  );
};

export default Today;

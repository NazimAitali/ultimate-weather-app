import React from "react";
import "../week/style.css";
import {
  WiCelsius,
  WiFahrenheit,
  WiDirectionUp,
  WiDirectionDown,
  WiSnow,
} from "react-icons/wi";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { SET_UI } from "../../../redux/actions/ui";
import { weekMoverUp, weekMoverDown } from "../../../functions/houreArrow";
import moment from "moment";
import { iconForecast } from "../../../functions/current";
import { useDispatch, useSelector } from "react-redux";
import Weekitems from "./Weekitems";
import { langDisplay } from "../../../functions/selectLang";
const Week = ({ error, loading, weather }) => {
  const {
    bgBox,
    houreMove,
    forcastLeft0,
    forcastbottom0,
    forcastbottom1,
    forcastbottom2,
    forcastLeft1,
    forcastLeft2,
  } = useSelector((state) => state.ui);
  const { degree, lang } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  return (
    <div className="today-week-container center">
      <FiArrowLeft
        className="arrow-week-right center"
        style={{
          backgroundColor: bgBox === "#242526" ? "#313131" : bgBox,
          display: houreMove === -200 ? "none" : "flex",
        }}
        onClick={() => {
          dispatch({
            type: SET_UI,
            payload: { houreMove: weekMoverUp(houreMove) },
          });
        }}
      />
      <div className="week-container center">
        {loading ? (
          <div></div>
        ) : error ? (
          <div></div>
        ) : weather ? (
          <>
            <Weekitems
              bgBox={bgBox}
              houreMove={houreMove}
              moment={moment}
              WiDirectionUp={WiDirectionUp}
              WiCelsius={WiCelsius}
              WiFahrenheit={WiFahrenheit}
              WiSnow={WiSnow}
              WiDirectionDown={WiDirectionDown}
              iconForecast={iconForecast}
              degree={degree}
              SET_UI={SET_UI}
              dispatch={dispatch}
              forcastLeft0={forcastLeft0}
              forcastbottom0={forcastbottom0}
              forcastbottom1={forcastbottom1}
              forcastbottom2={forcastbottom2}
              forcastLeft1={forcastLeft1}
              forcastLeft2={forcastLeft2}
              weather={weather}
              lang={lang}
              langDisplay={langDisplay}
            />
          </>
        ) : (
          <div>no data</div>
        )}
      </div>
      <FiArrowRight
        className="arrow-week-left center"
        style={{
          backgroundColor: bgBox === "#242526" ? "#313131" : bgBox,
          display: houreMove === 0 ? "none" : "flex",
        }}
        onClick={() => {
          dispatch({
            type: SET_UI,
            payload: { houreMove: weekMoverDown(houreMove) },
          });
        }}
      />
    </div>
  );
};

export default Week;

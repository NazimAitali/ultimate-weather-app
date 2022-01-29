import React from "react";
import "../topbar/style.css";
import moment from "moment";
import {
  RiCloseLine,
  RiFahrenheitLine,
  RiCelsiusLine,
  RiMoonClearFill,
  RiSunFill,
} from "react-icons/ri";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import {
  darkChoise,
  iconChoise,
  bgChanger,
  txtChanger,
  boxChanger,
} from "../../../functions/menu";
import { useDispatch, useSelector } from "react-redux";
import { SET_UI } from "../../../redux/actions/ui";
import { SET_DATA } from "../../../redux/actions/data";
import { langDisplay } from "../../../functions/selectLang";
import LangSelect from "../langSelect";
const Topbar = () => {
  const {
    topBarSelect,
    darkMode,
    iconDarkmode,
    bgColor,
    txtColor,
    bgBox,
    byHoureHeight,
  } = useSelector((state) => state.ui);
  const { lang, degree, weather } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  return (
    <div className="top-bar-container center evenly">
      <div className="top-bar-menu center">
        <div className="top-bar-menu-content center evenly">
          <RiCloseLine
            className="close"
            onClick={() => {
              dispatch({
                type: SET_UI,
                payload: {
                  top: "0%",
                  left: "-100%",
                  show: "flex",
                  menuLang: false,
                },
              });
            }}
          />
          <div className="little-menu center evenly">
            <div className="by-houre center evenly">
              <div
                onClick={() => {
                  dispatch({
                    type: SET_UI,
                    payload: {
                      topBarSelect: 0,
                      houreMove: 0,
                      forcastLeft1: "0%",
                      forcastbottom1: "-100%",
                      forcastLeft2: "0%",
                      forcastbottom2: "-100%",
                      forcastLeft0: "0%",
                      forcastbottom0: "-100%",
                    },
                  });
                }}
                style={
                  topBarSelect === 0
                    ? { color: txtColor, borderBottom: `${txtColor} 2px solid` }
                    : { color: "gray" }
                }
              >
                {langDisplay(lang).byhour}
              </div>
              {topBarSelect === 0 ? (
                byHoureHeight === "0px" ? (
                  <BiDownArrow
                    onClick={() => {
                      dispatch({
                        type: SET_UI,
                        payload: {
                          byHoureHeight:
                            byHoureHeight === "0px" ? "150px" : "0px",
                          forcastLeft1: "0%",
                          forcastbottom1: "-100%",
                          forcastLeft2: "0%",
                          forcastbottom2: "-100%",
                          forcastLeft0: "0%",
                          forcastbottom0: "-100%",
                        },
                      });
                    }}
                    style={
                      topBarSelect === 0
                        ? { color: txtColor }
                        : { color: "gray" }
                    }
                  />
                ) : (
                  <BiUpArrow
                    onClick={() => {
                      dispatch({
                        type: SET_UI,
                        payload: {
                          byHoureHeight:
                            byHoureHeight === "0px" ? "150px" : "0px",
                          forcastLeft1: "0%",
                          forcastbottom1: "-100%",
                          forcastLeft2: "0%",
                          forcastbottom2: "-100%",
                          forcastLeft0: "0%",
                          forcastbottom0: "-100%",
                        },
                      });
                    }}
                    style={
                      topBarSelect === 0
                        ? { color: txtColor }
                        : { color: "gray" }
                    }
                  />
                )
              ) : null}

              <div
                className="days-select center evenly"
                style={{ height: byHoureHeight, background: bgBox }}
              >
                {byHoureHeight === "150px" ? (
                  <div
                    className="days-select-content center column evenly"
                    style={{
                      paddingTop: "35%",
                      height: "80%",
                      opacity: byHoureHeight === "150px" ? 1 : 0,
                    }}
                  >
                    <div
                      className="center"
                      onClick={() => {
                        dispatch({
                          type: SET_DATA,
                          payload: {
                            byHoureDay: 0,
                          },
                        });
                      }}
                    >
                      {moment(weather.forecast.forecastday[0].date).format(
                        "dddd"
                      )}
                    </div>
                    <div
                      className="center"
                      onClick={() => {
                        dispatch({
                          type: SET_DATA,
                          payload: {
                            byHoureDay: 1,
                          },
                        });
                      }}
                    >
                      {" "}
                      {moment(weather.forecast.forecastday[1].date).format(
                        "dddd"
                      )}
                    </div>
                    <div
                      className="center"
                      onClick={() => {
                        dispatch({
                          type: SET_DATA,
                          payload: {
                            byHoureDay: 2,
                          },
                        });
                      }}
                    >
                      {" "}
                      {moment(weather.forecast.forecastday[2].date).format(
                        "dddd"
                      )}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div
            className="center"
              onClick={() => {
                dispatch({
                  type: SET_UI,
                  payload: {
                    topBarSelect: 1,
                    houreMove: 0,
                    forcastLeft1: "0%",
                    forcastbottom1: "-100%",
                    forcastLeft2: "0%",
                    forcastbottom2: "-100%",
                    forcastLeft0: "0%",
                    forcastbottom0: "-100%",
                    byHoureHeight: "0px",
                  },
                });
              }}
              style={
                topBarSelect === 1
                  ? { color: txtColor, borderBottom: `${txtColor} 2px solid` }
                  : { color: "gray" }
              }
            >
              {langDisplay(lang).nextdays}
            </div>
          </div>
        </div>
      </div>
      <div className="top-bar-option center">
        <div className="top-bar-option-content center evenly">
          <div className="degree-select center evenly">
            <LangSelect />
            <div className="degree-contente center evenly">
              <div
                className="fahrenheit center"
                style={{
                  background: degree === "F" ? bgBox : !bgBox,
                  boxShadow:
                    degree === "F"
                      ? "0px 0px 5px 1px rgba(126, 126, 126, 0.2)"
                      : null,
                }}
                onClick={() =>
                  dispatch({
                    type: SET_DATA,
                    payload: { degree: "F" },
                  })
                }
              >
                <RiFahrenheitLine />
              </div>
              <div
                className="celsius center"
                style={{
                  background: degree === "C" ? bgBox : !bgBox,
                  boxShadow:
                    degree === "C"
                      ? "0px 0px 5px 1px rgba(126, 126, 126, 0.2)"
                      : null,
                }}
                onClick={() =>
                  dispatch({
                    type: SET_DATA,
                    payload: { degree: "C" },
                  })
                }
              >
                <RiCelsiusLine />
              </div>
            </div>
          </div>
          <div className="modeD center">
            <div
              className="switch-btn center"
              onClick={() => {
                dispatch({
                  type: SET_UI,
                  payload: {
                    darkMode: darkChoise(darkMode),
                    bgColor: bgChanger(bgColor),
                    txtColor: txtChanger(txtColor),
                    bgBox: boxChanger(bgBox),
                    iconDarkmode: iconChoise(iconDarkmode),
                  },
                });
              }}
            >
              <div className="bg-icone center" style={{ left: iconDarkmode }}>
                {iconDarkmode === "4%" ? (
                  <RiSunFill style={{ color: "yellow" }} />
                ) : (
                  <RiMoonClearFill style={{ color: "#F8F8F8" }} />
                )}
              </div>
              <div className="move-btn" style={{ left: darkMode }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

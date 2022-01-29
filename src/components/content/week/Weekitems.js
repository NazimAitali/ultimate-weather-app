import React from "react";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { AiOutlinePercentage } from "react-icons/ai";
function Weekitems({
  bgBox,
  houreMove,
  moment,
  WiDirectionUp,
  WiCelsius,
  WiFahrenheit,
  WiDirectionDown,
  iconForecast,
  degree,
  SET_UI,
  dispatch,
  forcastLeft0,
  forcastbottom0,
  forcastbottom1,
  forcastbottom2,
  forcastLeft1,
  forcastLeft2,
  weather,
  lang,
  langDisplay,
}) {
  return (
    <>
      <div
        className="week-content center "
        style={{ backgroundColor: bgBox, left: `${houreMove}%` }}
      >
        <div className="forecast center column ">
          <div className="forecast-day center evenly ">
            <div className="forecast-max-t center">
              <WiDirectionUp />

              {degree === "C" ? (
                <>
                  {weather.forecast.forecastday[0].day.maxtemp_c}{" "}
                  <WiCelsius style={{ fontSize: "2.5vmax" }} />
                </>
              ) : (
                <>
                  {" "}
                  {weather.forecast.forecastday[0].day.maxtemp_f}
                  <WiFahrenheit style={{ fontSize: "2.5vmax" }} />
                </>
              )}
            </div>

            <div>
              {" "}
              {moment(weather.forecast.forecastday[0].date).format("dddd")}
            </div>
            <div className="forecast-min-t center">
              <WiDirectionDown />

              {degree === "C" ? (
                <>
                  {weather.forecast.forecastday[0].day.mintemp_c}{" "}
                  <WiCelsius style={{ fontSize: "2.5vmax" }} />
                </>
              ) : (
                <>
                  {" "}
                  {weather.forecast.forecastday[0].day.mintemp_f}
                  <WiFahrenheit style={{ fontSize: "2.5vmax" }} />
                </>
              )}
            </div>
          </div>

          <div className="forecast-container center">
            <div className="forecaste-icone center">
              <img
                className="center"
                style={{ left: forcastLeft0 }}
                src={iconForecast(
                  weather.forecast.forecastday[0].day.condition.code
                )}
                alt="icone"
              ></img>
            </div>
            <div
              className="details-layer-container center"
              style={{ bottom: forcastbottom0 }}
            >
              <div className="details-layer-content center column">
                <div className="item-details center evenly">
                  <div className="center flex-end-content ">
                    {langDisplay(lang).humidity}
                  </div>

                  <div className="center flex-end-content">
                    {" "}
                    {Math.round(
                      weather.forecast.forecastday[0].day.avghumidity
                    )}
                  </div>
                  <AiOutlinePercentage className="center" />
                </div>
                <div className="item-details center evenly">
                  <div className="center flex-end-content">
                    {langDisplay(lang).Rain}
                  </div>

                  <div className="center flex-end-content">
                    {weather.forecast.forecastday[0].day.daily_chance_of_rain}
                  </div>
                  <AiOutlinePercentage className="center" />
                </div>
                <div className="item-details center evenly">
                  <div className="center flex-end-content">
                    {langDisplay(lang).wind}
                  </div>

                  <div className="center flex-end-content">
                    {Math.round(
                      weather.forecast.forecastday[0].day.maxwind_mph * 1.6
                    )}
                  </div>
                  <div className="center item-km">{langDisplay(lang).km}</div>
                </div>
                <div className="item-details center evenly">
                  <div className="center flex-end-content">
                    {langDisplay(lang).visibility}
                  </div>

                  <div className="center flex-end-content">
                    {Math.round(weather.forecast.forecastday[0].day.avgvis_km)}
                  </div>
                  <div className="center item-km">{langDisplay(lang).km}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="details-layer center flex-start-content 
          flex-end"
          onClick={() => {
            dispatch({
              type: SET_UI,
              payload: {
                forcastLeft0: forcastLeft0 === "0%" ? "-45%" : "0%",
                forcastbottom0: forcastbottom0 === "-100%" ? "5%" : "-100%",
                forcastLeft1: "0%",
                forcastbottom1: "-100%",
                forcastLeft2: "0%",
                forcastbottom2: "-100%",
                byHoureHeight: "0px",
              },
            });
          }}
        >
          <div className="detail-btn">
            {forcastLeft0 === "-45%" ? (
              <RiMenuUnfoldLine />
            ) : (
              <RiMenuFoldLine />
            )}
          </div>
        </div>
      </div>
      <div
        className="week-content center "
        style={{ backgroundColor: bgBox, left: `${houreMove}%` }}
      >
        <div className="forecast center column ">
          <div className="forecast-day center evenly ">
            <div className="forecast-max-t center">
              <WiDirectionUp />

              {degree === "C" ? (
                <>
                  {weather.forecast.forecastday[1].day.maxtemp_c}{" "}
                  <WiCelsius style={{ fontSize: "2.5vmax" }} />
                </>
              ) : (
                <>
                  {" "}
                  {weather.forecast.forecastday[1].day.maxtemp_f}
                  <WiFahrenheit style={{ fontSize: "2.5vmax" }} />
                </>
              )}
            </div>
            <div>
              {" "}
              {moment(weather.forecast.forecastday[1].date).format("dddd")}
            </div>{" "}
            <div className="forecast-min-t center">
              <WiDirectionDown />

              {degree === "C" ? (
                <>
                  {weather.forecast.forecastday[1].day.mintemp_c}{" "}
                  <WiCelsius style={{ fontSize: "2.5vmax" }} />
                </>
              ) : (
                <>
                  {" "}
                  {weather.forecast.forecastday[1].day.mintemp_f}
                  <WiFahrenheit style={{ fontSize: "2.5vmax" }} />
                </>
              )}
            </div>
          </div>

          <div className="forecast-container center">
            <div className="forecaste-icone center">
              <img
                className="center"
                style={{ left: forcastLeft1 }}
                src={iconForecast(
                  weather.forecast.forecastday[1].day.condition.code
                )}
                alt="icone"
              ></img>
            </div>
            <div
              className="details-layer-container center"
              style={{ bottom: forcastbottom1 }}
            >
              <div className="details-layer-content center column">
                <div className="item-details center evenly">
                  <div className="center flex-end-content">
                    {langDisplay(lang).humidity}
                  </div>

                  <div className="center flex-end-content">
                    {" "}
                    {Math.round(
                      weather.forecast.forecastday[1].day.avghumidity
                    )}
                  </div>
                  <AiOutlinePercentage className="center" />
                </div>
                <div className="item-details center evenly">
                  <div className="center flex-end-content">
                    {langDisplay(lang).Rain}
                  </div>

                  <div className="center flex-end-content">
                    {weather.forecast.forecastday[1].day.daily_chance_of_rain}
                  </div>
                  <AiOutlinePercentage className="center" />
                </div>
                <div className="item-details center evenly">
                  <div className="center flex-end-content">
                    {langDisplay(lang).wind}
                  </div>

                  <div className="center flex-end-content">
                    {Math.round(
                      weather.forecast.forecastday[1].day.maxwind_mph * 1.6
                    )}
                  </div>
                  <div className="center item-km">{langDisplay(lang).km}</div>
                </div>
                <div className="item-details center evenly">
                  <div className="center flex-end-content">
                    {langDisplay(lang).visibility}
                  </div>

                  <div className="center flex-end-content">
                    {Math.round(weather.forecast.forecastday[1].day.avgvis_km)}
                  </div>
                  <div className="center item-km">{langDisplay(lang).km}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="details-layer center flex-start-content 
          flex-end"
          onClick={() => {
            dispatch({
              type: SET_UI,
              payload: {
                forcastLeft1: forcastLeft1 === "0%" ? "-45%" : "0%",
                forcastbottom1: forcastbottom1 === "-100%" ? "5%" : "-100%",
                forcastLeft0: "0%",
                forcastbottom0: "-100%",
                forcastLeft2: "0%",
                forcastbottom2: "-100%",
                byHoureHeight: "0px",
              },
            });
          }}
        >
          <div className="detail-btn">
            {forcastLeft1 === "-45%" ? (
              <RiMenuUnfoldLine />
            ) : (
              <RiMenuFoldLine />
            )}
          </div>
        </div>
      </div>
      <div
        className="week-content center "
        style={{ backgroundColor: bgBox, left: `${houreMove}%` }}
      >
        <div className="forecast center column ">
          <div className="forecast-day center evenly ">
            <div className="forecast-max-t center">
              <WiDirectionUp />

              {degree === "C" ? (
                <>
                  {weather.forecast.forecastday[2].day.maxtemp_c}{" "}
                  <WiCelsius style={{ fontSize: "2.5vmax" }} />
                </>
              ) : (
                <>
                  {" "}
                  {weather.forecast.forecastday[2].day.maxtemp_f}
                  <WiFahrenheit style={{ fontSize: "2.5vmax" }} />
                </>
              )}
            </div>
            <div>
              {moment(weather.forecast.forecastday[2].date).format("dddd")}
            </div>{" "}
            <div className="forecast-min-t center">
              <WiDirectionDown />

              {degree === "C" ? (
                <>
                  {weather.forecast.forecastday[2].day.mintemp_c}{" "}
                  <WiCelsius style={{ fontSize: "2.5vmax" }} />
                </>
              ) : (
                <>
                  {" "}
                  {weather.forecast.forecastday[2].day.mintemp_f}
                  <WiFahrenheit style={{ fontSize: "2.5vmax" }} />
                </>
              )}
            </div>
          </div>

          <div className="forecast-container center">
            <div className="forecaste-icone center">
              <img
                className="center"
                style={{ left: forcastLeft2 }}
                src={iconForecast(
                  weather.forecast.forecastday[2].day.condition.code
                )}
                alt="icone"
              ></img>
            </div>
            <div
              className="details-layer-container center"
              style={{ bottom: forcastbottom2 }}
            >
              <div className="details-layer-content center column">
                <div className="item-details center evenly">
                  <div className="center flex-end-content">
                    {langDisplay(lang).humidity}
                  </div>

                  <div className="center flex-end-content">
                    {" "}
                    {Math.round(
                      weather.forecast.forecastday[2].day.avghumidity
                    )}
                  </div>
                  <AiOutlinePercentage className="center" />
                </div>
                <div className="item-details center evenly">
                  <div className="center flex-end-content">
                    {langDisplay(lang).Rain}
                  </div>

                  <div className="center flex-end-content">
                    {weather.forecast.forecastday[2].day.daily_chance_of_rain}
                  </div>
                  <AiOutlinePercentage className="center" />
                </div>
                <div className="item-details center evenly">
                  <div className="center flex-end-content">
                    {langDisplay(lang).wind}
                  </div>

                  <div className="center flex-end-content">
                    {Math.round(
                      weather.forecast.forecastday[2].day.maxwind_mph * 1.6
                    )}
                  </div>
                  <div className="center item-km">{langDisplay(lang).km}</div>
                </div>
                <div className="item-details center evenly">
                  <div className="center flex-end-content">
                    {langDisplay(lang).visibility}
                  </div>

                  <div className="center flex-end-content">
                    {Math.round(weather.forecast.forecastday[2].day.avgvis_km)}
                  </div>
                  <div className="center item-km">{langDisplay(lang).km}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="details-layer center flex-start-content 
          flex-end"
          onClick={() => {
            dispatch({
              type: SET_UI,
              payload: {
                forcastLeft2: forcastLeft2 === "0%" ? "-45%" : "0%",
                forcastbottom2: forcastbottom2 === "-100%" ? "5%" : "-100%",
                forcastLeft1: "0%",
                forcastbottom1: "-100%",
                forcastLeft0: "0%",
                forcastbottom0: "-100%",
                byHoureHeight: "0px",
              },
            });
          }}
        >
          <div className="detail-btn">
            {forcastLeft2 === "-45%" ? (
              <RiMenuUnfoldLine />
            ) : (
              <RiMenuFoldLine />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Weekitems;

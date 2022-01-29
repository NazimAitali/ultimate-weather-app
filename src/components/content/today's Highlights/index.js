import React from "react";
import moment from "moment";
import "../today's Highlights/style.css";
import sunrise from "../../../assets/icons/sunrise.png";
import sunset from "../../../assets/icons/sunset.png";
import moonrise from "../../../assets/icons/moonrise.png";
import moonset from "../../../assets/icons/moonset.png";
import { useDispatch, useSelector } from "react-redux";
import {
  WiHumidity,
  WiSunrise,
  WiMoonrise,
  WiRain,
  WiThermometer,
  WiCelsius,
  WiFahrenheit,
  WiDirectionUp,
  WiDirectionDown,
  WiRaindrop,
  WiUmbrella,
  WiThermometerInternal,
  WiSnow,
  WiBarometer,
  WiCloud,
} from "react-icons/wi";
import { GiSunglasses, GiWindsock } from "react-icons/gi";
import { GrStatusGoodSmall } from "react-icons/gr";
import { RiLungsLine } from "react-icons/ri";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import {
  Wind,
  visibilityStatus,
  humidityStatus,
  WindCurrent,
  visibilityStatusCurrent,
  humidityStatusCurrent,
  usIndex,
  ukIndex,
} from "../../../functions/indicator";
import { langDisplay } from "../../../functions/selectLang";
import {
  highlightsMoveUp,
  highlightsMoveDown,
} from "../../../functions/houreArrow";
import { AiOutlineEye } from "react-icons/ai";
import Houreitems from "./Houreitems";
import { SET_UI } from "../../../redux/actions/ui";
import Warning from "../../../assets/undraw_Notify_re_65on.svg";
const Highlights = () => {
  const {
    bgBox,
    bgColor,
    txtColor,
    today,
    air,
    highlightSelect,
    highlightsMove,
  } = useSelector((state) => state.ui);
  const { weather, loading, error, degree, lang } = useSelector(
    (state) => state.data
  );

  const max = 2 * 3.14159265358979 * 30;
  const uvIndex = weather
    ? today
      ? (max * weather.forecast.forecastday[0].day.uv) / 16
      : (max * weather.current.uv) / 16
    : null;

  const pieStyle = {
    strokeDasharray: `${uvIndex}%,${max}%`,
  };
  const dispatch = useDispatch();
  return (
    <div className="highlights-container center column">
      <div className="highlights-title center">
        {" "}
        <div className="little-menu-highlights center evenly">
          {loading ? (
            <div className="loader center">
              <div className="item1"></div>
              <div className="item2"></div>
              <div className="circle"></div>
            </div>
          ) : error ? (
            <div className="warning center">
              <img src={Warning} alt="error"></img>
            </div>
          ) : weather ? (
            <>
              {" "}
              <div
                className="today center"
                onClick={() => {
                  dispatch({
                    type: SET_UI,
                    payload: {
                      air: false,
                      highlightSelect: 0,
                      today: true,
                      highlightsMove: 0,
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
                  highlightSelect === 0
                    ? {
                        color: txtColor,
                        cursor: "pointer",
                        borderBottom: `${txtColor} 2px solid`,
                      }
                    : { color: "gray", cursor: "pointer" }
                }
              >
                {langDisplay(lang).today}
              </div>
              <div
                className="current center"
                onClick={() => {
                  dispatch({
                    type: SET_UI,
                    payload: {
                      air: false,
                      highlightSelect: 1,
                      today: false,
                      highlightsMove: 0,
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
                  highlightSelect === 1
                    ? {
                        color: txtColor,
                        cursor: "pointer",
                        borderBottom: `${txtColor} 2px solid`,
                      }
                    : { color: "gray", cursor: "pointer" }
                }
              >
                {langDisplay(lang).current}
              </div>
              <div
                className="air-btn center"
                style={{ backgroundColor: bgBox }}
              >
                <div
                  className="air center evenly"
                  onClick={() => {
                    dispatch({
                      type: SET_UI,
                      payload: {
                        air: true,
                        highlightSelect: 2,
                        highlightsMove: 0,
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
                    highlightSelect === 2
                      ? { color: txtColor, cursor: "pointer" }
                      : { color: "gray", cursor: "pointer" }
                  }
                >
                  <RiLungsLine />
                  <div> {langDisplay(lang).airquality}</div>
                </div>
              </div>
            </>
          ) : (
            <div>No data</div>
          )}
        </div>
      </div>
      <div className="highlights-content center">
        {loading ? (
          <div></div>
        ) : error ? (
          <div></div>
        ) : weather ? (
          <>
            <FiArrowDown
              className="highlights-arrow-right center"
              style={{
                backgroundColor: bgBox === "#242526" ? "#313131" : bgBox,
                display: highlightsMove === 0 ? "none" : "flex",
              }}
              onClick={() => {
                dispatch({
                  type: SET_UI,
                  payload: { highlightsMove: highlightsMoveUp(highlightsMove) },
                });
              }}
            />{" "}
            <Houreitems
              bgBox={bgBox}
              Icone={WiThermometer}
              title={air ? "Co" : langDisplay(lang).temperature}
            >
              <div className="detail-container center column">
                <div className="temp-max-today center">
                  {air ? (
                    <>{Math.round(weather.current.air_quality.co)}</>
                  ) : today ? (
                    <>
                      {" "}
                      <WiDirectionUp />
                      {degree === "C" ? (
                        <>
                          {weather.forecast.forecastday[0].day.maxtemp_c}
                          <WiCelsius />
                        </>
                      ) : (
                        <>
                          {weather.forecast.forecastday[0].day.maxtemp_f}
                          <WiFahrenheit />
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <WiThermometerInternal />
                      {degree === "C" ? (
                        <>
                          {weather.current.temp_c} <WiCelsius />
                        </>
                      ) : (
                        <>
                          {weather.current.temp_f} <WiFahrenheit />
                        </>
                      )}
                    </>
                  )}
                </div>
                <div className="temp-min-today center">
                  {air ? (
                    <div className="μg center">
                      {lang !== "ar" ? "μg/m3" : "مغ/م3"}
                    </div>
                  ) : today ? (
                    <>
                      <WiDirectionDown />
                      {degree === "C" ? (
                        <>
                          {weather.forecast.forecastday[0].day.mintemp_c}
                          <WiCelsius />
                        </>
                      ) : (
                        <>
                          {weather.forecast.forecastday[0].day.mintemp_f}
                          <WiFahrenheit />
                        </>
                      )}
                    </>
                  ) : null}
                </div>
              </div>
            </Houreitems>
            <Houreitems
              bgBox={bgBox}
              Icone={WiRaindrop}
              title={air ? "No2" : langDisplay(lang).rain}
            >
              <div className="detail-container center column">
                {air ? (
                  <>
                    <div className="temp-max-today center">
                      {Math.round(weather.current.air_quality.no2)}
                    </div>
                    <div className="μg center">
                      {lang !== "ar" ? "μg/m3" : "مغ/م3"}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mm-rain-today center">
                      <WiUmbrella className="center" />
                      <div className="center">
                        {today
                          ? weather.forecast.forecastday[0].day.totalprecip_mm
                          : weather.current.precip_mm}
                      </div>
                      <div className="center">{langDisplay(lang).mm}</div>
                    </div>

                    {today ? (
                      <div className="rainSnow center">
                        <div className="chance-snowRain-today center">
                          <WiRain className="snowRain-icon center" />
                          <div className="snowRain-nb center">
                            {
                              weather.forecast.forecastday[0].day
                                .daily_chance_of_rain
                            }
                          </div>
                          <div className="snowRain-pr center">%</div>
                        </div>
                        <div className="chance-snowRain-today center">
                          <WiSnow className="snowRain-icon center" />
                          <div className="snowRain-nb center">
                            {
                              weather.forecast.forecastday[0].day
                                .daily_chance_of_snow
                            }
                          </div>
                          <div className="snowRain-pr center">%</div>
                        </div>
                      </div>
                    ) : null}
                  </>
                )}
              </div>
            </Houreitems>
            <Houreitems
              bgBox={bgBox}
              Icone={null}
              weather={weather}
              Wind={Wind}
              WindCurrent={WindCurrent}
              lang={lang}
              title={air ? "O3" : langDisplay(lang).wind}
            >
              <div className="detail-container center column">
                {air ? (
                  <div className="center temp-max-today ">
                    {Math.round(weather.current.air_quality.o3)}
                  </div>
                ) : (
                  <>
                    <div className="km-wind-today center">
                      <GiWindsock className="dir-icon center" />
                      <div className="center">
                        {today
                          ? Math.round(
                              weather.forecast.forecastday[0].day.maxwind_mph *
                                1.6
                            )
                          : Math.round(weather.current.wind_mph * 1.6)}
                      </div>
                      <div className="center">{langDisplay(lang).km}</div>
                    </div>
                  </>
                )}
                <div className="wind-status center">
                  {air ? (
                    <div className="μg center">
                      {lang !== "ar" ? "μg/m3" : "مغ/م3"}
                    </div>
                  ) : today ? (
                    Wind(weather, lang).status
                  ) : (
                    WindCurrent(weather, lang).status
                  )}
                </div>
              </div>
            </Houreitems>
            <Houreitems
              bgBox={bgBox}
              Icone={AiOutlineEye}
              title={air ? "So2" : langDisplay(lang).visibility}
            >
              <div className="detail-container center column">
                <div className="km-visi-today center">
                  {air ? (
                    <div className="temp-max-today center ">
                      {Math.round(weather.current.air_quality.so2)}
                    </div>
                  ) : (
                    <>
                      <GrStatusGoodSmall
                        style={{
                          color: today
                            ? visibilityStatus(weather, lang).color
                            : visibilityStatusCurrent(weather, lang).color,
                        }}
                      />
                      <div className="center">
                        {today
                          ? Math.round(
                              weather.forecast.forecastday[0].day.avgvis_km
                            )
                          : Math.round(weather.current.vis_km)}
                      </div>
                      <div className="center">{langDisplay(lang).km} </div>
                    </>
                  )}
                </div>

                <div className="visi-status center">
                  {air ? (
                    <div className="μg center">
                      {lang !== "ar" ? "μg/m3" : "مغ/م3"}
                    </div>
                  ) : today ? (
                    visibilityStatus(weather, lang).status
                  ) : (
                    visibilityStatusCurrent(weather, lang).status
                  )}
                </div>
              </div>
            </Houreitems>
            <Houreitems
              bgBox={bgBox}
              Icone={WiHumidity}
              title={air ? "Pm2.5" : langDisplay(lang).humidity}
            >
              <div className="detail-container center column">
                <div className="km-visi-today center">
                  <div className="center">
                    {air ? (
                      <>{Math.round(weather.current.air_quality.pm2_5)}</>
                    ) : today ? (
                      Math.round(
                        weather.forecast.forecastday[0].day.avghumidity
                      )
                    ) : (
                      Math.round(weather.current.humidity)
                    )}
                  </div>
                  {air ? null : <div className="center humPr"> %</div>}
                </div>

                <div className="visi-status center">
                  {air ? (
                    <div className="μg center">
                      {lang !== "ar" ? "μg/m3" : "مغ/م3"}
                    </div>
                  ) : today ? (
                    humidityStatus(weather, lang).status
                  ) : (
                    humidityStatusCurrent(weather, lang).status
                  )}
                </div>
              </div>
            </Houreitems>
            <Houreitems
              bgBox={bgBox}
              Icone={GiSunglasses}
              title={air ? "Pm10" : langDisplay(lang).uvindex}
            >
              {air ? (
                <div className="detail-container center column">
                  <div className="km-visi-today center">
                    <div className="center">
                      {Math.round(weather.current.air_quality.pm10)}
                    </div>
                  </div>

                  <div className="visi-status center">
                    <div className="μg center">
                      {lang !== "ar" ? "μg/m3" : "مغ/م3"}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="pie-container">
                  <div className="pie" style={{ background: bgColor }}>
                    <svg className="svg">
                      <circle
                        fill="red"
                        r="30%"
                        cx="50%"
                        cy="50%"
                        style={pieStyle}
                      />
                    </svg>
                    <div
                      className="nb center"
                      style={{ background: bgColor, color: txtColor }}
                    >
                      {today
                        ? weather.forecast.forecastday[0].day.uv
                        : weather.current.uv}
                    </div>
                  </div>
                </div>
              )}
            </Houreitems>
            <Houreitems
              bgBox={bgBox}
              Icone={today ? WiSunrise : WiBarometer}
              title={
                air
                  ? langDisplay(lang).usindex
                  : today
                  ? langDisplay(lang).sun
                  : langDisplay(lang).pressure
              }
            >
              {air ? (
                <div className="detail-container center">
                  <div className="center container-jauge-us">
                    <div className="center contente-jauge-us">
                      <div className="center index-us">
                        {Object.values(weather.current.air_quality)[6]}
                      </div>
                      <div
                        className="center interior-jauge-us"
                        style={{
                          height: usIndex(weather, lang).height,
                          backgroundColor: usIndex(weather, lang).color,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="center index-us-status">
                    <div className="center">
                      {usIndex(weather, lang).status}
                    </div>
                  </div>
                </div>
              ) : today ? (
                <>
                  {" "}
                  <div className="sunrise center column">
                    <div className="icon-sun center">
                      <img src={sunrise} alt="sunrise-icone"></img>
                    </div>
                    <div className="hour-sun center">
                      {moment(
                        weather.forecast.forecastday[0].astro.sunrise,
                        "h:mm A"
                      ).format("HH:mm")}
                    </div>
                  </div>
                  <div className="sunset center column">
                    <div className="icon-sun center">
                      {" "}
                      <img src={sunset} alt="sunset-icone"></img>
                    </div>
                    <div className="hour-sun center">
                      {moment(
                        weather.forecast.forecastday[0].astro.sunset,
                        "h:mm A"
                      ).format("HH:mm")}
                    </div>
                  </div>
                </>
              ) : (
                <div className="pressure center evenly">
                  <div className="center">{weather.current.pressure_mb}</div>{" "}
                  <div>{langDisplay(lang).mbar}</div>
                </div>
              )}
            </Houreitems>
            <Houreitems
              bgBox={bgBox}
              Icone={today ? WiMoonrise : WiCloud}
              title={
                air
                  ? langDisplay(lang).ukindex
                  : today
                  ? langDisplay(lang).moon
                  : langDisplay(lang).cloud
              }
            >
              {air ? (
                <div className="detail-container center">
                  <div className="center container-jauge-us">
                    <div className="center contente-jauge-us">
                      <div className="center index-us">
                        {Object.values(weather.current.air_quality)[7]}
                      </div>
                      <div
                        className="center interior-jauge-us"
                        style={{
                          height: ukIndex(weather, lang).height,
                          backgroundColor: ukIndex(weather, lang).color,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="center index-us-status">
                    <div className="center">
                      {ukIndex(weather, lang).status}
                    </div>
                  </div>
                </div>
              ) : today ? (
                <>
                  <div className="sunrise center column">
                    <div className="icon-sun center">
                      <img src={moonrise} alt="sunrise-icone"></img>
                    </div>
                    <div className="hour-sun center">
                      {moment(
                        weather.forecast.forecastday[0].astro.moonrise,
                        "h:mm A"
                      ).format("HH:mm")}
                    </div>
                  </div>
                  <div className="sunset center column">
                    <div className="icon-sun center">
                      {" "}
                      <img src={moonset} alt="sunset-icone"></img>
                    </div>
                    <div className="hour-sun center">
                      {moment(
                        weather.forecast.forecastday[0].astro.moonset,
                        "h:mm A"
                      ).format("HH:mm")}
                    </div>
                  </div>
                </>
              ) : (
                <div className="pressure center">
                  <div className="center">{weather.current.cloud}</div>
                </div>
              )}
            </Houreitems>
            <FiArrowUp
              className="highlights-arrow-left center"
              style={{
                backgroundColor: bgBox === "#242526" ? "#313131" : bgBox,
                display: highlightsMove === -560 ? "none" : "flex",
              }}
              onClick={() => {
                dispatch({
                  type: SET_UI,
                  payload: {
                    highlightsMove: highlightsMoveDown(highlightsMove),
                  },
                });
              }}
            />
          </>
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
};

export default Highlights;

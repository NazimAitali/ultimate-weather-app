import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { RiMapPinLine } from "react-icons/ri";
import { WiCelsius, WiFahrenheit } from "react-icons/wi";
import { icon } from "../../../functions/current";
import errorImg from "../../../assets/error.png";
import { langDisplay } from "../../../functions/selectLang";
import LangDisplay from "../../content/langSelectDisplay";
const Display = () => {
  const { error, loading, weather, degree, lang } = useSelector(
    (state) => state.data
  );
  return (
    <div className="display center column">
      {loading ? (
        <div className="loader center">
          <div className="item1"></div>
          <div className="item2"></div>
          <div className="circle"></div>
        </div>
      ) : error ? (
        <div className="center column evenly error">
          <img src={errorImg} alt="error"></img>
          {error}
        </div>
      ) : weather ? (
        <>
          <div className="location center">
            <div className="city">
              <RiMapPinLine />
              {weather.location.name},
            </div>
            <div className="country">{weather.location.country}</div>
          </div>
          <div className="weather-icone center">
            <img className="center" src={icon(weather)} alt="icone"></img>
          </div>

          <div className="temperature center column">
            <div className="temp center">
              {" "}
              {degree === "C" ? (
                <>
                  {" "}
                  {weather.current.temp_c}
                  <WiCelsius className="celsus" />
                </>
              ) : (
                <>
                  {" "}
                  {weather.current.temp_f}
                  <WiFahrenheit className="celsus" />
                </>
              )}
            </div>
            <div className="feel center">
              {lang !== "ar" ? langDisplay(lang).feels : null}
              {degree === "C" ? (
                <>
                  {" "}
                  {weather.current.feelslike_c}
                  <WiCelsius className="celsus" />
                  {lang !== "ar" ? null : langDisplay(lang).feels}
                </>
              ) : (
               <>
                  {" "}
                  {weather.current.feelslike_f}
                  <WiFahrenheit className="celsus" />
               </>
              )}
            </div>
          </div>
          <div className="condition center">
            {weather.current.condition.text}
          </div>
          <div className="day center evenly">
            <LangDisplay />
            <div className="day-display center">
              {moment(weather.location.localtime).format("LL")}{" "}
              {moment(weather.location.localtime).format("LT")}
            </div>
          </div>
        </>
      ) : (
        <div>no data</div>
      )}
    </div>
  );
};

export default Display;

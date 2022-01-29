import React, { useEffect } from "react";
import SideBar from "./components/sideBar";
import Details from "./components/content";
import "./App.css";
import "./reset.css";
import "./mobile.css";
import axios from "axios";
import moment from "moment";
import "moment/locale/fr";
import "moment/locale/ar-kw";
import "moment/locale/en-gb";
import "moment/locale/es";
import "moment/locale/zh-cn";
import { langSelect } from "./functions/selectLang";
import { useDispatch, useSelector } from "react-redux";
import { SET_DATA } from "./redux/actions/data";
import { SET_UI } from "./redux/actions/ui";
import { currentConv, sunriseConv, sunsetConv } from "./functions/convert";
const App = () => {
  const {
    city,
    lang,
    selectPosition,
    LatLong,
    GeolocationCoordinates,
    weather,
    isDetect,
    confirme,
  } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  moment.locale(langSelect(lang));

  const getCoordinates = async () => {
    dispatch({
      type: SET_DATA,
      payload: {
        getCoordinatesLoading: true,
      },
    });
    try {
      await navigator.geolocation.getCurrentPosition(function (position) {
        console.log(`JSON ${JSON.stringify(position)}`);
        dispatch(
          {
            type: SET_DATA,
            payload: {
              GeolocationCoordinates: `${position.coords.latitude}, ${position.coords.longitude}`,
              city: "",
              LatLong: false,
              getCoordinatesLoading: false,
            },
          },
          NightAutoDetect()
        );
        dispatch({
          type: SET_UI,
          payload: {
            selectMap: "-100%",
          },
        });
      });
    } catch (err) {
      dispatch({
        type: SET_DATA,
        payload: {
          getCoordinatesError: err.message,
          getCoordinatesLoading: false,
        },
      });
    }
  };
  const getWeather = async () => {
    dispatch({
      type: SET_DATA,
      payload: { error: false, loading: true },
    });
    try {
      const key = "cb29ec2d3c3e49559e7153521202212";
      const EndPointWeather = "https://api.weatherapi.com/v1/forecast.json";
      const GetLocationFromIp = await axios.get(
        "https://extreme-ip-lookup.com/json/?key=UL4Xuw3fyCFbCPTzgW3S"
      );
      const Response = await axios.get(
        `${EndPointWeather}?key=${key}&q=${
          city === ""
            ? GeolocationCoordinates !== ""
              ? GeolocationCoordinates
              : LatLong
              ? `${selectPosition.lat}, ${selectPosition.lng}`
              : GetLocationFromIp.data.city
            : city
        }&days=3&lang=${lang}&aqi=yes&alerts=yes`
      );
      dispatch({
        type: SET_DATA,
        payload: {
          weather: Response.data,
          loading: false,
          isDetect: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
        },
      });
    } catch (err) {
      dispatch({
        type: SET_DATA,
        payload: {
          error: err.response.data.error.message,
          loading: false,
          weather: null,
        },
      });
    }
  };
  const NightAutoDetect = () => {
    return weather
      ? sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather) //nuit
        ? dispatch({
            type: SET_UI,
            payload: {
              darkMode: "-44%",
              bgColor: "#18191A",
              txtColor: "whitesmoke",
              bgBox: "#242526",
              iconDarkmode: "42%",
            },
          })
        : dispatch({
            type: SET_UI,
            payload: {
              darkMode: "7%",
              bgColor: "#F8F8F8",
              txtColor: "black",
              bgBox: "white",
              iconDarkmode: "4%",
            },
          })
      : null;
  };
  useEffect(() => {
    getWeather();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, GeolocationCoordinates, confirme]);

  useEffect(() => {
    NightAutoDetect();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDetect]);
  return (
    <div className="container center">
      <SideBar getWeather={getWeather} getCoordinates={getCoordinates} />
      <Details getWeather={getWeather} />
    </div>
  );
};

export default App;

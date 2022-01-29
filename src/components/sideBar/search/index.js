import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";

import { SiOpenstreetmap } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { SET_UI } from "../../../redux/actions/ui";
import { MdGpsOff, MdGpsNotFixed, MdGpsFixed } from "react-icons/md";
import { SET_DATA } from "../../../redux/actions/data";
import { FaSearch } from "react-icons/fa";
import { langDisplay } from "../../../functions/selectLang";
const Search = ({ getWeather, getCoordinates }) => {
  const dispatch = useDispatch();
  const { selectMap } = useSelector((state) => state.ui);
  const { GeolocationCoordinates, getCoordinatesLoading, city, lang } =
    useSelector((state) => state.data);

  return (
    <div className="bar center evenly">
      <div className="search center">
        <FaSearch
          className="icon-input"
          style={{ left: city === "" ? "-20%" : "8%" }}
          onClick={() => {
            dispatch(
              {
                type: SET_DATA,
                payload: {
                  GeolocationCoordinates: "",
                  LatLong: false,
                },
              },
              dispatch({
                type: SET_UI,
                payload: {
                  selectMap: "-100%",
                  forcastLeft1: "0%",
                  forcastbottom1: "-100%",
                  forcastLeft2: "0%",
                  forcastbottom2: "-100%",
                  forcastLeft0: "0%",
                  forcastbottom0: "-100%",
                },
              })
            );
            getWeather();
          }}
        />
        <input
          value={city === "" ? "" : city}
          placeholder={langDisplay(lang).placeHolder}
          className="search-input"
          onChange={(e) => {
            dispatch({
              type: SET_DATA,
              payload: {
                city: e.target.value,
              },
            });
          }}
        />
        <div
          className="gps icon-input center"
          onClick={() => {
            dispatch(
              {
                type: SET_DATA,
                payload: {
                  city: "",
                  LatLong: false,
                },
              },
              dispatch({
                type: SET_UI,
                payload: {
                  selectMap: "-100%",
                  forcastLeft1: "0%",
                  forcastbottom1: "-100%",
                  forcastLeft2: "0%",
                  forcastbottom2: "-100%",
                  forcastLeft0: "0%",
                  forcastbottom0: "-100%",
                },
              }),
              getCoordinates()
            );
          }}
        >
          {GeolocationCoordinates === "" && !getCoordinatesLoading ? (
            <MdGpsOff />
          ) : GeolocationCoordinates === "" && getCoordinatesLoading ? (
            <MdGpsNotFixed
              className="disable"
              style={{ color: getCoordinatesLoading ? "orange" : null }}
            />
          ) : (
            <MdGpsFixed className="enable " />
          )}
        </div>
      </div>
      <div className="center">
        {selectMap === "-100%" ? (
          <SiOpenstreetmap
            className="open-map"
            onClick={() => {
              dispatch({
                type: SET_UI,
                payload: { selectMap: "0px" },
              });
            }}
          />
        ) : (
          <RiCloseLine
            className="close-map"
            onClick={() => {
              dispatch({
                type: SET_UI,
                payload: { selectMap: "-100%" },
              });
            }}
          />
        )}
      </div>
      <div className="menu center">
        <CgMenuGridR
          className="menu-dot"
          onClick={() => {
            dispatch({
              type: SET_UI,
              payload: {
                top: "0%",
                left: "0%",
                menuLangDispaly: false,
                forcastLeft1: "0%",
                forcastbottom1: "-100%",
                forcastLeft2: "0%",
                forcastbottom2: "-100%",
                forcastLeft0: "0%",
                forcastbottom0: "-100%",
              },
            });
          }}
        />
      </div>
    </div>
  );
};

export default Search;

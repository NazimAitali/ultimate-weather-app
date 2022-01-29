import React from "react";
import "../langSelect/style.css";
import { IoLanguageOutline } from "react-icons/io5";
import En from "../../../assets/flags/united-kingdom.png";
import Dz from "../../../assets/flags/algeria.png";
import Ch from "../../../assets/flags/china.png";
import Fr from "../../../assets/flags/france.png";
import Sp from "../../../assets/flags/spain.png";
import { useDispatch, useSelector } from "react-redux";
import { SET_UI } from "../../../redux/actions/ui";
import { SET_DATA } from "../../../redux/actions/data";
import { RiCloseLine } from "react-icons/ri";
import { langDisplay } from "../../../functions/selectLang";
const LangSelect = () => {
  const { txtColor, bgBox, menuLang } = useSelector((state) => state.ui);
  const { lang } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  return (
    <div className="top-bar-lang-centent center">
      <div className="lang-selector-container center">
        <div className="lang-selector-content center">
          <IoLanguageOutline
            className="lang-icon"
            style={{ color: txtColor }}
            onClick={() => {
              dispatch({
                type: SET_UI,
                payload: { menuLang: true },
              });
            }}
          />
        </div>
        <div
          className="lang-selector-layout center column evenly"
          style={{
            background: bgBox,
            top: !menuLang ? "-300px" : "1px",
          }}
        >
          <div
            className="lang-close center evenly"
            onClick={() => {
              dispatch({
                type: SET_UI,
                payload: { menuLang: false },
              });
            }}
          >
            <div className="flag center">
              <RiCloseLine />
            </div>
            <div className="lang center">{langDisplay(lang).close}</div>
          </div>
          <div className="lang-select center evenly">
            <div className="flag center">
              <img src={En} alt="english"></img>
            </div>
            <div
              className="lang center"
              onClick={() => {
                dispatch(
                  {
                    type: SET_DATA,
                    payload: { lang: "en" },
                  },
                  dispatch({
                    type: SET_UI,
                    payload: {
                      menuLang: menuLang ? false : true,
                      forcastLeft1: "0%",
                      forcastbottom1: "-100%",
                      forcastLeft2: "0%",
                      forcastbottom2: "-100%",
                      forcastLeft0: "0%",
                      forcastbottom0: "-100%",
                      byHoureHeight:"0px"
                    },
                  })
                );
              }}
            >
              {langDisplay(lang).english}
            </div>
          </div>
          <div className="lang-select center evenly">
            <div className="flag center">
              <img src={Dz} alt="Arabic"></img>
            </div>
            <div
              className="lang center"
              onClick={() => {
                dispatch(
                  {
                    type: SET_DATA,
                    payload: { lang: "ar" },
                  },
                  dispatch({
                    type: SET_UI,
                    payload: {
                      menuLang: menuLang ? false : true,
                      forcastLeft1: "0%",
                      forcastbottom1: "-100%",
                      forcastLeft2: "0%",
                      forcastbottom2: "-100%",
                      forcastLeft0: "0%",
                      forcastbottom0: "-100%",
                      byHoureHeight:"0px"
                    },
                  })
                );
              }}
            >
              {langDisplay(lang).arabic}
            </div>
          </div>
          <div className="lang-select center evenly">
            <div className="flag center">
              <img src={Ch} alt="Chines"></img>
            </div>
            <div
              className="lang center"
              onClick={() => {
                dispatch(
                  {
                    type: SET_DATA,
                    payload: { lang: "zh" },
                  },
                  dispatch({
                    type: SET_UI,
                    payload: {
                      menuLang: menuLang ? false : true,
                      forcastLeft1: "0%",
                      forcastbottom1: "-100%",
                      forcastLeft2: "0%",
                      forcastbottom2: "-100%",
                      forcastLeft0: "0%",
                      forcastbottom0: "-100%",
                      byHoureHeight:"0px"
                    },
                  })
                );
              }}
            >
              {langDisplay(lang).chinese}
            </div>
          </div>
          <div className="lang-select center evenly">
            <div className="flag center">
              <img src={Fr} alt="French"></img>
            </div>
            <div
              className="lang center"
              onClick={() => {
                dispatch(
                  {
                    type: SET_DATA,
                    payload: { lang: "fr" },
                  },
                  dispatch({
                    type: SET_UI,
                    payload: {
                      menuLang: menuLang ? false : true,
                      forcastLeft1: "0%",
                      forcastbottom1: "-100%",
                      forcastLeft2: "0%",
                      forcastbottom2: "-100%",
                      forcastLeft0: "0%",
                      forcastbottom0: "-100%",
                      byHoureHeight:"0px"
                    },
                  })
                );
              }}
            >
              {langDisplay(lang).french}
            </div>
          </div>
          <div className="lang-select center evenly">
            <div className="flag center">
              <img src={Sp} alt="Spanish"></img>
            </div>
            <div
              className="lang center"
              onClick={() => {
                dispatch(
                  {
                    type: SET_DATA,
                    payload: { lang: "es" },
                  },
                  dispatch({
                    type: SET_UI,
                    payload: {
                      menuLang: menuLang ? false : true,
                      forcastLeft1: "0%",
                      forcastbottom1: "-100%",
                      forcastLeft2: "0%",
                      forcastbottom2: "-100%",
                      forcastLeft0: "0%",
                      forcastbottom0: "-100%",
                      byHoureHeight:"0px"
                    },
                  })
                );
              }}
            >
              {langDisplay(lang).spanish}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LangSelect;

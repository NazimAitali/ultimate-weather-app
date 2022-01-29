import React from "react";
import "../langSelectDisplay/style.css";
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
const LangDisplay = () => {
  const { txtColor, bgBox, menuLangDispaly } = useSelector((state) => state.ui);
  const { lang } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  return (
    <div className="top-bar-lang-centent-dispaly center">
      <div className="lang-selector-container-display center">
        <div className="lang-selector-content-display center">
          <IoLanguageOutline
            className="lang-icon-display"
            style={{ color: txtColor }}
            onClick={() => {
              dispatch({
                type: SET_UI,
                payload: { menuLangDispaly: true },
              });
            }}
          />
        </div>
        <div
          className="lang-selector-layout-display center column evenly"
          style={{
            background: bgBox,
            left: !menuLangDispaly ? "-70vh" : "1vh",
            bottom: "0%",
          }}
        >
          <div
            className="lang-close-display center evenly"
            onClick={() => {
              dispatch({
                type: SET_UI,
                payload: { menuLangDispaly: false },
              });
            }}
          >
            <div className="flag-display center">
              <RiCloseLine />
            </div>
            <div className="lang-display center">
              {" "}
              {langDisplay(lang).close}
            </div>
          </div>
          <div className="lang-select-display center evenly">
            <div className="flag center">
              <img src={En} alt="english"></img>
            </div>
            <div
              className="lang-display center"
              onClick={() => {
                dispatch(
                  {
                    type: SET_DATA,
                    payload: { lang: "en" },
                  },
                  dispatch({
                    type: SET_UI,
                    payload: {
                      menuLangDispaly: menuLangDispaly ? false : true,
                    },
                  })
                );
              }}
            >
              {langDisplay(lang).english}
            </div>
          </div>
          <div className="lang-select-display center evenly">
            <div className="flag-display center">
              <img src={Dz} alt="Arabic"></img>
            </div>
            <div
              className="lang-display center"
              onClick={() => {
                dispatch(
                  {
                    type: SET_DATA,
                    payload: { lang: "ar" },
                  },
                  dispatch({
                    type: SET_UI,
                    payload: {
                      menuLangDispaly: menuLangDispaly ? false : true,
                    },
                  })
                );
              }}
            >
              {langDisplay(lang).arabic}
            </div>
          </div>
          <div className="lang-select-display center evenly">
            <div className="flag-display center">
              <img src={Ch} alt="Chines"></img>
            </div>
            <div
              className="lang-display center"
              onClick={() => {
                dispatch(
                  {
                    type: SET_DATA,
                    payload: { lang: "zh" },
                  },
                  dispatch({
                    type: SET_UI,
                    payload: {
                      menuLangDispaly: menuLangDispaly ? false : true,
                    },
                  })
                );
              }}
            >
              {langDisplay(lang).chinese}
            </div>
          </div>
          <div className="lang-select-display center evenly">
            <div className="flag-display center">
              <img src={Fr} alt="French"></img>
            </div>
            <div
              className="lang-display center"
              onClick={() => {
                dispatch(
                  {
                    type: SET_DATA,
                    payload: { lang: "fr" },
                  },
                  dispatch({
                    type: SET_UI,
                    payload: {
                      menuLangDispaly: menuLangDispaly ? false : true,
                    },
                  })
                );
              }}
            >
              {langDisplay(lang).french}
            </div>
          </div>
          <div className="lang-select-display center evenly">
            <div className="flag-display center">
              <img src={Sp} alt="Spanish"></img>
            </div>
            <div
              className="lang-display center"
              onClick={() => {
                dispatch(
                  {
                    type: SET_DATA,
                    payload: { lang: "es" },
                  },
                  dispatch({
                    type: SET_UI,
                    payload: {
                      menuLangDispaly: menuLangDispaly ? false : true,
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

export default LangDisplay;

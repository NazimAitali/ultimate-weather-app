import { currentConv, sunriseConv, sunsetConv } from "./convert";

export const NightAutoDetect = async (weather, SET_UI, dispatch) => {
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

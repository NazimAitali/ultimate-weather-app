import { SET_UI } from "../actions/ui";
const initialState = {
  top: "0%",
  left: "-100%",
  houreMove: 0,
  highlightsMove: 0,
  today: true,
  air: false,
  show: "flex",
  darkMode: "7%",
  iconDarkmode: "4%",
  bgColor: "#F8F8F8",
  txtColor: "black",
  bgBox: "white",
  selectMap: "-100%",
  highlightSelect: 0,
  topBarSelect: 0,
  menuLang: false,
  menuLangDispaly: false,
  forcastLeft0: "0%",
  forcastbottom0: "-100%",
  forcastLeft1: "0%",
  forcastbottom1: "-100%",
  forcastLeft2: "0%",
  forcastbottom2: "-100%",
  byHoureHeight:"0px",
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UI:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default uiReducer;

import { SET_DATA } from "../actions/data";
const initialState = {
  weather: null,
  selectPosition: {
    lat: 51.505,
    lng: -0.09,
  },
  GeolocationCoordinates: "",
  getCoordinatesLoading: false,
  getCoordinatesError: "",
  LatLong: false,
  local: "",
  city: "",
  lang: "en",
  error: false,
  loading: false,
  degree: "C",
  isDetect: "",
  confirme: "",
  byHoureDay:0,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default dataReducer;

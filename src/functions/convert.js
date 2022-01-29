import moment from "moment";

export const currentConv = (weather) => {
  
  return moment(moment(weather.location.localtime).format("LT"), "h:mm A").format(
    "HH:mm"
  );
};
export const currentConvHour = (hour) => {  
  return moment(moment(hour.time).format("LT"), "h:mm A").format(
    "HH:mm"
  );
};
export const sunriseConv = (weather) => {
  return moment(weather.forecast.forecastday[0].astro.sunrise, "h:mm A").format("HH:mm");
};
export const sunsetConv = (weather) => {
  
  return moment(weather.forecast.forecastday[0].astro.sunset, "h:mm A").format("HH:mm");
};

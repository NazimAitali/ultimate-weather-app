import {
  WiWindBeaufort0,
  WiWindBeaufort1,
  WiWindBeaufort2,
  WiWindBeaufort3,
  WiWindBeaufort4,
  WiWindBeaufort5,
  WiWindBeaufort6,
  WiWindBeaufort7,
  WiWindBeaufort8,
  WiWindBeaufort9,
  WiWindBeaufort10,
  WiWindBeaufort11,
  WiWindBeaufort12,
} from "react-icons/wi";
import { langDisplay } from "../functions/selectLang";

export const usIndex = (weather, lang) => {
  switch (Object.values(weather.current.air_quality)[6]) {
    case 1:
      const Good = {
        status: langDisplay(lang).usStatus.Good,
        color: "#7BD2B5",
        height: "16.666%",
      };
      return Good;
    case 2:
      const Moderate = {
        status: langDisplay(lang).usStatus.Moderate,
        color: "#83D17A",
        height: "33.332%",
      };
      return Moderate;
    case 3:
      const UnhealthyFor = {
        status: langDisplay(lang).usStatus.Unhealthyforsensitivegroup,
        color: "#FFF954",
        height: "49.998%",
      };
      return UnhealthyFor;
    case 4:
      const Unhealthy = {
        status: langDisplay(lang).usStatus.Unhealthy,
        color: "#FFCA4C",
        height: "66.664%",
      };
      return Unhealthy;
    case 5:
      const VeryUnhealthy = {
        status: langDisplay(lang).usStatus.VeryUnhealthy,
        color: "#F49454",
        height: "83.33%",
      };
      return VeryUnhealthy;
    case 6:
      const Hazardous = {
        status: langDisplay(lang).usStatus.Hazardous,
        color: "#E4636A",
        height: "100%",
      };
      return Hazardous;

    default:
      break;
  }
};
export const ukIndex = (weather, lang) => {
  switch (Object.values(weather.current.air_quality)[7]) {
    case 1:
      const Low = {
        status: langDisplay(lang).ukStatus.Low,
        color: "#83D17A",
        height: "10%",
      };
      return Low;
    case 2:
      const Low2 = {
        status: langDisplay(lang).ukStatus.Low,
        color: "#83D17A",
        height: "20%",
      };
      return Low2;
    case 3:
      const Low3 = {
        status: langDisplay(lang).ukStatus.Low,
        color: "#83D17A",
        height: "30%",
      };
      return Low3;
    case 4:
      const Moderate = {
        status: langDisplay(lang).ukStatus.Moderate,
        color: "#FFCA4C",
        height: "40%",
      };
      return Moderate;
    case 5:
      const Moderate2 = {
        status: langDisplay(lang).ukStatus.Moderate,
        color: "#FFCA4C",
        height: "50%",
      };
      return Moderate2;
    case 6:
      const Moderate3 = {
        status: langDisplay(lang).ukStatus.Moderate,
        color: "#FFCA4C",
        height: "60%",
      };
      return Moderate3;
    case 7:
      const High = {
        status: langDisplay(lang).ukStatus.High,
        color: "#E4636A",
        height: "70%",
      };
      return High;
    case 8:
      const High2 = {
        status: langDisplay(lang).ukStatus.High,
        color: "#E4636A",
        height: "80%",
      };
      return High2;
    case 9:
      const High3 = {
        status: langDisplay(lang).ukStatus.High,
        color: "#E4636A",
        height: "90%",
      };
      return High3;
    case 10:
      const VeryHigh = {
        status: langDisplay(lang).ukStatus.VeryHigh,
        color: "#8F3F97",
        height: "100%",
      };
      return VeryHigh;
    default:
      break;
  }
};
export const Wind = (weather, lang) => {
  const windSpeed = Math.round(
    weather.forecast.forecastday[0].day.maxwind_mph * 1.6
  );
  switch (true) {
    case windSpeed < 1:
      const Calme = {
        status: langDisplay(lang).windStat.quiet,
        icone: <WiWindBeaufort0 style={{ color: "#157EB0" }} />,
      };
      return Calme;

    case windSpeed >= 1 && windSpeed <= 5:
      const Trèslégèrebrise = {
        status: langDisplay(lang).windStat.verylightbreeze,
        icone: <WiWindBeaufort1 style={{ color: "#157EB0" }} />,
      };
      return Trèslégèrebrise;
    case windSpeed >= 6 && windSpeed <= 11:
      const Légèrebrise = {
        status: langDisplay(lang).windStat.lightbreeze,
        icone: <WiWindBeaufort2 style={{ color: "#157EB0" }} />,
      };
      return Légèrebrise;
    case windSpeed >= 12 && windSpeed <= 19:
      const Petitebrise = {
        status: langDisplay(lang).windStat.littlebreeze,
        icone: <WiWindBeaufort3 style={{ color: "#66B033" }} />,
      };
      return Petitebrise;
    case windSpeed >= 20 && windSpeed <= 28:
      const Joliebrise = {
        status: langDisplay(lang).windStat.moderatebreeze,
        icone: <WiWindBeaufort4 style={{ color: "#66B033" }} />,
      };
      return Joliebrise;
    case windSpeed >= 29 && windSpeed <= 38:
      const Bonnebrise = {
        status: langDisplay(lang).windStat.goodbreeze,
        icone: <WiWindBeaufort5 style={{ color: "#D1EA2C" }} />,
      };
      return Bonnebrise;
    case windSpeed >= 39 && windSpeed <= 49:
      const Ventfrais = {
        status: langDisplay(lang).windStat.freshwind,
        icone: <WiWindBeaufort6 style={{ color: "#CFEE18" }} />,
      };
      return Ventfrais;
    case windSpeed >= 50 && windSpeed <= 61:
      const Grandfrais = {
        status: langDisplay(lang).windStat.gale,
        icone: <WiWindBeaufort7 style={{ color: "#FDFD37" }} />,
      };
      return Grandfrais;
    case windSpeed >= 62 && windSpeed <= 74:
      const Coupdevent = {
        status: langDisplay(lang).windStat.gustofwind,
        icone: <WiWindBeaufort8 style={{ color: "#FBB600" }} />,
      };
      return Coupdevent;
    case windSpeed >= 75 && windSpeed <= 88:
      const Fortcoupdevent = {
        status: langDisplay(lang).windStat.stronggale,
        icone: <WiWindBeaufort9 style={{ color: "#FB9902" }} />,
      };
      return Fortcoupdevent;
    case windSpeed >= 89 && windSpeed <= 102:
      const Tempête = {
        status: langDisplay(lang).windStat.storm,
        icone: <WiWindBeaufort10 style={{ color: "#FD5308" }} />,
      };
      return Tempête;
    case windSpeed >= 103 && windSpeed <= 117:
      const Violentetempête = {
        status: langDisplay(lang).windStat.violentstorm,
        icone: <WiWindBeaufort11 style={{ color: "#FE2712" }} />,
      };
      return Violentetempête;
    case windSpeed > 117:
      const Ouragan = {
        status: langDisplay(lang).windStat.hurricane,
        icone: <WiWindBeaufort12 style={{ color: "#AE1549" }} />,
      };
      return Ouragan;

    default:
      break;
  }
};
export const WindCurrent = (weather, lang) => {
  const windSpeed = Math.round(weather.current.wind_mph * 1.6);
  switch (true) {
    case windSpeed < 1:
      const Calme = {
        status: langDisplay(lang).windStat.quiet,
        icone: <WiWindBeaufort0 style={{ color: "#157EB0" }} />,
      };
      return Calme;
    case windSpeed >= 1 && windSpeed <= 5:
      const Trèslégèrebrise = {
        status: langDisplay(lang).windStat.verylightbreeze,
        icone: <WiWindBeaufort1 style={{ color: "#157EB0" }} />,
      };
      return Trèslégèrebrise;
    case windSpeed >= 6 && windSpeed <= 11:
      const Légèrebrise = {
        status: langDisplay(lang).windStat.lightbreeze,
        icone: <WiWindBeaufort2 style={{ color: "#157EB0" }} />,
      };
      return Légèrebrise;
    case windSpeed >= 12 && windSpeed <= 19:
      const Petitebrise = {
        status: langDisplay(lang).windStat.littlebreeze,
        icone: <WiWindBeaufort3 style={{ color: "#66B033" }} />,
      };
      return Petitebrise;
    case windSpeed >= 20 && windSpeed <= 28:
      const Joliebrise = {
        status: langDisplay(lang).windStat.moderatebreeze,
        icone: <WiWindBeaufort4 style={{ color: "#66B033" }} />,
      };
      return Joliebrise;
    case windSpeed >= 29 && windSpeed <= 38:
      const Bonnebrise = {
        status: langDisplay(lang).windStat.goodbreeze,
        icone: <WiWindBeaufort5 style={{ color: "#D1EA2C" }} />,
      };
      return Bonnebrise;
    case windSpeed >= 39 && windSpeed <= 49:
      const Ventfrais = {
        status: langDisplay(lang).windStat.freshwind,
        icone: <WiWindBeaufort6 style={{ color: "#CFEE18" }} />,
      };
      return Ventfrais;
    case windSpeed >= 50 && windSpeed <= 61:
      const Grandfrais = {
        status: langDisplay(lang).windStat.gale,
        icone: <WiWindBeaufort7 style={{ color: "#FDFD37" }} />,
      };
      return Grandfrais;
    case windSpeed >= 62 && windSpeed <= 74:
      const Coupdevent = {
        status: langDisplay(lang).windStat.gustofwind,
        icone: <WiWindBeaufort8 style={{ color: "#FBB600" }} />,
      };
      return Coupdevent;
    case windSpeed >= 75 && windSpeed <= 88:
      const Fortcoupdevent = {
        status: langDisplay(lang).windStat.stronggale,
        icone: <WiWindBeaufort9 style={{ color: "#FB9902" }} />,
      };
      return Fortcoupdevent;
    case windSpeed >= 89 && windSpeed <= 102:
      const Tempête = {
        status: langDisplay(lang).windStat.storm,
        icone: <WiWindBeaufort10 style={{ color: "#FD5308" }} />,
      };
      return Tempête;
    case windSpeed >= 103 && windSpeed <= 117:
      const Violentetempête = {
        status: langDisplay(lang).windStat.violentstorm,
        icone: <WiWindBeaufort11 style={{ color: "#FE2712" }} />,
      };
      return Violentetempête;
    case windSpeed > 117:
      const Ouragan = {
        status: langDisplay(lang).windStat.hurricane,
        icone: <WiWindBeaufort12 style={{ color: "#AE1549" }} />,
      };
      return Ouragan;

    default:
      break;
  }
};

export const visibilityStatus = (weather, lang) => {
  const visibility =
    Math.round(weather.forecast.forecastday[0].day.avgvis_km) / 1.85;
  switch (true) {
    case visibility < 0.5:
      const TrèsMauvaise = {
        status: langDisplay(lang).visiStat.veryBad,
        color: "#FF0000",
      };
      return TrèsMauvaise;
    case visibility >= 0.5 && visibility <= 2:
      const Mauvaise = {
        status: langDisplay(lang).visiStat.bad,
        color: "#FF7E00",
      };
      return Mauvaise;
    case visibility > 2 && visibility <= 5:
      const Moyenne = {
        status: langDisplay(lang).visiStat.average,
        color: "#FFFF00",
      };
      return Moyenne;
    case visibility > 5:
      const Bonne = {
        status: langDisplay(lang).visiStat.good,
        color: "#00E400",
      };
      return Bonne;

    default:
      break;
  }
};
export const visibilityStatusCurrent = (weather, lang) => {
  const visibility = Math.round(weather.current.vis_km) / 1.85;
  switch (true) {
    case visibility < 0.5:
      const TrèsMauvaise = {
        status: langDisplay(lang).visiStat.veryBad,
        color: "#FF0000",
      };
      return TrèsMauvaise;
    case visibility >= 0.5 && visibility <= 2:
      const Mauvaise = {
        status: langDisplay(lang).visiStat.bad,
        color: "#FF7E00",
      };
      return Mauvaise;
    case visibility > 2 && visibility <= 5:
      const Moyenne = {
        status: langDisplay(lang).visiStat.average,
        color: "#FFFF00",
      };
      return Moyenne;
    case visibility > 5:
      const Bonne = {
        status: langDisplay(lang).visiStat.good,
        color: "#00E400",
      };
      return Bonne;

    default:
      break;
  }
};
export const humidityStatus = (weather, lang) => {
  const humidity = weather.forecast.forecastday[0].day.avghumidity;
  switch (true) {
    case humidity >= 80:
      const TrésForte = {
        status: langDisplay(lang).humStat.veryhighHum,
        color: "#FF0000",
      };
      return TrésForte;
    case humidity >= 60 && humidity < 80:
      const Forte = {
        status: langDisplay(lang).humStat.highHum,
        color: "#FF7E00",
      };
      return Forte;
    case humidity > 30 && humidity < 60:
      const Moyenne = {
        status: langDisplay(lang).humStat.mediumHum,
        color: "#FFFF00",
      };
      return Moyenne;
    case humidity <= 30:
      const Faible = {
        status: langDisplay(lang).humStat.lowHum,
        color: "#00E400",
      };
      return Faible;

    default:
      break;
  }
};
export const humidityStatusCurrent = (weather, lang) => {
  const humidity = weather.current.humidity;
  switch (true) {
    case humidity >= 80:
      const TrésForte = {
        status: langDisplay(lang).humStat.veryhighHum,
        color: "#FF0000",
      };
      return TrésForte;
    case humidity >= 60 && humidity < 80:
      const Forte = {
        status: langDisplay(lang).humStat.highHum,
        color: "#FF7E00",
      };
      return Forte;
    case humidity > 30 && humidity < 60:
      const Moyenne = {
        status: langDisplay(lang).humStat.mediumHum,
        color: "#FFFF00",
      };
      return Moyenne;
    case humidity <= 30:
      const Faible = {
        status: langDisplay(lang).humStat.lowHum,
        color: "#00E400",
      };
      return Faible;

    default:
      break;
  }
};

export const indexDetail = (weather) => {
  switch (Object.values(weather.current.air_quality)[6]) {
    case 1:
      return "Air quality is satisfactory, and air pollution poses little or no risk.";
    case 2:
      return "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.";
    case 3:
      return "Members of sensitive groups may experience health effects. The general public is less likely to be affected.";
    case 4:
      return "Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.";
    case 5:
      return "Health alert: The risk of health effects is increased for everyone.";
    case 6:
      return "Health warning of emergency conditions: everyone is more likely to be affected.";

    default:
      break;
  }
};

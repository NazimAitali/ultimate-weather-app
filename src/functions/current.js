import {
  currentConv,
  sunriseConv,
  sunsetConv,
  currentConvHour,
} from "./convert";
import sunny from "../assets/icons/113.png";
import moon from "../assets/icons/113N.png";
import PartlyCloudyDay from "../assets/icons/116.png";
import PartlyCloudy from "../assets/icons/116N.png";
import ModerateOrHeavyRainWithThunder from "../assets/icons/389.png";
import PatchyRainPossibleDay from "../assets/icons/176&293&299&353&305.png";
import PatchyRainPossible from "../assets/icons/176&293&299&353&305N.png";
import HeavySnow from "../assets/icons/338.png";
import LightSleet from "../assets/icons/317.png";
import PatchyLightSnowDay from "../assets/icons/179&323&329&368.png";
import PatchyLightSnow from "../assets/icons/179&323&329&368N.png";
import CloudyOvercast from "../assets/icons/119&122.png";
import PatchySleetPossibleDay from "../assets/icons/182&362.png";
import PatchySleetPossible from "../assets/icons/182&362N.png";
import LightRain from "../assets/icons/296&302.png";
import PatchyLightRainDay from "../assets/icons/200&386.png";
import PatchyLightRain from "../assets/icons/200&386N.png";
import PatchyLightSnowWithThunderDay from "../assets/icons/392.png";
import PatchyLightSnowWithThunder from "../assets/icons/392N.png";
import PatchyHeavySnowDay from "../assets/icons/335&371.png";
import PatchyHeavySnow from "../assets/icons/335&371N.png";
import LightSnow from "../assets/icons/326&332.png";
import HeavyRain from "../assets/icons/308.png";
import Fog from "../assets/icons/248.png";
import Mist from "../assets/icons/143.png";
import FreezingFog from "../assets/icons/260.png";
import Blizzard from "../assets/icons/230.png";
import BlowingSnow from "../assets/icons/227.png";
import PatchyFreezingDrizzlePossible from "../assets/icons/185&281.png";
import LightFreezingRain from "../assets/icons/311&314.png";
import PatchyLightDrizzle from "../assets/icons/263&266.png";
import TorrentialRainShowerDay from "../assets/icons/359.png";
import TorrentialRainShower from "../assets/icons/359N.png";
import ModerateOrHeavySleetShowers from "../assets/icons/365N.png";
import ModerateOrHeavySleetShowersDay from "../assets/icons/365.png";
import ModerateOrHeavySnowWithThunder from "../assets/icons/395.png";
import HeavyFreezingDrizzle from "../assets/icons/284.png";
import ModerateOrHeavySleet from "../assets/icons/320.png";
import IcePellets from "../assets/icons/350.png";
import LightShowersOfIcePelletsDay from "../assets/icons/374.png";
import LightShowersOfIcePellets from "../assets/icons/374N.png";
import ModerateOrHeavyShowersOfIcePellets from "../assets/icons/377N.png";
import ModerateOrHeavyShowersOfIcePelletsDay from "../assets/icons/377.png";
import ModerateOrHeavyRainShowerDay from "../assets/icons/356.png";
import ModerateOrHeavyRainShower from "../assets/icons/356N.png";

export const icon = (weather) => {
  switch (weather.current.condition.code) {
    case 1000:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? moon
        : sunny;
    case 1003:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? PartlyCloudy
        : PartlyCloudyDay;
    case 1006:
      return CloudyOvercast;
    case 1009:
      return CloudyOvercast;
    case 1030:
      return Mist;
    case 1063:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? PatchyRainPossible
        : PatchyRainPossibleDay;
    case 1066:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? PatchyLightSnow
        : PatchyLightSnowDay;
    case 1069:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? PatchySleetPossible
        : PatchySleetPossibleDay;
    case 1072:
      return PatchyFreezingDrizzlePossible;
    case 1087:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? PatchyLightRain
        : PatchyLightRainDay;
    case 1114:
      return BlowingSnow;
    case 1117:
      return Blizzard;
    case 1135:
      return Fog;
    case 1147:
      return FreezingFog;
    case 1150:
      return PatchyLightDrizzle;
    case 1153:
      return PatchyLightDrizzle;
    case 1168:
      return PatchyFreezingDrizzlePossible;
    case 1171:
      return HeavyFreezingDrizzle;
    case 1180:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? PatchyRainPossible
        : PatchyRainPossibleDay;
    case 1183:
      return LightRain;
    case 1186:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? PatchyRainPossible
        : PatchyRainPossibleDay;
    case 1189:
      return LightRain;
    case 1192:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? PatchyRainPossible
        : PatchyRainPossibleDay;
    case 1195:
      return HeavyRain;
    case 1198:
      return LightFreezingRain;
    case 1201:
      return LightFreezingRain;
    case 1204:
      return LightSleet;
    case 1207:
      return ModerateOrHeavySleet;
    case 1210:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? PatchyLightSnow
        : PatchyLightSnowDay;
    case 1213:
      return LightSnow;
    case 1216:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? PatchyLightSnow
        : PatchyLightSnowDay;
    case 1219:
      return LightSnow;
    case 1222:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? PatchyHeavySnow
        : PatchyHeavySnowDay;
    case 1225:
      return HeavySnow;
    case 1237:
      return IcePellets;
    case 1240:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? PatchyRainPossible
        : PatchyRainPossibleDay;
    case 1243:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? ModerateOrHeavyRainShower
        : ModerateOrHeavyRainShowerDay;
    case 1246:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? TorrentialRainShower
        : TorrentialRainShowerDay;
    case 1249:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? PatchySleetPossible
        : PatchySleetPossibleDay;
    case 1252:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? ModerateOrHeavySleetShowers
        : ModerateOrHeavySleetShowersDay;
    case 1255:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? PatchyLightSnow
        : PatchyLightSnowDay;
    case 1258:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? PatchyHeavySnow
        : PatchyHeavySnowDay;
    case 1261:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? LightShowersOfIcePellets
        : LightShowersOfIcePelletsDay;
    case 1264:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? ModerateOrHeavyShowersOfIcePellets
        : ModerateOrHeavyShowersOfIcePelletsDay;
    case 1273:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? PatchyLightRain
        : PatchyLightRainDay;
    case 1276:
      return ModerateOrHeavyRainWithThunder;
    case 1279:
      return sunsetConv(weather) <= currentConv(weather) ||
        sunriseConv(weather) > currentConv(weather)
        ? PatchyLightSnowWithThunder
        : PatchyLightSnowWithThunderDay;
    case 1282:
      return ModerateOrHeavySnowWithThunder;
    default:
      break;
  }
};
export const iconHour = (hour, weather) => {
  switch (hour.condition.code) {
    case 1000:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? moon
        : sunny;
    case 1003:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? PartlyCloudy
        : PartlyCloudyDay;
    case 1006:
      return CloudyOvercast;
    case 1009:
      return CloudyOvercast;
    case 1030:
      return Mist;
    case 1063:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? PatchyRainPossible
        : PatchyRainPossibleDay;
    case 1066:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? PatchyLightSnow
        : PatchyLightSnowDay;
    case 1069:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? PatchySleetPossible
        : PatchySleetPossibleDay;
    case 1072:
      return PatchyFreezingDrizzlePossible;
    case 1087:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? PatchyLightRain
        : PatchyLightRainDay;
    case 1114:
      return BlowingSnow;
    case 1117:
      return Blizzard;
    case 1135:
      return Fog;
    case 1147:
      return FreezingFog;
    case 1150:
      return PatchyLightDrizzle;
    case 1153:
      return PatchyLightDrizzle;
    case 1168:
      return PatchyFreezingDrizzlePossible;
    case 1171:
      return HeavyFreezingDrizzle;
    case 1180:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? PatchyRainPossible
        : PatchyRainPossibleDay;
    case 1183:
      return LightRain;
    case 1186:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? PatchyRainPossible
        : PatchyRainPossibleDay;
    case 1189:
      return LightRain;
    case 1192:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? PatchyRainPossible
        : PatchyRainPossibleDay;
    case 1195:
      return HeavyRain;
    case 1198:
      return LightFreezingRain;
    case 1201:
      return LightFreezingRain;
    case 1204:
      return LightSleet;
    case 1207:
      return ModerateOrHeavySleet;
    case 1210:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? PatchyLightSnow
        : PatchyLightSnowDay;
    case 1213:
      return LightSnow;
    case 1216:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? PatchyLightSnow
        : PatchyLightSnowDay;
    case 1219:
      return LightSnow;
    case 1222:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? PatchyHeavySnow
        : PatchyHeavySnowDay;
    case 1225:
      return HeavySnow;
    case 1237:
      return IcePellets;
    case 1240:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? PatchyRainPossible
        : PatchyRainPossibleDay;
    case 1243:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? ModerateOrHeavyRainShower
        : ModerateOrHeavyRainShowerDay;
    case 1246:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? TorrentialRainShower
        : TorrentialRainShowerDay;
    case 1249:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? PatchySleetPossible
        : PatchySleetPossibleDay;
    case 1252:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? ModerateOrHeavySleetShowers
        : ModerateOrHeavySleetShowersDay;
    case 1255:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? PatchyLightSnow
        : PatchyLightSnowDay;
    case 1258:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? PatchyHeavySnow
        : PatchyHeavySnowDay;
    case 1261:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? LightShowersOfIcePellets
        : LightShowersOfIcePelletsDay;
    case 1264:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? ModerateOrHeavyShowersOfIcePellets
        : ModerateOrHeavyShowersOfIcePelletsDay;
    case 1273:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? PatchyLightRain
        : PatchyLightRainDay;
    case 1276:
      return ModerateOrHeavyRainWithThunder;
    case 1279:
      return sunsetConv(weather) <= currentConvHour(hour) ||
        sunriseConv(weather) > currentConvHour(hour)
        ? PatchyLightSnowWithThunder
        : PatchyLightSnowWithThunderDay;
    case 1282:
      return ModerateOrHeavySnowWithThunder;
    default:
      break;
  }
};
export const iconForecast = (weather) => {
  switch (weather) {
    case 1000:
      return sunny;
    case 1003:
      return PartlyCloudyDay;
    case 1006:
      return CloudyOvercast;
    case 1009:
      return CloudyOvercast;
    case 1030:
      return Mist;
    case 1063:
      return PatchyRainPossibleDay;
    case 1066:
      return PatchyLightSnowDay;
    case 1069:
      return PatchySleetPossibleDay;
    case 1072:
      return PatchyFreezingDrizzlePossible;
    case 1087:
      return PatchyLightRainDay;
    case 1114:
      return BlowingSnow;
    case 1117:
      return Blizzard;
    case 1135:
      return Fog;
    case 1147:
      return FreezingFog;
    case 1150:
      return PatchyLightDrizzle;
    case 1153:
      return PatchyLightDrizzle;
    case 1168:
      return PatchyFreezingDrizzlePossible;
    case 1171:
      return HeavyFreezingDrizzle;
    case 1180:
      return PatchyRainPossibleDay;
    case 1183:
      return LightRain;
    case 1186:
      return PatchyRainPossibleDay;
    case 1189:
      return LightRain;
    case 1192:
      return PatchyRainPossibleDay;
    case 1195:
      return HeavyRain;
    case 1198:
      return LightFreezingRain;
    case 1201:
      return LightFreezingRain;
    case 1204:
      return LightSleet;
    case 1207:
      return ModerateOrHeavySleet;
    case 1210:
      return PatchyLightSnowDay;
    case 1213:
      return LightSnow;
    case 1216:
      return PatchyLightSnowDay;
    case 1219:
      return LightSnow;
    case 1222:
      return PatchyHeavySnowDay;
    case 1225:
      return HeavySnow;
    case 1237:
      return IcePellets;
    case 1240:
      return PatchyRainPossibleDay;
    case 1243:
      return ModerateOrHeavyRainShowerDay;
    case 1246:
      return TorrentialRainShowerDay;
    case 1249:
      return PatchySleetPossibleDay;
    case 1252:
      return ModerateOrHeavySleetShowersDay;
    case 1255:
      return PatchyLightSnowDay;
    case 1258:
      return PatchyHeavySnowDay;
    case 1261:
      return LightShowersOfIcePelletsDay;
    case 1264:
      return ModerateOrHeavyShowersOfIcePelletsDay;
    case 1273:
      return PatchyLightRainDay;
    case 1276:
      return ModerateOrHeavyRainWithThunder;
    case 1279:
      return PatchyLightSnowWithThunderDay;
    case 1282:
      return ModerateOrHeavySnowWithThunder;
    default:
      break;
  }
};

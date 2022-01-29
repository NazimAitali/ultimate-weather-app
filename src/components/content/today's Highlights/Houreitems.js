import React from "react";
import { useSelector } from "react-redux";
function Houreitems({
  bgBox,
  Icone,
  title,
  children,
  weather,
  Wind,
  WindCurrent,
  lang,
}) {
  const { air, highlightsMove } = useSelector((state) => state.ui);
  return (
    <div
      className="highlights center column"
      style={{ backgroundColor: bgBox, top: `${highlightsMove}%` }}
    >
      <div className="title-container evenly center">
        <div className="title center">{title}</div>
        {air ? null : (
          <div className="title-icon center">
            {Icone ? (
              <Icone className="icon-uv" />
            ) : (
              <div className="icon-function center">
                {true
                  ? Wind(weather, lang).icone
                  : WindCurrent(weather, lang).icone}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="indicator center">{children}</div>
    </div>
  );
}

export default Houreitems;

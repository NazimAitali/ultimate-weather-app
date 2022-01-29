import React, { useRef, useMemo } from "react";
import "../map/style.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import { SET_DATA } from "../../redux/actions/data";
import { SET_UI } from "../../redux/actions/ui";
import { langDisplay } from "../../functions/selectLang";
function Map() {
  const { selectMap, bgBox, txtColor } = useSelector((state) => state.ui);
  const { selectPosition, lang } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  function DraggableMarker() {
    const markerRef = useRef(null);
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            dispatch({
              type: SET_DATA,
              payload: {
                selectPosition: marker.getLatLng(),
                LatLong: true,
              },
            });
          }
        },
      }),
      [selectPosition]
    );
    return (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={selectPosition}
        ref={markerRef}
      >
        <Popup minWidth={90}></Popup>
      </Marker>
    );
  }
  return (
    <div className="map-container center column" style={{ top: selectMap }}>
      <div
        className="center layer"
        onClick={() => {
          dispatch({
            type: SET_UI,
            payload: { selectMap: "-100%" },
          });
        }}
      ></div>

      <div className="center map column">
        <MapContainer center={selectPosition} zoom={4} scrollWheelZoom={true}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <DraggableMarker />
        </MapContainer>
        <div className="center map-confirmation">
          <div
            className="center map-btn"
            style={{
              backgroundColor: bgBox,
              color: txtColor,
            }}
            onClick={() =>
              dispatch(
                {
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
                },
                dispatch({
                  type: SET_DATA,
                  payload: {
                    GeolocationCoordinates: "",
                    city: "",
                    confirme: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
                  },
                })
              )
            }
          >
            {langDisplay(lang).confirmation}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;

import React, { useState } from "react";
import { WORLD_POLYNE, SELLER_POLO } from "./polynes";
import { useClienteData } from "../../store/Clients";
import GoogleMapReact from "google-map-react";
import Pin from "../pin";
import "./styles.css";

//RETIRAR COLOCAR EM UM ENV
const KEY = "AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek";
const GET_ADDRES_API =
  "https://maps.googleapis.com/maps/api/geocode/json?latlng=";

function Map() {
  const {
    localization,
    clientsData,
    leadsData,
    screen,
    dispatchScreen,
    walkScriptData,
  } = useClienteData();
  const [markers, setMarkers] = useState([]);

  const handleApiLoaded = (map, maps) => {
    const SELLER_POLE = new maps.Polygon({
      paths: [SELLER_POLO, WORLD_POLYNE],
      strokeColor: "#C5E8C5",
      strokeOpacity: 1,
      strokeWeight: 10,
      fillColor: "#757575",
      fillOpacity: 0.5,
      cursor: "",
    });
    SELLER_POLE.setMap(map);

    SELLER_POLE.addListener("mouseover", (event) => {
      dispatchScreen({
        type: "ACTIVE_CLICK_OUT",
        payload: true,
      });
      SELLER_POLE.cursor = "not-allowed";
    });
    SELLER_POLE.addListener("mouseout", (event) => {
      dispatchScreen({
        type: "ACTIVE_CLICK_OUT",
        payload: false,
      });
    });
  };
  const handleClickMap = async (event) => {
    if (screen.newLead.clickOn) {
      const lt = event.lat;
      const lg = event.lng;
      const response = await fetch(`${GET_ADDRES_API}${lt},${lg}&key=${KEY}`);
      const data = await response.json();
      const addresData = await data.results[0].formatted_address;
      const positionData = await data.results[0].geometry.location;
      const addresFormated = addresData.substr(
        0,
        addresData.indexOf(", São Paulo")
      );
      const info = {
        address: addresFormated,
        position: positionData,
      };
      setMarkers([{ lat: lt, lng: lg, location: info }]);
      dispatchScreen({
        type: "PUSH_ADDRESS",
        payload: info,
      });
      if (!screen.newLead.clickOut) {
        dispatchScreen({
          type: "ADD_NEW_PIN",
          payload: screen.newLead.screen ? false : true,
        });
        dispatchScreen({
          type: "ACTIVE_CLICK_ON",
          payload: false,
        });
      }
    }
  };

  const mapOptions = () => {
    return {
      draggableCursor: screen.newLead.clickOn && "crosshair",
      fullscreenControl: false,
      zoomControlOptions: { position: 8 },
      minZoom: 15,
    };
  };
  let FiltredList = [];

  return (
    <div
      style={{
        height: "91vh",
        width: "100%",
        marginTop: -50,
        marginBottom: -15,
      }}
    >
      <GoogleMapReact
        options={mapOptions}
        bootstrapURLKeys={{ key: KEY }}
        center={{
          lat: localization.lat,
          lng: localization.lng,
        }}
        zoom={localization.zoom}
        yesIWantToUseGoogleMapApiInternals={true}
        draggingCursor="default"
        onGoogleApiLoaded={({ map, maps }) => {
          handleApiLoaded(map, maps);
        }}
        onClick={(e) => handleClickMap(e)}
      >
        {screen.filter.clients &&
          clientsData.map((clientPin) => (
            <Pin
              key={clientPin.id}
              type={"client"}
              lat={clientPin.address.lat}
              lng={clientPin.address.lng}
              info={clientPin}
            />
          ))}
        {screen.filter.leads &&
          leadsData.map(
            (clientPin) =>
              clientPin.client_id === "" && (
                <Pin
                  key={clientPin.id}
                  type={"lead"}
                  lat={clientPin.address.lat}
                  lng={clientPin.address.lng}
                  info={clientPin}
                />
              )
          )}
        {screen.filter.script &&
          walkScriptData[0].allScript.map((clientPin, index) => (
            <Pin
              key={clientPin.id}
              type={"script"}
              number={index}
              lat={clientPin.address.lat}
              lng={clientPin.address.lng}
              info={clientPin}
            />
          ))}
        {screen.filter.filtred &&
          screen.AllFiltred.map((clientPin, index) => (
            <Pin
              key={clientPin.id}
              type={"filtred"}
              number={index}
              lat={clientPin.address.lat}
              lng={clientPin.address.lng}
              info={clientPin}
            />
          ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;

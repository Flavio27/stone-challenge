import React, { useState } from "react";
import { SP_POLYNE, SELLER_POLO } from "./polynes";
import { useClienteData } from "../../store/Clients";
import GoogleMapReact from "google-map-react";
import { fitBounds } from "google-map-react";
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
  } = useClienteData();
  const [markers, setMarkers] = useState([]);
  const mapBounds = {
    nw: {
      lat: -23.54874523475127,
      lng: -46.63620102673337,
    },
    se: {
      lat: -23.56137320976895,
      lng: -46.62590134411618,
    },
  };

  const size = {
    width: 640, // Map width in pixels
    height: 380, // Map height in pixels
  };

  const { center, zoom } = fitBounds(mapBounds, size);

  const apiIsLoaded = (map, maps) => {
    const directionsService = new maps.DirectionsService();
    const directionsDisplay = new maps.DirectionsRenderer();
    directionsService.route(
      {
        origin:
          "Av 565 145, San Juan de Aragón II Secc, 07969 Ciudad de México, CDMX, Mexico",
        destination:
          "Piña MZ3 LT8, Ampliacion Lopez Portillo, 13400 Ciudad de México, CDMX, Mexico",
        travelMode: "DRIVING",
      },
      (response, status) => {
        if (status === "OK") {
          directionsDisplay.setDirections(response);
          console.log(response.routes[0].overview_path, "Ruta");
          const routePolyline = new maps.Polyline({
            path: response.routes[0].overview_path,
          });
          routePolyline.setMap(map);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  };

  const handleApiLoaded = (map, maps) => {
    const SELLER_POLE = new maps.Polygon({
      paths: [SELLER_POLO, SP_POLYNE],
      strokeColor: "#C5E8C5",
      strokeOpacity: 1,
      strokeWeight: 10,
      fillColor: "#757575",
      fillOpacity: 0.5,
    });
    SELLER_POLE.setMap(map);

    SELLER_POLE.addListener("mouseover", (event) => {
      dispatchScreen({
        type: "ACTIVE_CLICK_OUT",
        payload: true,
      });
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
      console.log("onClick map: ", lt, lg);
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
      console.log(markers);
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
      // console.log(screen.newLead.position)
      // console.log(screen.newLead.address)
    }
  };

  const mapOptions = () => {
    return {
      draggableCursor: screen.newLead.clickOn && "crosshair",
      bounds: mapBounds,
    };
  };

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
        bounds={mapBounds}
        margin={SP_POLYNE}
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
          leadsData.map((clientPin) => (
            <Pin
              key={clientPin.id}
              type={"lead"}
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

import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useClienteData } from "../../../store/Clients";
import { useLocation } from "react-router-dom";
import { useStyles } from "./styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

function SearchBarAddres() {
  let location = useLocation();
  const classes = useStyles();
  const { screen, dispatchScreen } = useClienteData();
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <Paper component="form" className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="menu">
              <SearchIcon />
            </IconButton>
            <InputBase
              {...getInputProps()}
              className={classes.input}
              placeholder="Endereço"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
          <div className={classes.suggestionDiv}>
            {loading ? <div>Carregando...</div> : null}

            {suggestions.map((suggestion) => {
              return (
                <div
                  key={suggestion.description}
                  className={
                    suggestion.active
                      ? classes.suggestionActive
                      : classes.suggestionNormal
                  }
                  {...getSuggestionItemProps(suggestion)}
                >
                  {suggestion.description}
                </div>
              );
            })}
          </div>
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lng}</p>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default SearchBarAddres;

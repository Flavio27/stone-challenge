import React, { useState, memo} from "react";
import { useClienteData } from "../../store/Clients";
import { useLocation } from "react-router-dom";
import { useStyles } from "./styles";
import SearchBar from "material-ui-search-bar";
import SearchBarAddres from './searchAddress'

function SearchBarApp() {
  let location = useLocation();
  const classes = useStyles();
  const { screen, dispatchScreen } = useClienteData();

  const searchOnFocus = () => {
    console.log("search ativada");
    dispatchScreen({ type: "ACTIVE_SEARCH", payload: true });
  };
  const onChangeValue = (value) => {
    location.pathname === "/list" &&
      dispatchScreen({ type: "SEARCH_VALUE_LIST", payload: value });
    location.pathname === "/roteiro" &&
      dispatchScreen({ type: "SEARCH_VALUE_SCRIPT", payload: value });
      
  };
  const searchOnBlur = () => {
    console.log("search desativada");
    dispatchScreen({ type: "ACTIVE_SEARCH", payload: false });
  };

  const clearValue = () => {
    dispatchScreen({ type: "SEARCH_VALUE_LIST", payload: false });
  };

  return (
    <div className={classes.main}>
      <div className={classes.bar}>
        {location.pathname === "/" ? (
          <SearchBarAddres/>
        ) : (
          <SearchBar
            placeholder="Nome do estabelecimento"
            onChange={(newValue) => onChangeValue(newValue)}
            onFocus={() => {
              searchOnFocus();
            }}
            onBlur={() => {
              searchOnBlur();
            }}
            onCancelSearch={() => clearValue()}
            // onRequestSearch={() => doSomethingWith(this.state.value)}
          />
        )}
        {screen.newLead.clickOn && location.pathname === "/" && (
          <div variant="filled" className={classes.alert}>
            Escolha o local do novo lead dentro do polo
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(SearchBarApp);

import React from "react";
import { useClienteData } from "../../store/Clients";
import { useLocation } from "react-router-dom";
import { useStyles } from "./styles";
import SearchBar from "material-ui-search-bar";
import Typography from "@material-ui/core/Typography";

function SearchBarApp() {
  let location = useLocation();
  const classes = useStyles();
  const { screen } = useClienteData();
  return (
    <div className={classes.main}>
      <div className={classes.bar}>
        <SearchBar
          placeholder="Nome, stone code ou endereço"
          // value={this.state.value}
          // onChange={(newValue) => this.setState({ value: newValue })}
          // onRequestSearch={() => doSomethingWith(this.state.value)}
        />
        {screen.newLead.clickOn && location.pathname === "/" && (
          <div variant="filled" className={classes.alert}>
            Escolha o local do novo lead dentro do polo
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBarApp;

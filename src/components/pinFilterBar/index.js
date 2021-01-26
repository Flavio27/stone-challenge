import React, { useState } from "react";
import { useClienteData } from "../../store/Clients";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import AppBar from "@material-ui/core/AppBar";
import FilterListIcon from "@material-ui/icons/FilterList";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import { useStyles } from "./styles";

function PinFilterBar() {
  const {
    clientsData,
    leadsData,
    screen,
    dispatchScreen,
    localization,
    setLocalization,
    walkScriptData,
  } = useClienteData();
  const [activeLeads, setActiveLeads] = useState(0);
  const classes = useStyles();
  let numberLeads = leadsData.filter((e) => e.client_id === "");

  const newLead = () => {
    dispatchScreen({
      type: "PUSH_ADDRESS",
      payload: "",
    });

    dispatchScreen({
      type: "ACTIVE_CLICK_ON",
      payload: true,
    });
    setLocalization({ ...localization, zoom: 17 });
  };

  const filterScript = () => {
    dispatchScreen({
      type: "ACTIVE_FILTER_PIN_SCRIPT",
      payload: screen.filter.script ? false : true,
    });
    dispatchScreen({
      type: "ACTIVE_FILTER_PIN_CLIENT",
      payload: false,
    });
    dispatchScreen({
      type: "ACTIVE_FILTER_PIN_LEAD",
      payload: false,
    });
    dispatchScreen({
      type: "ACTIVE_FILTER_PIN_FILTRED",
      payload: false
    });
  };

  const filterLeads = () => {
    dispatchScreen({
      type: "ACTIVE_FILTER_PIN_LEAD",
      payload: screen.filter.leads ? false : true,
    });

    dispatchScreen({
      type: "ACTIVE_FILTER_PIN_SCRIPT",
      payload: false,
    });
    dispatchScreen({
      type: "ACTIVE_FILTER_PIN_FILTRED",
      payload: false
    });
  };

  const filterClients = () => {
    dispatchScreen({
      type: "ACTIVE_FILTER_PIN_CLIENT",
      payload: screen.filter.clients ? false : true,
    });
    dispatchScreen({
      type: "ACTIVE_FILTER_PIN_SCRIPT",
      payload: false,
    });
    dispatchScreen({
      type: "ACTIVE_FILTER_PIN_FILTRED",
      payload: false
    });
  };

  const funnelFiltred = () => {
    dispatchScreen({
      type: "ACTIVE_FILTER_PIN_FILTRED",
      payload: screen.filter.filtred ? false : true
    });
    dispatchScreen({
      type: "ACTIVE_FILTER_PIN_SCRIPT",
      payload: false,
    });
    dispatchScreen({
      type: "ACTIVE_FILTER_PIN_CLIENT",
      payload: false,
    });
    dispatchScreen({
      type: "ACTIVE_FILTER_PIN_LEAD",
      payload: false,
    });
  };

  return (
    <div className={classes.main}>
      <div className={classes.grow}>
        <AppBar position="static" className={classes.bar} color="none">
          <div className={classes.itens}>
            <div className={classes.item} onClick={newLead}>
              <Badge badgeContent={0} color="secondary">
                <AddLocationIcon style={{ color: "#757575" }} />
              </Badge>
              <div className={classes.info}>
                <Typography className={classes.info}>Novo Lead</Typography>
              </div>
            </div>
            <div className={classes.item} onClick={filterScript}>
              <Badge
                badgeContent={walkScriptData[0].allScript.length}
                color="secondary"
              >
                <DirectionsWalkIcon style={{ color: "#013a83" }} />
              </Badge>
              <div className={classes.info}>
                <Typography className={classes.info}>Roteiro</Typography>
              </div>
            </div>
            <div className={classes.item} onClick={filterLeads}>
              <Badge badgeContent={numberLeads.length} color="secondary">
                <NotListedLocationIcon style={{ color: "#c66b2f" }} />
              </Badge>
              <div className={classes.info}>
                <Typography className={classes.info}>Leads</Typography>
              </div>
            </div>
            <div className={classes.item} onClick={filterClients}>
              <Badge badgeContent={clientsData.length} color="secondary">
                <PersonPinCircleIcon style={{ color: "#38bc72" }} />
              </Badge>
              <div className={classes.info}>
                <Typography className={classes.info}>Clientes</Typography>
              </div>
            </div>
            <div className={classes.item} onClick={funnelFiltred}>
              <Badge badgeContent={screen.AllFiltred.length} color="secondary">
                <FilterListIcon style={{ color: "#000000" }} />
              </Badge>
              <div className={classes.info}>
                <Typography className={classes.info}>Filtrados</Typography>
              </div>
            </div>
          </div>
        </AppBar>
      </div>
    </div>
  );
}

export default PinFilterBar;

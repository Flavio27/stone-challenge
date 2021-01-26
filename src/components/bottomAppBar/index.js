import React, { memo } from "react";
import { useClienteData } from "../../store/Clients";
import { INITIAL_LOCATION } from "../../store/initialState";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MoreIcon from "@material-ui/icons/MoreVert";
import FilterListIcon from "@material-ui/icons/FilterList";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MapIcon from "@material-ui/icons/Map";
import EventIcon from "@material-ui/icons/Event";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import { Link } from "react-router-dom";
import { history } from "../../config/history";
import { useStyles } from "./styles";

function BottomAppBar() {
  const { screen, dispatchScreen, setLocalization } = useClienteData();
  const classes = useStyles();

  const goToFunnel = async () => {
    await dispatchScreen({
      type: "ACTIVE_FUNNEL",
      payload: screen.funnel ? false : true,
    });
    await dispatchScreen({
      type: "ACTIVE_ALERT_FILTER",
      payload: false,
    });


  };
  const goToList = () => {
    history.push("/list");
  };

  const goToMap = () => {
    history.push("/");
    setLocalization(INITIAL_LOCATION);
  };

  const goToScript = () => {
    history.push("/");
    setLocalization(INITIAL_LOCATION);
  };

  return (
    <React.Fragment>
      <div className={classes.space} />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.iconsBar}>
          <Link
            type="div"
            to={"./"}
            className={classes.item}
            onClick={goToFunnel}
          >
            <FilterListIcon />
            <div className={classes.info}>
              <Typography className={classes.info}>Funil</Typography>
            </div>
          </Link>
          <Link
            type="div"
            to={"./list"}
            className={classes.item}
            onClick={goToList}
          >
            <DashboardIcon />
            <div className={classes.info}>
              <Typography className={classes.info}>Lista</Typography>
            </div>
          </Link>
          <Link type="div" to={"./"} className={classes.item} onClick={goToMap}>
            <MapIcon />
            <div className={classes.info}>
              <Typography className={classes.info}>Mapa</Typography>
            </div>
          </Link>
          <Link
            type="div"
            to={"./roteiro"}
            className={classes.item}
            onClick={goToScript}
          >
            <DirectionsWalkIcon />
            <div className={classes.info}>
              <Typography className={classes.info}>Roteiro</Typography>
            </div>
          </Link>
          <div
            className={classes.item}
            onClick={() => {
              console.log(screen.AllFiltred);
            }}
          >
            <MoreIcon />
            <div className={classes.info}>
              <Typography className={classes.info}>Mais</Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default memo(BottomAppBar);

import React, { useState } from "react";
import { useClienteData } from "../../store/Clients";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import ClientInfo from "../clientInfo";
import LeadInfo from "../leadinfo";
import NewLead from "../newLead";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import { useStyles } from "./styles";

function Pin({ info, type, number }) {
  const classes = useStyles();
  const { screen } = useClienteData();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if (!screen.newLead.clickOn) setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const filtredLead = <LeadInfo client={info} />
  const filtredClient= <ClientInfo client={info} />

  return (
    <div>
      <div onClick={handleClickOpen} className={classes.divPin}>
        <Typography className={classes.name}>
          {info && type !== "script" && info.commercial_name}
        </Typography>
        {type === "lead" && (
          <NotListedLocationIcon
            fontSize="large"
            style={{ color: "#c66b2f" }}
          />
        )}
        {type === "client" && (
          <PersonPinCircleIcon fontSize="large" style={{ color: "#38bc72" }} />
        )}

        {type === "filtred" &&
          (info.percentage_migration ? (
            <PersonPinCircleIcon
              fontSize="large"
              style={{ color: "#38bc72" }}
            />
          ) : (
            <NotListedLocationIcon
              fontSize="large"
              style={{ color: "#c66b2f" }}
            />
          ))}
        {type === "script" && (
          <>
            <DirectionsWalkIcon style={{ color: "#013a83" }} />
            <div fontSize="large" className={classes.scriptDiv}>
              <h2>{number + 1}º</h2>
            </div>
            <Typography>{info.commercial_name}</Typography>
          </>
        )}
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className={classes.modalDiv}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          className={classes.closeButton}
        >
          <CloseIcon />
        </IconButton>
        {type === "filtred" && info.satisfaction ? filtredClient : filtredLead}
        {type === "client" && <ClientInfo client={info} />}
        {type === "lead" && <LeadInfo client={info} />}
      </Dialog>
    </div>
  );
}

export default Pin;

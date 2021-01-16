import React from 'react'
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import ClientInfo from '../clientInfo'
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './styles'

function Pin({ info }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleClickOpen} className={classes.divPin}>
        <h3>{info.commercial_name}</h3>
        <PersonPinCircleIcon fontSize="large" color="error" />
      </div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} className={classes.modalDiv}>
        <IconButton aria-label="close" onClick={handleClose} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
        <ClientInfo client={info} />
      </Dialog>
    </div>
  )
}

export default Pin

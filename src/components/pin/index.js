import React from 'react'
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import CardInfo from '../cardInfo'
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import { useStyles } from './styles'

function Pin({ info, type }) {
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
        <Typography className={classes.name}>
          {info.commercial_name}
        </Typography>
        {type === 'tender' && <NotListedLocationIcon fontSize="large" style={{ color: '#c66b2f' }} />}
        {type === 'client' && <PersonPinCircleIcon fontSize="large" style={{ color: '#38bc72' }} />}
      </div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} className={classes.modalDiv}>
        <IconButton aria-label="close" onClick={handleClose} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
        <CardInfo client={info} />
      </Dialog>
    </div>
  )
}

export default Pin

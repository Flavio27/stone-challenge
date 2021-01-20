import React from 'react'
import { useClienteData } from '../../store/Clients'
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './styles'

function Modal({children}) {
  const { screen, dispatchScreen, setFilter, filter } = useClienteData();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    dispatchScreen({
      type: 'ACTIVE_FUNNEL',
      payload: screen.funnel ? false : true
    })
    setFilter([]);
  };

  return (
    <div>
      <div onClick={handleClickOpen} className={classes.divPin}>       
      </div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} className={classes.modalDiv}>
        <IconButton aria-label="close" onClick={handleClose} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
        {children}
      </Dialog>
    </div>
  )
}

export default Modal

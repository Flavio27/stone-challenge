import React from 'react';
import { useClienteData } from '../../store/Clients'
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import AssistantIcon from '@material-ui/icons/Assistant';
import Badge from '@material-ui/core/Badge';
import { useStyles } from './styles'

function PinFilterBar() {
  const { clientsData, screen , dispatchScreen } = useClienteData();
  const classes = useStyles();

  const filterClients = () =>{
    dispatchScreen({
      type: 'ACTIVE_FILTER_PIN_CLIENT', 
      payload: screen.filter.clients ? false : true
    });
  }

  return (
    <div className={classes.main}>
      <div className={classes.grow}>
        <AppBar position="static" className={classes.bar}>
          <div className={classes.itens}>
            <div className={classes.item}>
              <Badge badgeContent={0} color="secondary">
                <AssistantIcon />
              </Badge>
              <div className={classes.info}>
                <Typography className={classes.info}>Qualificações</Typography>
              </div>
            </div>
            <div className={classes.item}>
              <Badge badgeContent={0} color="secondary">
                <NotListedLocationIcon />
              </Badge>
              <div className={classes.info}>
                <Typography className={classes.info}>Propostas</Typography>
              </div>
            </div>
            <div className={classes.item} onClick={filterClients}>
              <Badge badgeContent={clientsData.length} color="secondary">
                <PersonPinCircleIcon />
              </Badge>
              <div className={classes.info}>
                <Typography className={classes.info}>Clientes</Typography>
              </div>
            </div>
          </div>
        </AppBar>
      </div>
    </div>
  );
}

export default PinFilterBar
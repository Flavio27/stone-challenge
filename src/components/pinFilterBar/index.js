import React from 'react';
import { useClienteData } from '../../store/Clients'
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { useStyles } from './styles'

function PinFilterBar() {
  const { clientsData, leadsData, screen, dispatchScreen, localization, setLocalization } = useClienteData();
  const classes = useStyles();

  const filterClients = () => {
    dispatchScreen({
      type: 'ACTIVE_FILTER_PIN_CLIENT',
      payload: screen.filter.clients ? false : true
    });
  }
  const filterLeads = () => {
    dispatchScreen({
      type: 'ACTIVE_FILTER_PIN_LEAD',
      payload: screen.filter.leads ? false : true
    });
  }
  const newLead = () => {
    dispatchScreen({
      type: 'PUSH_ADDRESS',
      payload: ''
    });

    dispatchScreen({
      type: 'ACTIVE_CLICK_ON',
      payload: true
    });
    setLocalization({ ...localization, zoom: 17 })
  }



  return (
    <div className={classes.main}>
      <div className={classes.grow}>
        <AppBar position="static" className={classes.bar}>
          <div className={classes.itens}>
            <div className={classes.item} onClick={newLead}>
              <Badge badgeContent={0} color="secondary">
                <AddLocationIcon style={{ color: '#757575' }} />
              </Badge>
              <div className={classes.info}>
                <Typography className={classes.info}>Novo Lead</Typography>
              </div>
            </div>
            <div className={classes.item} onClick={filterLeads}>
              <Badge badgeContent={leadsData.length} color="secondary">
                <NotListedLocationIcon style={{ color: '#c66b2f' }} />
              </Badge>
              <div className={classes.info}>
                <Typography className={classes.info}>Leads</Typography>
              </div>
            </div>
            <div className={classes.item} onClick={filterClients}>
              <Badge badgeContent={clientsData.length} color="secondary">
                <PersonPinCircleIcon style={{ color: '#38bc72' }} />
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
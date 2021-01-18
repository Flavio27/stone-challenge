import React from 'react';
import { useClienteData } from '../../store/Clients'
import Card from '@material-ui/core/Card';
import RestoreIcon from '@material-ui/icons/Restore';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Typography from '@material-ui/core/Typography';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import RoomIcon from '@material-ui/icons/Room';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import { useStyles } from './styles'

function ClientInfo({ client }) {
  const { localization, setLocalization, dispatchScreen} = useClienteData();
  const classes = useStyles();

  const goToCordenates = () => {
    setLocalization({ ...localization, lat: client.address[0].lat, lng: client.address[0].lng, zoom: 20 })
    dispatchScreen({
      type: 'ACTIVE_FILTER_PIN_CLIENT', 
      payload: true
    });
  }

  return (
    <div className={classes.main}>
      <Card className={classes.root}>
        <div className={classes.firstComponent}>
          <Typography className={classes.title}>
            {client.commercial_name}
          </Typography>
          <Typography className={classes.pos}>
            • <strong>{client.business_type}</strong>
            <br/>
            • {client.address && client.address[0].street}
          </Typography>
          <Typography className={classes.pos}>
            <CheckIcon fontSize="small" />
            Aprovado
          </Typography>
        </div>
        <div className={classes.secondComponent}>
          <Typography className={classes.pos}>
            <RestoreIcon className={classes.icons} />
            Há 20 Dias
            <br />
            <CalendarTodayIcon className={classes.icons} />
            19/10
          </Typography >
        </div>
        <div className={classes.secondComponent}>
          <Typography className={classes.pos}>
            <AttachMoneyIcon className={classes.icons} />
            {client.tpv / 1000}k
            <br />
            <AccountBalanceWalletIcon className={classes.icons} />
            {(client.tpv * (2.5 / 100))}
          </Typography>
        </div>
        <div className={classes.buttons}>
          <Fab className={classes.newTask}
            variant="extended"
            onClick={() => alert('add task')}>
            <AddIcon />
             Nova Tarefa
          </Fab>
          <Link to={'./'}>
            <Fab className={classes.pin}
              onClick={goToCordenates}>
              <RoomIcon />
            </Fab>
          </Link>
        </div>
      </Card>
    </div>

  );
}

export default ClientInfo
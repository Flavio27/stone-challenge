import React from 'react';
import { useClienteData } from '../../store/Clients'
import Card from '@material-ui/core/Card';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CachedIcon from '@material-ui/icons/Cached';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Typography from '@material-ui/core/Typography';
import RoomIcon from '@material-ui/icons/Room';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import { useStyles } from './styles'

function LeadInfo({ client }) {
  const { localization, setLocalization, dispatchScreen } = useClienteData();
  const classes = useStyles();

  const goToCordenates = () => {
    setLocalization({ ...localization, lat: client.address.lat, lng: client.address.lng, zoom: 20 })
    dispatchScreen({
      type: 'ACTIVE_FILTER_PIN_LEAD',
      payload: true
    });
  }

  return (
    <div className={classes.main}>
      <Card className={classes.root}>
        <div className={classes.head}>
          <Typography className={classes.title}>
            {client.commercial_name}
          </Typography>
          <Link to={'./'}>
            <Fab className={classes.pin}
              onClick={goToCordenates}>
              <RoomIcon />
            </Fab>
          </Link>
        </div>
        <div className={classes.firstComponent}>
          <Typography className={classes.pos}>
            <strong>({client.business_type})</strong>
            <br />
            {client.address && client.address.street}
          </Typography>
          <Typography className={classes.status}>
            <CachedIcon className={classes.icons} />
            <strong>Status da negociação</strong>
            <br />
            {client.negotiation_status ? client.negotiation_status : '-'}
          </Typography >
          <Typography className={classes.status}>
            <CalendarTodayIcon className={classes.icons} />
            <strong>Ultima visita</strong>
            <br />
            {client.last_visit ? client.last_visit : '-'}
          </Typography >
          <Typography className={classes.status}>
            <>
              <CalendarTodayIcon className={classes.icons} />
              <strong>Visita hoje</strong>
              <br />
              {client.visit_today ? 'Sim' : 'Não'
              }
            </>
          </Typography>
        </div>
        <div className={classes.secondComponent}>
        <Typography className={classes.status}>
            <TrendingUpIcon className={classes.icons} />
            <strong>TPV</strong>
            <br />
            {client.tpv ? client.tpv : '-'}
          </Typography >
          <Typography className={classes.status}>
            <strong>Qtd. visitas</strong>
            <br />
            {client.visit_numbers ? client.visit_numbers : '-'}
          </Typography >
        </div>
        <div className={classes.buttons}>
          <Fab
            className={classes.newTask}
            variant="extended"
            onClick={() => alert('add task')}>
            Enviar Proposta
          </Fab>
        </div>
      </Card>
    </div>

  );
}

export default LeadInfo
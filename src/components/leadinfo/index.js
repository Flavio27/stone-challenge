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
    setLocalization({ ...localization, lat: client.address[0].lat, lng: client.address[0].lng, zoom: 20 })
    dispatchScreen({
      type: 'ACTIVE_FILTER_PIN_TENDER',
      payload: true
    });
  }

  return (
    <div className={classes.main}>
      <Card className={classes.root}>
        <Typography className={classes.title}>
          {client.commercial_name}
        </Typography>
        <div className={classes.firstComponent}>
          <Typography className={classes.pos}>
            <strong>({client.business_type})</strong>
            <br />
            {client.address && client.address[0].street}
          </Typography>    
          <Typography className={classes.status}>
            <CachedIcon className={classes.icons} />
            <strong>Status da negociação</strong>
            <br />
            {client.negotiation && client.negotiation[0].status}
          </Typography >
          <Typography className={classes.status}>
            <CalendarTodayIcon className={classes.icons} />
            <strong>Ultima visita</strong>
            <br />
            {client.visit && client.visit[0].last_visit}
          </Typography >
          {client.visit &&
            client.visit[0].visit_today &&
            <Typography className={classes.status}>
              <>
                <CalendarTodayIcon className={classes.icons} />
                <strong>Visita hoje</strong>
                <br />
                Sim
              </>
            </Typography>}
        </div>
        <div className={classes.secondComponent}>
          <Typography className={classes.pos}>
            <AttachMoneyIcon className={classes.icons} />
            {client.tpv / 1000}k
            <br />
            <TrendingUpIcon className={classes.icons} />
            {(client.tpv * (2.5 / 100))}
          </Typography>
          <Typography className={classes.status}>
            <strong>Quantidade de visitas</strong>
            <br />
            {client.visit && client.visit[0].visits_number}
          </Typography >
        </div>
        <div className={classes.buttons}>
          <Fab
            className={classes.newTask}
            variant="extended"
            onClick={() => alert('add task')}>
            Enviar Proposta
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

export default LeadInfo
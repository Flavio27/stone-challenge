import React from 'react';
import { useClienteData } from '../../store/Clients'
import Card from '@material-ui/core/Card';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Typography from '@material-ui/core/Typography';
import RoomIcon from '@material-ui/icons/Room';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import { useStyles } from './styles'

function ClientInfo({ client }) {
  const { localization, setLocalization, dispatchScreen } = useClienteData();
  const classes = useStyles();
  let satisfaction = {
    emote: null,
    border: null,
  }
  if (client.satisfaction < 50) {
    satisfaction.emote = <SentimentVeryDissatisfiedIcon className={classes.icons} />
    satisfaction.border = '3px solid red'
  } else if (client.satisfaction >= 50 && client.satisfaction < 8) {
    satisfaction.emote = <SentimentSatisfiedIcon className={classes.icons} />
    satisfaction.border = '3px solid gold'
  } else if (client.satisfaction >= 80) {
    satisfaction.emote = <SentimentSatisfiedAltIcon className={classes.icons} />
    satisfaction.border = '3px solid green'
  }

  const goToCordenates = () => {
    setLocalization({ ...localization, lat: client.address.lat, lng: client.address.lng, zoom: 20 })
    dispatchScreen({
      type: 'ACTIVE_FILTER_PIN_CLIENT',
      payload: true
    });
  }

  return (
    <div className={classes.main}>
      <Card className={classes.root} style={{ borderLeft: satisfaction.border }}>
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
            <CalendarTodayIcon className={classes.icons} />
            <strong>Ultima visita</strong>
            <br />
            {client.last_visit && client.last_visit}
          </Typography >

          <Typography className={classes.status}>
            <>
              <CalendarTodayIcon className={classes.icons} />
              <strong>Visita hoje</strong>
              <br />
              { client.visit_today ? 'Sim' : 'Não'}
            </>
          </Typography>
        </div>
        <div className={classes.secondComponent}>
        <Typography className={classes.status}>
        {satisfaction.emote}
            <strong>Satisfação</strong>
            <br />
            {client.satisfaction}% 
          </Typography >
        <Typography className={classes.status}>
        <AttachMoneyIcon className={classes.icons}/>
            <strong>Migração</strong>
            <br />
            {client.percentage_migration}%
          </Typography >
        <Typography className={classes.status}>
        <TrendingUpIcon className={classes.icons}/>
            <strong>TPV</strong>
            <br />
            {client.tpv}
          </Typography >
        </div>

      </Card>
    </div>

  );
}

export default ClientInfo
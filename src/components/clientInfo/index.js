import React from 'react';
import { useClienteData } from '../../store/Clients'
import Card from '@material-ui/core/Card';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt'; //Feliz
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied'; //Satisfeito
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'; //Triste
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
  if (client.satisfaction < 5) {
    satisfaction.emote = <SentimentVeryDissatisfiedIcon className={classes.icons} />
    satisfaction.border = '3px solid red'
  } else if (client.satisfaction >= 5 && client.satisfaction < 8) {
    satisfaction.emote = <SentimentSatisfiedIcon className={classes.icons} />
    satisfaction.border = '3px solid gold'
  } else if (client.satisfaction >= 8) {
    satisfaction.emote = <SentimentSatisfiedAltIcon className={classes.icons} />
    satisfaction.border = '3px solid green'
  }

  const goToCordenates = () => {
    setLocalization({ ...localization, lat: client.address[0].lat, lng: client.address[0].lng, zoom: 20 })
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
            {client.address && client.address[0].street}
          </Typography>
          <Typography className={classes.status}>
            <CalendarTodayIcon className={classes.icons} />
            <strong>Ultima visita</strong>
            <br />
            {client.visit && client.visit[0].last_visit}
          </Typography >

          <Typography className={classes.status}>
            <>
              <CalendarTodayIcon className={classes.icons} />
              <strong>Visita hoje</strong>
              <br />
              {client.visit &&
                client.visit[0].visit_today ? 'Sim' : 'Não'
              }
            </>
          </Typography>
        </div>
        <div className={classes.secondComponent}>
          {!client.negotiation &&
            <Typography className={classes.result}>
              <strong>
                {satisfaction.emote}
                Status
                <br />
                {client.satisfaction * 10}% de aprovação
          </strong>
            </Typography>}
          <Typography className={classes.pos}>
            <AttachMoneyIcon className={classes.icons} />
            {client.tpv / 1000}k
            <br />
            <TrendingUpIcon className={classes.icons} />
            {(client.tpv * (2.5 / 100))}
          </Typography>
        </div>

      </Card>
    </div>

  );
}

export default ClientInfo
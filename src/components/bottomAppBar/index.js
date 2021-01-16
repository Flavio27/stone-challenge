import React from 'react';
import { useClienteData } from '../../store/Clients'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MoreIcon from '@material-ui/icons/MoreVert';
import FilterListIcon from '@material-ui/icons/FilterList';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MapIcon from '@material-ui/icons/Map';
import EventIcon from '@material-ui/icons/Event';
import { history } from '../../config/history'
import { useStyles } from './styles'
import { Link } from 'react-router-dom'


export default function BottomAppBar() {
  const { screen, dispatchScreen, localization, setLocalization } = useClienteData();
  const classes = useStyles();

  const goToList = () => {
    history.push('/list')
    console.log(screen)
    dispatchScreen({type: 'ACTIVE_FILTER_PIN_CLIENT', payload: true})
    console.log(screen)
  }

  const goToMap = () => {
    history.push('/')
    console.log(screen)
    setLocalization({...localization, lat: -23.561684, lng: -46.625378, zoom: 13})
  }

  const goToScript = () => {
    history.push('/')
  }

  return (
    <React.Fragment>
      <div className={classes.space} />
      
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.iconsBar}>
          <div className={classes.item}>
            {screen.list && 'a'}
            <FilterListIcon />
            <div className={classes.info}>
              <Typography className={classes.info}>Funil</Typography>
            </div>
          </div>
          <Link type="div" to={'./list'} className={classes.item} onClick={goToList}>
            <DashboardIcon />
            <div className={classes.info}>
              <Typography className={classes.info}>Lista</Typography>
            </div>
          </Link>
          <Link type="div" to={'./'} className={classes.item} onClick={goToMap}>
            <MapIcon />
            <div className={classes.info}>
              <Typography className={classes.info}>Mapa</Typography>
            </div>
          </Link>
          <Link type="div" to={'./'} className={classes.item} onClick={goToMap}>
            <EventIcon />
            <div className={classes.info}>
              <Typography className={classes.info}>Roteiro</Typography>
            </div>
          </Link>
          <div className={classes.item}>
            <MoreIcon />
            <div className={classes.info}>
              <Typography className={classes.info}>Mais</Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
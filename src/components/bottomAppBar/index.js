import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MoreIcon from '@material-ui/icons/MoreVert';
import FilterListIcon from '@material-ui/icons/FilterList';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MapIcon from '@material-ui/icons/Map';
import EventIcon from '@material-ui/icons/Event';
import { useStyles } from './styles'


export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className={classes.iconsBar}>
        <div className={classes.item}>
              <FilterListIcon/>
          <div className={classes.info}>
            <Typography className={classes.info}>Funil</Typography>
          </div>
        </div>
        <div className={classes.item}>
        <DashboardIcon />
          <div className={classes.info}>
            <Typography className={classes.info}>Lista</Typography>
          </div>
        </div>
        <div className={classes.item}>
        <MapIcon />
          <div className={classes.info}>
            <Typography className={classes.info}>Mapa</Typography>
          </div>
        </div>
        <div className={classes.item}>
        <EventIcon />
          <div className={classes.info}>
            <Typography className={classes.info}>Roteiro</Typography>
          </div>
        </div>
        <div className={classes.item}>
        <MoreIcon />
          <div className={classes.info}>
            <Typography className={classes.info}>Mais</Typography>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
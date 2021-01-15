import React from 'react';
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

import { useStyles } from './styles'


export default function OutlinedCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.firstComponent}>
        <Typography className={classes.title} gutterBottom>
          Bar José
          </Typography>
        <Typography className={classes.pos}>
          Rua Capitão Francisco, 1050
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
          10k
          <br />
          <AccountBalanceWalletIcon className={classes.icons} />
           1.1k
          </Typography>
      </div>
      <div className={classes.buttons}>
        <Fab className={classes.newTask}
          variant="extended"
          onClick={() => alert('add task')}>
          <AddIcon />
               Nova Tarefa
        </Fab>
        <Fab className={classes.pin}
          onClick={() => alert('go to local')}>
            <RoomIcon/>
        </Fab>
      </div>
     
    </Card>
  );
}
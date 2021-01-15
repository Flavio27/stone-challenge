import React from 'react';
import Card from '@material-ui/core/Card';
import RestoreIcon from '@material-ui/icons/Restore';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Typography from '@material-ui/core/Typography';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Fab from '@material-ui/core/Fab';
import { useStyles } from './styles'

function InfoClientPin() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Card className={classes.root}>
        <div className={classes.firstComponent}>
          <Typography className={classes.title} gutterBottom>
            Bar José
          </Typography>
          <Typography className={classes.pos}>
            Rua Capitão Francisco, 1050
          </Typography>
        </div>
        <Typography className={classes.pos}>
          <RestoreIcon className={classes.icons} />
          Há 20 Dias
          <br />
          <CalendarTodayIcon className={classes.icons} />
          19/10
          </Typography >
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
            Nova Tarefa
        </Fab>
          <Fab className={classes.newTask}
            variant="extended"
            onClick={() => alert('add task')}>
            Minuto de ouro
        </Fab>
        <StarBorderIcon className={classes.favorite}/>
          {/* <Fab aria-label="add" size="small" className={classes.newTask}>
            <StarBorderIcon />
          </Fab> */}
        </div>
      </Card>
    </div>
  );
}

export default InfoClientPin
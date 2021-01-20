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
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import StoreIcon from '@material-ui/icons/Store';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PinDropIcon from '@material-ui/icons/PinDrop';

function LeadInfo({ client }) {
  const { localization, setLocalization, dispatchScreen } = useClienteData();
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Card className={classes.root}>
        <div className={classes.head}>
          <Typography className={classes.title}>
            Novo Lead
          </Typography>
        </div>
        <div className={classes.firstComponent}>

          <TextField
            placeholder="Nome comercial"
            id="commercial_name"
            helperText="nome do estabelecimento"
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  <StoreIcon  className={classes.icons}/>
                </InputAdornment>,
            }}
          />
          <TextField
            placeholder="Segmento"
            id="business_type"
            helperText="Ex: Restaurante"
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  <StorefrontIcon  className={classes.icons}/>
                </InputAdornment>,
            }}
          />
          <TextField
            placeholder="Endereço"
            // label="With normal TextField"
            id="addres"
            value={client && client.location.address}
            helperText="Ex: R. João da silva, 228"
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  <PinDropIcon className={classes.icons}/>
                </InputAdornment>,
            }}
          />
          <br/>
          <Checkbox
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
        label="Gilad Gray"
      />
      <strong>Visitar hoje</strong> 
        </div>
        <div className={classes.buttons}>
          <Fab
            className={classes.delet}
            variant="extended"
            onClick={() => alert('add task')}>
            Excluir
          </Fab>
          <Fab
            className={classes.newTask}
            variant="extended"
            onClick={() => alert('add task')}>
            Cadastrar
          </Fab>
        </div>
      </Card>
    </div>

  );
}

export default LeadInfo
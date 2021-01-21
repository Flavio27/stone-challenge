import React from 'react';
import { useClienteData } from '../../store/Clients'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import StoreIcon from '@material-ui/icons/Store';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PinDropIcon from '@material-ui/icons/PinDrop';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { useStyles } from './styles'

function LeadInfo({ client }) {
  const classes = useStyles();
  const { screen, dispatchScreen, setFilter } = useClienteData();
 
  const cancelNewLead = () => {
    dispatchScreen({
      type: 'ADD_NEW_PIN',
      payload: false
    });
  }
 
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
            id="address"
            value={screen && screen.newLead.address}
            helperText="Ex: R. João da silva, 228"
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  <PinDropIcon className={classes.icons}/>
                </InputAdornment>,
            }}
          />
          <TextField
            placeholder="TPV Potencial"
            id="tpv"
            helperText="transações no cartão p/ mês"
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  <TrendingUpIcon className={classes.icons}/>
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
            onClick={cancelNewLead}
            >
            Cancelar
          </Fab>
          <Fab
            className={classes.newTask}
            variant="extended"
            onClick={() => alert('add task')}
            >
            Cadastrar
          </Fab>
        </div>
      </Card>
    </div>

  );
}

export default LeadInfo
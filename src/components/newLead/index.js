import React, { useState } from 'react';
import { useClienteData } from '../../store/Clients'
import { INITIAL_TENDERS } from '../../store/initialState'
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

const ERROS = {
  
}

function LeadInfo({ client }) {
  const classes = useStyles();
  const [newLead, setNewLead] = useState(INITIAL_TENDERS)
  const { screen, dispatchScreen, setFilter, tendersData, dispatchTender } = useClienteData();
  let newId = tendersData.length + 1

  const cancelNewLead = () => {
    dispatchScreen({
      type: 'ADD_NEW_PIN',
      payload: false
    });
  }

  const addNewLead = () => {
    setNewLead([...newLead], newLead[0].id = newId)
    setNewLead([...newLead], newLead[0].address[0].street = screen.newLead.address)
    setNewLead([...newLead], newLead[0].address[0].lat = screen.newLead.position.lat)
    setNewLead([...newLead], newLead[0].address[0].lng = screen.newLead.position.lng)
    console.log(newLead)
    pushNewLead();

    dispatchScreen({
      type: 'ADD_NEW_PIN',
      payload: false
    });
  }

  const pushNewLead = async () => {
    const options = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newLead[0])
    }
    const newLeadAdd = await fetch('http://localhost:3001/tenders',
      options)

      const responseTenders = await fetch('http://localhost:3001/tenders')
      const dataTender = await responseTenders.json();
      dispatchTender({ type: 'ADD_TENDER', payload: dataTender })

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
            onChange={e => setNewLead([...newLead], newLead[0].commercial_name = e.target.value)}
            helperText="nome do estabelecimento"
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  <StoreIcon className={classes.icons} />
                </InputAdornment>,
            }}
          />
          <TextField
            placeholder="Segmento"
            id="business_type"
            onChange={e => setNewLead([...newLead], newLead[0].business_type = e.target.value)}
            helperText="Ex: Restaurante"
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  <StorefrontIcon className={classes.icons} />
                </InputAdornment>,
            }}
          />
          <TextField
            placeholder="Endereço"
            id="address"
            disabled
            onChange={e => setNewLead([...newLead], newLead[0].address[0].street = e.target.value)}
            value={screen && screen.newLead.address}
            helperText="Endereço definido ao clicar"
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  <PinDropIcon className={classes.icons} />
                </InputAdornment>,
            }}
          />
          <TextField
            placeholder="TPV Potencial"
            type="number"
            onChange={e => setNewLead([...newLead], newLead[0].tpv = e.target.value)}
            id="tpv"
            helperText="transações no cartão p/ mês"
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  <TrendingUpIcon className={classes.icons} />
                </InputAdornment>,
            }}
          />
          <br />
          <Checkbox
            color="default"
            onChange={e => setNewLead([...newLead], newLead[0].visit[0].visit_today = true)}
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
            onClick={addNewLead}
          >
            Cadastrar
          </Fab>
        </div>
      </Card>
    </div>

  );
}

export default LeadInfo
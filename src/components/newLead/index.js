import React, { useState } from 'react';
import uniqid from 'uniqid'
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



function useFormik({
  initialValues,
}) {
  const [values, setValues] = useState(initialValues);

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    const { value } = event.target;
    fieldName === 'visit_today' ? setValues({
      ...values,
      [fieldName]: values.visit_today ? false : true
    })
      :
      setValues({
        ...values,
        [fieldName]: value,
      }); 
  }

  return {
    values,
    handleChange,
  };
}



function LeadInfo({ client }) {
  const classes = useStyles();
  const { screen, dispatchScreen, setFilter, leadsData, dispatchLead } = useClienteData();
  let latitude = screen.newLead.position.lat
  let longitude = screen.newLead.position.lng
  let streetAddress = screen.newLead.address

  let INITIAL_LEADS = {
    id: uniqid('lead-'),
    commercial_name: '',
    business_type: '',
    tpv: 0,
    address: {
      street: streetAddress,
      lat: latitude,
      lng: longitude,
    },
    visit_numbers: 0,
    negotiation_status: '',
    last_visit: '',
    visit_today: false,
    send_proposal: false,
    client_id: ''
  }


  const [addLead, setAddLead] = useState(INITIAL_LEADS)
  const [errors, setErros] = useState({
    leadName: null,
    leadType: false,
    leadAddres: false,
    leadTpv: false,
  })


  const ERRORS = {
    leadName: false,
    leadType: false,
    leadAddres: false,
    leadTpv: false,
  }

  const check = () => {
    if (addLead.commercial_name.length < 5 || addLead.commercial_name.length > 15) {
      setErros({ ...errors, leadName: true })
    } else {
      setErros({ ...errors, leadName: false })
    }

  }


  const closeNewLead = () => {
    dispatchScreen({
      type: 'ADD_NEW_PIN',
      payload: false
    });
  }
  const addNewLead = async () => {
    pushNewLead();
  }

  const pushNewLead = async (value) => {
    const newLeadAdd = await fetch('http://localhost:3001/leads', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    })
    if (newLeadAdd.ok) {
      closeNewLead();
      const responseLeads = await fetch('http://localhost:3001/leads')
      const dataLead = await responseLeads.json();
      dispatchLead({ type: 'ADD_LEAD', payload: dataLead })
    }
  }

  const formik = useFormik({
    initialValues: INITIAL_LEADS
  });

  return (

    <div className={classes.main}>

      <Card className={classes.root}>
        <form onSubmit={(event) => {
          event.preventDefault();
          console.log(formik.values);
          pushNewLead(formik.values)
          alert('Olha o console!');
        }}
        >
          <div className={classes.firstComponent}>
            <div className={classes.head}>
              <Typography className={classes.title}>
                Novo Lead
          </Typography>
            </div>
            <TextField
              placeholder="Nome comercial"
              name="commercial_name"
              onChange={formik.handleChange}
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
              name="business_type"
              onChange={formik.handleChange}
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
              value={screen && screen.newLead.address}
              helperText="Endereço pré definido ao clicar"
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
              name="tpv"
              onChange={formik.handleChange}
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
              name="visit_today"
              onChange={formik.handleChange}
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
            <strong>Visitar hoje</strong>

          </div>
          <div className={classes.buttons}>
            <Fab
              className={classes.delet}
              variant="extended"
              onClick={closeNewLead}
            >
              Cancelar
          </Fab>
            <Fab
              className={classes.newTask}
              variant="extended"
              type="submit"
              name="id"
              onSubmit={formik.handleChange}
            >
              Cadastrar
          </Fab>

          </div>
        </form>
      </Card>

    </div>

  );
}

export default LeadInfo
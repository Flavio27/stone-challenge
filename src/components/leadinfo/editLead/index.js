import React, { useState } from 'react';
import { useClienteData } from '../../../store/Clients'
import useFormik from './formik'
import uniqid from 'uniqid'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import StoreIcon from '@material-ui/icons/Store';
import CloseIcon from '@material-ui/icons/Close';
import StorefrontIcon from '@material-ui/icons/Storefront';
import CachedIcon from '@material-ui/icons/Cached';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { useStyles } from './styles'


function LeadInfo({ info, back }) {
  const classes = useStyles();
  const { dispatchScreen, dispatchLead } = useClienteData();
  const [errorSignup, setErrorSignup] = useState(false)
  const [confirmDelet, setconfirmDelet] = useState(false)

  const closeNewLead = () => {
    dispatchScreen({
      type: 'ADD_NEW_PIN',
      payload: false
    });
  }


  const editLead = async (value) => {
    const newLeadAdd = await fetch(`http://localhost:3001/leads/${info.id}`, {
      method: 'PUT',
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

  const deletLead = async (value) => {
    const newLeadAdd = await fetch(`http://localhost:3001/leads/${info.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'DELETE',
        'mode': 'cors',
      },
    })
    if (newLeadAdd.ok) {
      closeNewLead();
      dispatchScreen({
        type: 'ACTIVE_ALERT_DELET',
        payload: true
      })
      const responseLeads = await fetch('http://localhost:3001/leads')
      const dataLead = await responseLeads.json();
      dispatchLead({ type: 'ADD_LEAD', payload: dataLead })
    }
  }


  const formik = useFormik({
    initialValues: info,
    validate: function (values) {
      const errors = {};

      if (values.commercial_name.length < 5 || values.commercial_name.length > 20) {
        errors.commercial_name = 'Nome deve ter entre 5 a 20 caracteres'
      }

      if (values.business_type.length < 2 || values.business_type.length > 15) {
        errors.business_type = 'Segmento deve ter entre 2 a 15 caracteres'
      }

      return errors;
    }
  });


  const onSubmitForm = () => {
    if (Object.keys(formik.errors).length === 0) {
      setErrorSignup(false)
      editLead(formik.values)
      dispatchScreen({
        type: 'ACTIVE_ALERT_EDIT',
        payload: true
      })
    } else {
      setErrorSignup(true)
    }
  }

  return (
    <>
      {!confirmDelet ?
        <div className={classes.main}>
          <Card className={classes.root}>
            <form onSubmit={(event) => {
              event.preventDefault();
              onSubmitForm();
            }}
            >
              <div className={classes.firstComponent}>
                <div className={classes.head}>
                  <Typography className={classes.title}>
                    Editar {info.commercial_name}
                  </Typography>
                </div>
                {errorSignup &&
                  <Typography className={classes.error}>
                    Verifique os campos abaixo
              </Typography>}
                <TextField
                  error={formik.touched.commercial_name &&
                    formik.errors.commercial_name && true}
                  placeholder="Nome comercial"
                  name="commercial_name"
                  id="commercial_name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.commercial_name}
                  helperText={formik.touched.commercial_name &&
                    formik.errors.commercial_name ?
                    formik.errors.commercial_name :
                    'Nome do estabelecimento'}
                  InputProps={{
                    startAdornment:
                      <InputAdornment position="start">
                        <StoreIcon className={classes.icons} />
                      </InputAdornment>,
                  }}
                />

                <TextField
                  error={formik.touched.business_type &&
                    formik.errors.business_type && true}
                  placeholder="Segmento"
                  name="business_type"
                  value={formik.values.business_type}
                  id="business_type"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={formik.touched.business_type &&
                    formik.errors.business_type ?
                    formik.errors.business_type :
                    'Ex: Borracharia'}
                  InputProps={{
                    startAdornment:
                      <InputAdornment position="start">
                        <StorefrontIcon className={classes.icons} />
                      </InputAdornment>,
                  }}
                />
                <TextField
                  placeholder="TPV Potencial"
                  type="number"
                  name="tpv"
                  onChange={formik.handleChange}
                  id="tpv"
                  value={formik.values.tpv}
                  helperText="transações no cartão p/ mês"
                  InputProps={{
                    startAdornment:
                      <InputAdornment position="start">
                        <TrendingUpIcon className={classes.icons} />
                      </InputAdornment>,
                  }}
                />
                <TextField
                  placeholder="Status da Negociação"
                  name="negotiation_status"
                  onChange={formik.handleChange}
                  id="negotiation_status"
                  value={formik.values.negotiation_status}
                  helperText="Ex: fria, quente, obs..."
                  InputProps={{
                    startAdornment:
                      <InputAdornment position="start">
                        <CachedIcon className={classes.icons} />
                      </InputAdornment>,
                  }}
                />
                <br />
                <Checkbox
                  checked={formik.values.visit_today ? true : false}
                  color="default"
                  name="visit_today"
                  onChange={formik.handleChange}
                  inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
                <strong>Visitar hoje</strong>
              </div>
              <div className={classes.buttons}>
                <Fab
                  className={classes.back}
                  variant="extended"
                  onClick={back}
                >
                  voltar
                </Fab>
                <Fab
                  className={classes.edit}
                  variant="extended"
                  type="submit"
                  name="id"
                  onSubmit={formik.handleChange}
                >
                  Aplicar
                </Fab>
              </div>
              <Typography
                className={classes.delet}
                variant="extended"
                name="id"
                onClick={() => setconfirmDelet(true)}
              >
                <CloseIcon className={classes.deletIcon} />
              Excluir lead
          </Typography>
            </form>
          </Card>
        </div> :
        <div className={classes.main}>
          <Card className={classes.root}>
            <Typography className={classes.title}>
              Quer mesmo excluir?
                    <br />
              {info.commercial_name}
            </Typography>
            <div className={classes.firstComponent}>
              <div className={classes.buttons}>
                <Fab
                  className={classes.back}
                  variant="extended"
                  onClick={() => setconfirmDelet(false)}
                >
                  NÃO
                </Fab>
                <Fab
                  className={classes.edit}
                  variant="extended"
                  type="submit"
                  name="id"
                  onClick={() => { deletLead() }}
                >
                  SIM
                </Fab>
              </div>
            </div>
          </Card>
        </div>

      }
    </>
  );
}

export default LeadInfo
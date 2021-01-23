import React, { useState } from "react";
import { useClienteData } from "../../store/Clients";
import { pushNewLead } from "../../services/api";
import useFormik from "./formik";
import uniqid from "uniqid";

import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import StoreIcon from "@material-ui/icons/Store";
import StorefrontIcon from "@material-ui/icons/Storefront";
import PinDropIcon from "@material-ui/icons/PinDrop";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import { useStyles } from "./styles";

function LeadInfo({ client }) {
  const classes = useStyles();
  const { screen, dispatchScreen, dispatchLead } = useClienteData();
  const [errorSignup, setErrorSignup] = useState(false);

  let INITIAL_LEADS = {
    id: uniqid("lead-"),
    commercial_name: "",
    business_type: "",
    tpv: 0,
    address: {
      street: screen.newLead.address,
      lat: screen.newLead.position.lat,
      lng: screen.newLead.position.lng,
    },
    visit_numbers: 0,
    negotiation_status: "",
    last_visit: "",
    visit_today: false,
    send_proposal: false,
    client_id: "",
  };

  const closeNewLead = () => {
    dispatchScreen({
      type: "ADD_NEW_PIN",
      payload: false,
    });
  };

  const pushNewLead = async (value) => {
    const newLeadAdd = await fetch("http://localhost:3001/leads", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    if (newLeadAdd.ok) {
      closeNewLead();
      const responseLeads = await fetch("http://localhost:3001/leads");
      const dataLead = await responseLeads.json();
      dispatchLead({ type: "ADD_LEAD", payload: dataLead });
    }
  };

  const formik = useFormik({
    initialValues: INITIAL_LEADS,
    validate: function (values) {
      const errors = {};

      if (
        values.commercial_name.length < 5 ||
        values.commercial_name.length > 20
      ) {
        errors.commercial_name = "Nome deve ter entre 5 a 20 caracteres";
      }

      if (values.business_type.length < 2 || values.business_type.length > 15) {
        errors.business_type = "Segmento deve ter entre 2 a 15 caracteres";
      }

      return errors;
    },
  });

  const onSubmitForm = () => {
    if (Object.keys(formik.errors).length === 0) {
      setErrorSignup(false);
      pushNewLead(formik.values);
      dispatchScreen({
        type: "ACTIVE_ALERT_SIGNUP",
        payload: true,
      });
    } else {
      setErrorSignup(true);
    }
  };

  return (
    <div className={classes.main}>
      <Card className={classes.root}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmitForm();
          }}
        >
          <div className={classes.firstComponent}>
            <div className={classes.head}>
              <Typography className={classes.title}>Novo Lead</Typography>
            </div>
            {errorSignup && (
              <Typography className={classes.error}>
                Verifique os campos abaixo
              </Typography>
            )}
            <TextField
              error={
                formik.touched.commercial_name &&
                formik.errors.commercial_name &&
                true
              }
              placeholder="Nome comercial"
              name="commercial_name"
              id="commercial_name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.commercial_name}
              helperText={
                formik.touched.commercial_name && formik.errors.commercial_name
                  ? formik.errors.commercial_name
                  : "Nome do estabelecimento"
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StoreIcon className={classes.icons} />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              error={
                formik.touched.business_type &&
                formik.errors.business_type &&
                true
              }
              placeholder="Segmento"
              name="business_type"
              id="business_type"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              helperText={
                formik.touched.business_type && formik.errors.business_type
                  ? formik.errors.business_type
                  : "Ex: Borracharia"
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StorefrontIcon className={classes.icons} />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              placeholder="Endereço"
              id="address"
              disabled
              value={screen && screen.newLead.address}
              helperText="Endereço pré definido ao clicar"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PinDropIcon className={classes.icons} />
                  </InputAdornment>
                ),
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
                startAdornment: (
                  <InputAdornment position="start">
                    <TrendingUpIcon className={classes.icons} />
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <Checkbox
              color="default"
              name="visit_today"
              onChange={formik.handleChange}
              inputProps={{ "aria-label": "checkbox with default color" }}
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

export default LeadInfo;

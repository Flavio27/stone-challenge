import React, { useState } from "react";
import { useClienteData } from "../../store/Clients";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import HelpIcon from "@material-ui/icons/Help";
import StorefrontIcon from "@material-ui/icons/Storefront";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import EventIcon from "@material-ui/icons/Event";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FilterListIcon from "@material-ui/icons/FilterList";
import Select from "@material-ui/core/Select";

import { useStyles } from "./styles";

export default function Filter() {
  const classes = useStyles();
  const { dispatchScreen, leadsData, clientsData } = useClienteData();
  const [filterForm, setFilterForm] = useState({
    proposal: false,
    type: false,
    tpv: "",
    visit: false,
  });
  const [allClients, setAllClients] = useState([
    ...leadsData.filter((e) => e.client_id === ""),
    ...clientsData,
  ]);

  const tpvChosed = (value) => {
    if (value === "min") return "&tpv_lte=10000";
    if (value === "med") return "&tpv_gte=9999&tpv_lte=20001";
    if (value === "max") return "&tpv_gte=20001";
  };

  const applyFilter = async () => {
    await dispatchScreen({
      type: "ACTIVE_FUNNEL",
      payload: false,
    });

    getFiltredItensLead();
    if (!filterForm.proposal)
    getFiltredItensClients()
  };

  const removeEqualType = () => {
    const types = allClients.map((e) => e.business_type.toLowerCase());
    const filtred = types.filter(function (e, i) {
      return types.indexOf(e) === i;
    });
    return filtred;
  };

  const getFiltredItensLead = async () => {
    let request = "";
    if (filterForm.proposal) request += `&send_proposal=${filterForm.proposal}&client_id=`;
    if (filterForm.visit) request += `&visit_today=${filterForm.visit}&client_id=`;
    if (filterForm.type) request += `&business_type=${filterForm.type}&client_id=`;
    if (filterForm.tpv) request += `${tpvChosed(filterForm.tpv)}&client_id=`;
    console.log(request);
    const filtredItens = await fetch(`http://localhost:3001/leads?${request}`);
    const filtredData = await filtredItens.json();
    console.log(filtredData);
  };

  const getFiltredItensClients = async () => {
    let request = "";
    if (filterForm.visit) request += `&visit_today=${filterForm.visit}`;
    if (filterForm.type) request += `&business_type=${filterForm.type}`;
    if (filterForm.tpv) request += `${tpvChosed(filterForm.tpv)}`;
    console.log(request);
    const filtredItens = await fetch(`http://localhost:3001/clients?${request}`);
    const filtredData = await filtredItens.json();
    console.log(filtredData);
  };

  return (
    <div className={classes.root}>
      <br />
      <Typography className={classes.title} gutterBottom>
        Filtro
      </Typography>
      <div className={classes.divItem}>
        <HelpIcon />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">Lead</InputLabel>
          <Select
            native
            // value={state.age}
            onChange={(e) => {
              setFilterForm({ ...filterForm, proposal: e.target.value });
            }}
            placeholder="Lead"
          >
            <option aria-label="None" value={false} />
            <option value={true}>Com Proposta</option>
            <option value={false}>Sem Proposta</option>
          </Select>
        </FormControl>
      </div>
      <div className={classes.divItem}>
        <StorefrontIcon />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">Estabelecimento</InputLabel>
          <Select
            native
            onChange={(e) => {
              setFilterForm({ ...filterForm, type: e.target.value });
            }}
          >
            <option aria-label="None" value={false} />
            {removeEqualType().map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={classes.divItem}>
        <TrendingUpIcon />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">TPV</InputLabel>
          <Select
            native
            onChange={(e) => {
              setFilterForm({ ...filterForm, tpv: e.target.value });
            }}
            placeholder="TPV"
          >
            <option aria-label="None" value={false} />
            <option value={"min"}> menos de 10k </option>
            <option value={"med"}>entre 10 a 20k</option>
            <option value={"max"}>mais de 20k</option>
          </Select>
        </FormControl>
      </div>
      <div className={classes.divItem}>
        <EventIcon />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">Visita Hoje</InputLabel>
          <Select
            native
            onChange={(e) => {
              setFilterForm({ ...filterForm, visit: e.target.value });
            }}
            placeholder="Visita Hoje"
          >
            <option aria-label="None" value={false} />
            <option value={true}> SIM</option>
            <option value={false}>NÃO</option>
          </Select>
        </FormControl>
      </div>
      <Button
        variant="contained"
        size="small"
        className={classes.button}
        startIcon={<FilterListIcon />}
        onClick={() => {
          applyFilter();
        }}
      >
        Filtrar
      </Button>
    </div>
  );
}

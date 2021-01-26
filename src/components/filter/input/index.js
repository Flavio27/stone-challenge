import React, { useState, useEffect } from "react";
import { useClienteData } from "../../../store/Clients";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HelpIcon from "@material-ui/icons/Help";
import StorefrontIcon from "@material-ui/icons/Storefront";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useStyles } from "./styles";

function Input({ type }) {
  let input = [];
  const classes = useStyles();
  const { clientsData, leadsData, filter, setFilter } = useClienteData();
  const [open, setOpen] = useState(false);
  const [establishment, setestablishment] = useState([]);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    let value = event.target.value;
    if (type === "leads") setFilter({ ...filter, lead: value });
    if (type === "segmento") setFilter({ ...filter, establishment: value });
    if (type === "tpv") setFilter({ ...filter, tpv: value });
  };

  const filterEstablishment = () => {
    let clientsEstablishments = clientsData.map((est) => {
      return est.business_type;
    });
    let leadsEstablishments = leadsData.map((est) => {
      return est.business_type;
    });
    const allEstablishments = [
      ...clientsEstablishments,
      ...leadsEstablishments,
    ];
    const filtredEstablishments = allEstablishments.filter(
      (es, i) => allEstablishments.indexOf(es) === i
    );
    setestablishment(filtredEstablishments);
  };

  useEffect(() => {
    type === "segmento" && filterEstablishment();
  }, [clientsData, leadsData]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  if (type === "leads") input = ["Com proposta", "Sem proposta"];
  if (type === "segmento") input = establishment;
  if (type === "tpv") input = ["<10k", "10-20k", ">20k"];

  return (
    <ListItem button className={classes.main}>
      <ListItemIcon>
        {type === "leads" && <HelpIcon />}
        {type === "segmento" && <StorefrontIcon />}
        {type === "tpv" && <TrendingUpIcon />}
      </ListItemIcon>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">{type}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {input.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ListItem>
  );
}

export default Input;

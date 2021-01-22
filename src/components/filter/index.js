import React, { useState } from 'react';
import { useClienteData } from '../../store/Clients'
import InputFilter from './input'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { useStyles } from './styles'


export default function Filter() {
  const classes = useStyles();
  const { dispatchScreen, leadsData, clientsData, filter, setFilter } = useClienteData();
  const [checked, setChecked] = useState([0]);
  const [visitsToday, setVisitsToday] = useState([]);

  const applyFilter = async () => {
    await dispatchScreen({
      type: 'ACTIVE_FUNNEL',
      payload: false,
    })
    console.log(filter)
    console.log(visitsToday)
    await setFilter([]);
  }

  const filterVisitToday = () => {
    let clientsVisitToday = clientsData.filter((client) => {
      return client.visit_today
    })
    let leadsVisitToday = leadsData.filter((lead) => {
      return lead.visit_today
    })
    const allVisitsToday = [...clientsVisitToday, ...leadsVisitToday]
    setVisitsToday(allVisitsToday)
  }

  const select = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
      filterVisitToday()
    } else {
      setVisitsToday([])
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
      subheader={
        <ListSubheader component="div" className={classes.header} id="nested-list-subheader" >
          Filtrar por
        </ListSubheader>
      }
    >
      <InputFilter type={'leads'} />
      <InputFilter type={'segmento'} />
      <InputFilter type={'tpv'} />
      <ListItem role={undefined} dense button onClick={select()}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            tabIndex={-1}
            disableRipple
            color="default"
          />
        </ListItemIcon>
        <ListItemText primary="Visita Hoje" />
      </ListItem>
      <div>
        <Button
          size="small"
          className={classes.filterButton}
          onClick={applyFilter}
        >
          Aplicar
        </Button>
      </div>

    </List>
  );
}
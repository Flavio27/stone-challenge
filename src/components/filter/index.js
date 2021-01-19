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


export default function NestedList() {
  const classes = useStyles();
  const { dispatchScreen, tendersData, clientsData } = useClienteData();
  const [checked, setChecked] = useState([0]);

  const applyFilter = async () =>{
    await dispatchScreen({
      type: 'ACTIVE_FUNNEL',
      payload: false,
    })
  }

  const filterVisitToday = () =>{
    
  }

  const select = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);    
    } else {
      newChecked.splice(currentIndex, 1);
      filterVisitToday()
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
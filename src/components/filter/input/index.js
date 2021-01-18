import React, { useState } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HelpIcon from '@material-ui/icons/Help';
import StorefrontIcon from '@material-ui/icons/Storefront';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { useStyles } from './styles'

function Input({ type }) {
  const classes = useStyles();
  const [state, setState] = useState({
    age: '',
    name: 'hai',
  });


  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <ListItem button className={classes.main}>
      <ListItemIcon>
        {type === 'Leads' && <HelpIcon />}
        {type === 'Segmento' && <StorefrontIcon />}
        {type === 'TPV' && <TrendingUpIcon />}
      </ListItemIcon>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">{type}</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          {type === 'Leads' &&
            <>
              <option value={10}>proposta enviada</option>
              <option value={20}>sem proposta</option>
            </>}
          {type === 'Segmento' &&
            <>
              <option value={10}>?</option>
              <option value={20}>?</option>
            </>}
          {type === 'TPV' &&
            <>
              <option value={10}>Menos de 10k</option>
              <option value={20}>De 10k a 20k</option>
              <option value={30}>Mais de 20k</option>
            </>}

        </Select>
      </FormControl>
    </ListItem>
  )
}

export default Input

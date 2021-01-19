import React, { useState, useEffect } from 'react'
import { useClienteData } from '../../../store/Clients'
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
  const { clientsData, tendersData} = useClienteData()
  const [establishment, setestablishment] = useState([])
  const [state, setState] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const filterEstablishment = () => {
    let clientsEstablishments = clientsData.map((est) => {
      return (est.business_type)
    })
    let leadsEstablishments = tendersData.map((est) => {
      return (est.business_type)
    })
    const allEstablishments = [...clientsEstablishments, ...leadsEstablishments]
    const filtredEstablishments = allEstablishments.filter((es, i) =>
      allEstablishments.indexOf(es) === i);
    setestablishment(filtredEstablishments)
    console.log(filtredEstablishments)
  }

  useEffect(() => {
    
    type === 'segmento' && filterEstablishment()

  }, [clientsData, tendersData])



return (
  <ListItem button className={classes.main}>
    <ListItemIcon>
      {type === 'leads' && <HelpIcon />}
      {type === 'segmento' && <StorefrontIcon />}
      {type === 'tpv' && <TrendingUpIcon />}
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
        {type === 'leads' &&
          <>
            <option value={true}>proposta enviada</option>
            <option value={false}>sem proposta</option>
          </>}
        {type === 'segmento' &&
          establishment.length > 0 &&
          establishment.map(est => (
            <option key={est} value={est}>{est}</option>
          ))
        }
        {type === 'tpv' &&
          <>
            <option value={10}>Menos de 10k</option>
            <option value={20}>De 10k a 20k</option>
            <option value={21}>Mais de 20k</option>
          </>}

      </Select>
    </FormControl>
  </ListItem>
)
}

export default Input

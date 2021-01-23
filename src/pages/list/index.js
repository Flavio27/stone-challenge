import React from 'react'
import { useClienteData } from '../../store/Clients'
import SelectCostumer from '../../components/selectCostumer'
import ClientInfo from '../../components/clientInfo'
import LeadInfo from '../../components/leadinfo'
import SearchBar from '../../components/searchBar'
import BottomAppBar from '../../components/bottomAppBar'
import { useStyles } from './styles'


function List() {
  const classes = useStyles();
  const { clientsData, leadsData, screen } = useClienteData();
  let verify = false
  if(screen.alert.edit)
  verify = true
  if(screen.alert.delet)
  verify = true

  const clientRender = () => {
    const render = clientsData.length > 0 &&
      clientsData.map((client, index) => (
        <ClientInfo key={client.id} client={client} />
      ))
    return render
  }
  const leadRender = () => {
    const render = leadsData.length > 0 &&
      leadsData.map((client, index) => (
        <LeadInfo key={client.id} client={client} />
      ))
    return render
  }

  return (
    <div>
      {!verify && <SearchBar />}
      <SelectCostumer client={clientRender} lead={leadRender} />
      <div className={classes.topSpace} />
      <BottomAppBar />
    </div>
  )
}

export default List

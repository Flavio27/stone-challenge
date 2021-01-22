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
  const { clientsData, leadsData } = useClienteData();

  // const clientOrLead = (whoRender) => {
  //   const render = whoRender.length > 0 &&
  //     whoRender.map((client, index) => (
  //       <CardInfo key={client.id} client={client} />
  //     ))
  //   return render
  // }

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
      <SearchBar />
      <SelectCostumer client={clientRender} lead={leadRender}/>
      <div className={classes.topSpace} />
      <BottomAppBar />
    </div>
  )
}

export default List

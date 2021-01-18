import React from 'react'
import { useClienteData } from '../../store/Clients'
import ClientInfo from '../../components/clientInfo'
import SearchBar from '../../components/searchBar'
import BottomAppBar from '../../components/bottomAppBar'
import { useStyles } from './styles'


function List() {
  const { clientsData } = useClienteData();
  const classes = useStyles();
  return (
    <div>
      <SearchBar />
      {clientsData.map((client, index) => (
        <ClientInfo key={client.id} client={client} />
      ))}
      <div className={classes.topSpace}/>
      <BottomAppBar />
    </div>
  )
}

export default List

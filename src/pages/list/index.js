import React, { useEffect} from 'react'
import { useClienteData } from '../../store/Clients'
import ClientInfo from '../../components/clientInfo'
import SearchBar from '../../components/searchBar'
import BottomAppBar from '../../components/bottomAppBar'


function List() {
  const { data, setData, clientsData} = useClienteData();

  return (
    <div>
      <SearchBar/>
      {clientsData.map((client, index) => (
        <ClientInfo key={client.id} client={client}/>
      ))}
      <BottomAppBar/>
    </div>
  )
}

export default List

import React, { useEffect} from 'react'
import { useClienteData } from '../../store/Clients'
import ClientInfo from '../../components/clientInfo'
import SearchBar from '../../components/searchBar'
import BottomAppBar from '../../components/bottomAppBar'


function List() {
  const { data, setData} = useClienteData();

  useEffect(async => {

    async function getClients() {
      const response = await fetch('https://60020a1208587400174db8f0.mockapi.io/api/v1/cliente')
      const data = await response.json();
      setData(data)
    } getClients();

  },[])

  return (
    <div>
      <SearchBar/>
      {data.map((client, index) => (
        <ClientInfo key={client.id} client={client}/>
      ))}
      <BottomAppBar/>
    </div>
  )
}

export default List

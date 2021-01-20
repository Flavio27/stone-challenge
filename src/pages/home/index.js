import React from 'react'
import SearchBar from '../../components/searchBar'
import BottomAppBar from '../../components/bottomAppBar'
import PintFilterBar from '../../components/pinFilterBar'
import InfoClientpin from '../../components/infoClientPin'
import NewLead from '../../components/newLead'
import Map from '../../components/map'
import Modal from '../../components/modal'
import Filter from '../../components/filter'
import { useClienteData} from '../../store/Clients'
import './styles.css'

function Home() {
  const { screen } = useClienteData();
  return (
    <div>
      <SearchBar/>
      <Map/>
      {screen.funnel && <Modal children={<Filter/>}/>}
      <Modal 
      type={'newLead'}
      children={<NewLead/>}/>
      <PintFilterBar/>
      {/* <InfoClientpin/> */}
      <BottomAppBar/>
    </div>
  )
}

export default Home

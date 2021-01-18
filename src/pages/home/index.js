import React from 'react'
import SearchBar from '../../components/searchBar'
import BottomAppBar from '../../components/bottomAppBar'
import PintFilterBar from '../../components/pinFilterBar'
import Map from '../../components/map'
import './styles.css'


function Home() {
  return (
    <div>
      <SearchBar/>
      <Map/>
      <PintFilterBar/>
      <BottomAppBar/>
    </div>
  )
}

export default Home

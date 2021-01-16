import React from 'react'
import ReactDOM from 'react-dom';
import Routes from './config/routes'
import { useState } from 'react'

import BottomAppBar from './components/bottomAppBar'
import SearchBar from './components/searchBar'
// import ClientsList from './components/clientInfo'
// import InfoClientPin from './components/infoClientPin'
// import PintFilterBar from './components/pinFilterBar'
// import Map from './components/map'
import ClientsData from './store/Clients'
import Clients from './pages/list'
import './App.css';

ReactDOM.render(
  <ClientsData>
    <Routes/>
  </ClientsData>,
  document.getElementById('root')
);



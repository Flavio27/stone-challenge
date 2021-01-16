import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './config/routes'
import ClientsData from './store/Clients'
import BottomAppBar from './components/bottomAppBar'
import SearchBar from './components/searchBar'


ReactDOM.render(
  <ClientsData>
    <Routes/>
  </ClientsData>,
  document.getElementById('root')
);


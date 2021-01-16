import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Routes } from './config/routes'
import ClientsData from './store/Clients'
import BottomAppBar from './components/bottomAppBar'
import SearchBar from './components/searchBar'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <ClientsData>
      <Routes />
    </ClientsData>
  </BrowserRouter>,
  document.getElementById('root')
);


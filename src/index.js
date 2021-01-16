import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Routes } from './config/routes'
import ClientsData from './store/Clients'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <ClientsData>
      <Routes />
    </ClientsData>
  </BrowserRouter>,
  document.getElementById('root')
);


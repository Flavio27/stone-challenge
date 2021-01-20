import React, { useState, createContext, useContext, useEffect, useReducer } from 'react';
import { clientReducer } from './clientReducer'
import { tenderReducer } from './tenderReducer'
import { screenReducer } from './screenReducer'

const dataContext = createContext()

const CLIENTS_INITAL_STATE = [{
  id: 0,
  commercial_name: '',
  business_type: '',
  tpv: 0,
  address: [{
    id: 0,
    clienteId: 0,
    city: '',
    street: '',
    lat: 0,
    lng: 0,
    state: '',
  }],
  visits: [{
    id: 0,
    clienteId: 0,
    visits_number: 0,
    last_visit: '',
  }],
}]

const INITIAL_TENDERS = {
  id: 0,
  name: '',
  tpv: 0,
  negotiation: [{
    id: 0,
    tenderId: 0,
    status: '',
    request: false,
    observations: '',
  }],
  address: [{
    id: 0,
    tenderId: 0,
    city: '',
    street: '',
    lat: 0,
    lng: 0,
    state: '',
  }]
}
const INITIAL_SCREENS = {
  funnel: false,
  list: false,
  map: {
    searchBar: true,
    screen: true,
    filterBar: true,
    clientPin: false,
  },
  script: false,
  more: false,
  filter: {
    clients: false,
    tenders: false,
    qualifications: false,
  }
}

const INITIAL_FILTER = [{
  lead: '',
  establishment: '',
  tpv: ''
}]

export const INITIAL_LOCATION = {
  lat: -23.5564616232912,
  lng: -46.63087491974125,
  zoom: 16
}

export default function Clients({ children }) {
  const [localization, setLocalization] = useState(INITIAL_LOCATION)
  const [clientsData, dispatch] = useReducer(clientReducer, CLIENTS_INITAL_STATE)
  const [tendersData, dispatchTender] = useReducer(tenderReducer, INITIAL_TENDERS)
  const [screen, dispatchScreen] = useReducer(screenReducer, INITIAL_SCREENS)
  const [filter, setFilter] = useState(INITIAL_FILTER)

  useEffect(async => {
    async function getClients() {
      const responseClients = await fetch('http://localhost:3001/clients')
      const dataClient = await responseClients.json();
      dispatch({ type: 'ADD_CLIENT', payload: dataClient })

      const responseTenders = await fetch('http://localhost:3001/tenders')
      const dataTender = await responseTenders.json();
      dispatchTender({ type: 'ADD_TENDER', payload: dataTender })
    } getClients();
  }, [])

  return (
    <dataContext.Provider
      value={{
        filter, setFilter,
        localization, setLocalization,
        clientsData, dispatch,
        tendersData, dispatchTender,
        screen, dispatchScreen
      }}>
      {children}
    </dataContext.Provider>
  )
}

export function useClienteData() {
  const clientContext = useContext(dataContext);
  if (!clientContext) throw new Error("useClienteData must be used within a Clients provider");
  const {
    filter, setFilter, clientsData, dispatch, screen,
    dispatchScreen, localization, setLocalization, tendersData, dispatchTender,
  } = clientContext;
  return {
    filter, setFilter, clientsData, dispatch, screen,
    dispatchScreen, localization, setLocalization, tendersData, dispatchTender,
  }
}

import React, { useState, createContext, useContext, useEffect, useReducer } from 'react';
import { clientReducer } from './clientReducer'
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
}

export default function Clients({ children }) {
  const [localization, setLocalization] = useState({lat: -23.551062277415877, lng: -46.63144359174961, zoom: 16})
  const [clientsData, dispatch] = useReducer(clientReducer, CLIENTS_INITAL_STATE)
  const [screen, dispatchScreen] = useReducer(screenReducer, INITIAL_SCREENS)
  const [data, setData] = useState([])

  useEffect(async => {

    async function getClients() {
      const response = await fetch('https://60020a1208587400174db8f0.mockapi.io/api/v1/cliente')
      const data = await response.json();
      dispatchScreen({type: 'START', payload: INITIAL_SCREENS})
      dispatch({ type: 'ADD_CLIENT', payload: data })
      // console.log(clientData)

    } getClients();

  }, [])

  return (
    <dataContext.Provider
      value={{
        data, setData,
        localization, setLocalization,
        clientsData, dispatch,
        screen, dispatchScreen

      }}>
      {children}
    </dataContext.Provider>
  )
}

export function useClienteData() {
  const clientContext = useContext(dataContext);
  if (!clientContext) throw new Error("useClienteData must be used within a Clients provider");
  const { data, setData, clientsData, dispatch, screen, dispatchScreen, localization, setLocalization } = clientContext;
  return { data, setData, clientsData, dispatch, screen, dispatchScreen, localization, setLocalization }
}

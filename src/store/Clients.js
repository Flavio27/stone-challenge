import React, { useState, createContext, useContext, useEffect, useReducer } from 'react';
import {
  CLIENTS_INITAL_STATE,
  INITIAL_TENDERS,
  INITIAL_SCREENS,
  INITIAL_FILTER
} from './initialState'
import { clientReducer } from './reducers/clientReducer'
import { tenderReducer } from './reducers/tenderReducer'
import { screenReducer } from './reducers/screenReducer'

const dataContext = createContext()

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

import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  CLIENTS_INITAL_STATE,
  INITIAL_LEADS,
  INITIAL_SCREENS,
  INITIAL_FILTER,
  INITIAL_SCRIPT,
} from "./initialState";
import { INITIAL_LOCATION } from "./initialState";
import { clientReducer } from "./reducers/clientReducer";
import { leadReducer } from "./reducers/leadReducer";
import { screenReducer } from "./reducers/screenReducer";

const dataContext = createContext();

export default function Clients({ children }) {
  const [localization, setLocalization] = useState(INITIAL_LOCATION);
  const [clientsData, dispatch] = useReducer(
    clientReducer,
    CLIENTS_INITAL_STATE
  );
  const [leadsData, dispatchLead] = useReducer(leadReducer, INITIAL_LEADS);
  const [screen, dispatchScreen] = useReducer(screenReducer, INITIAL_SCREENS);
  const [filter, setFilter] = useState(INITIAL_FILTER);
  const [walkScriptData, setWalScript] = useState(INITIAL_SCRIPT);

  useEffect((async) => {
    async function getFistInformation() {
      const responseClients = await fetch("http://localhost:3001/clients");
      const dataClient = await responseClients.json();
      dispatch({ type: "ADD_CLIENT", payload: dataClient });

      const responseLeads = await fetch("http://localhost:3001/leads");
      const dataLead = await responseLeads.json();
      dispatchLead({ type: "ADD_LEAD", payload: dataLead });

      const responseScript = await fetch("http://localhost:3001/script");
      const dataScript = await responseScript.json();
      setWalScript(dataScript);
    }
    getFistInformation();
  }, []);

  return (
    <dataContext.Provider
      value={{
        filter,
        setFilter,
        localization,
        setLocalization,
        clientsData,
        dispatch,
        leadsData,
        dispatchLead,
        screen,
        dispatchScreen,
        walkScriptData,
        setWalScript,
      }}
    >
      {children}
    </dataContext.Provider>
  );
}

export function useClienteData() {
  const clientContext = useContext(dataContext);
  if (!clientContext)
    throw new Error("useClienteData must be used within a Clients provider");
  const {
    filter,
    setFilter,
    clientsData,
    dispatch,
    screen,
    dispatchScreen,
    localization,
    setLocalization,
    leadsData,
    dispatchLead,
    walkScriptData,
    setWalScript,
  } = clientContext;
  return {
    filter,
    setFilter,
    clientsData,
    dispatch,
    screen,
    dispatchScreen,
    localization,
    setLocalization,
    leadsData,
    dispatchLead,
    walkScriptData,
    setWalScript,
  };
}
